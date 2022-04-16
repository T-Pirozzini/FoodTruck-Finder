const express = require("express");
// const morgan = require('morgan')
require("dotenv").config();

// express app
const app = express();
const port = 3002;

// con setting
const pg = require("pg");
const { Pool } = require("pg");
const dbParams = require("./db");
require("dotenv").config();

const pool = new Pool({
  host: "heffalump.db.elephantsql.com",
  user: "udidwoil",
  password: "DGDmiggnH2kuTTQiItJsg_4Pm5Hxuv4r",
  max: 20,
  database: "udidwoil",
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

const test = {
  name: "bryce",
};

app.get("/hello", async (req, res) => {
  pool.connect((err, client) => {
    if (!err) {
      client.query("SELECT * FROM trucks", function (err, result) {
        if (err) {
          return console.error("error running query", err);
        }
        //  const data = JSON.stringify(result.rows)
        console.log(result.rows);
        res.json(result.rows);
      });
    }
  });
});

app.get("/hi", (req, res) => {
  res.json(test);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
