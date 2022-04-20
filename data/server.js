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
app.use(express.urlencoded({extended:true}))
app.use(express.json({extended:true}))

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

// Get Requests
app.get("/trucks", async (req, res) => {
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

app.get("/trucks/:keyword", async (req, res) => {
  const keyword = req.params.keyword  
  console.log(keyword)
  pool.query(`SELECT * FROM trucks WHERE info LIKE '%${keyword}%';`, function (err, result) {
    if (err) {
      return console.error("error running query", err);
    }
    const data = JSON.stringify(result.rows);
    // console.log("OBJ", result.rows);
    // console.log("JSON", data)
    res.send(data);
  });
});

//Post Requests
app.post("/signup", async (req, res) => {
  console.log("req.body",req.body)
  pool.query(
    `INSERT INTO trucks (truck_name, info, rating, location_lat, location_lng) VALUES (($1), ($2), ($3), ($4), ($5));`,[req.body.name, req.body.info, 5, req.body.lat, req.body.lng], function (err, result) {
    if (err) {
      console.log("req.body",req.body)
      return console.error("error running query", err);
    }
    // console.log("req.body",req.body)
    // const data = JSON.stringify(result.rows);
    // // console.log("OBJ", result.rows);
    // // console.log("JSON", data)
    res.json({property_message:"Truck is saved! Start Cooking!"});
  });
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
