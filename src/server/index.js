const express = require("express");
const app = express()
const api = express.Router();

const db = require('./db');

const STATIC_LINES_DATA = {
    "A": ["Nob Hill", "Japan Town"],
    "B": ["Protrero Hill", "Financial District"],
    "C": ["Beacon Hill", "Twin Peaks"]
}

// get request for translit line data
// TODO: make this read from DB
api.get("/lines", (req, res) => {
    res.status(200).send(STATIC_LINES_DATA);
    // db.getAllLines((error, successdata) => {
    //     if (error) {
    //       console.error(error)
    //       res.status(500).send(error);
    //     } else {
    //       console.log(successdata);
    //       res.status(200).send(successdata)
    //     }
    //   })
})

// mount all the api routes at /api/v1/{lines, ...}
app.use("/api/v1", api);

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