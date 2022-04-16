let dbParams = {};
if (process.env.REACT_APP_ELEPHANTSQL) {
  dbParams.connectionString = process.env.REACT_APP_ELEPHANTSQL;
} else {
  dbParams = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: "labber",
    password: "labber",
    database: "midterm"
  };
}

module.exports = dbParams;