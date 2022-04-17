const express = require("express");
// const morgan = require('morgan')
require("dotenv").config();
var cors = require("cors");

// express app
const app = express();
const port = 3002;

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// con setting
const pg = require("pg");
const { Pool } = require("pg");
// const dbParams = require("./db");
require("dotenv").config();

const pool = new Pool({
  host: "heffalump.db.elephantsql.com",
  user: "udidwoil",
  password: process.env.REACT_APP_ELEPHANT_PASSWORD,
  max: 20,
  database: "udidwoil",
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

pool.connect();
app.get("/hello", async (req, res) => {
  pool.query("SELECT * FROM trucks", function (err, result) {
    if (err) {
      return console.error("error running query", err);
    }
    const data = JSON.stringify(result.rows);
    // console.log("OBJ", result.rows);
    // console.log("JSON", data)
    res.send(data);
  });
});

app.get("/hi", (req, res) => {
  res.json(test);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
