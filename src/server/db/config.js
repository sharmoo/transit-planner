// validate HOST and USER are set
if(!process.env.DB_HOST) {
  const errMsg = "DB_HOST environment variable is not defined"
  console.error(errMsg)
  throw new Error(errMsg)
}

if(!process.env.DB_USER) {
  const errMsg = "DB_USER environment variable is not defined"
  console.error(errMsg)
  throw new Error(errMsg)
}

module.exports = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'transit_planner'
  };
  