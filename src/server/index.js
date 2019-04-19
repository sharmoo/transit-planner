const express = require("express");
const app = express();

// add the body parsing middleware for json post requests
app.use(express.json());

const cut = require('./api/cut');

// set up a place to hold all the api endpoints
const api = express.Router();

// name the handler so we can mount it both at a more standard /api/v1/cut location
// and so we can put it at /test as required by the test
const cutRequestHandler = (req, res) => {
    // if there isn't a string_to_cut field on the post body...
    if (!Object.keys(req.body).includes("string_to_cut")) {
        // send back a 400 (Bad Request)
        res.status(400).send({
            status: 400,
            error: "string_to_cut is a required field."
        });
        return;
    }

    // otherwise send the result
    res.status(200).send({
        return_string: cut.cutString(req.body["string_to_cut"])
    });
}

// put a route at /.../cut
api.post("/cut", cutRequestHandler)

// mount all the api routes at /api/v1/{cut, ...}
app.use("/api/v1", api);

//also put a duplicate of the cutRequestHandler at /test as required
app.post("/test", cutRequestHandler);

// check to make sure we've specified a port to listen on
const PORT = process.env.PORT
if(!process.env.PORT) {
  const errMsg = "PORT environment variable is not defined"
  console.error(errMsg)
  throw new Error(errMsg)
}

// now listen on it
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})