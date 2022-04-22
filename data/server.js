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
  pool.query("SELECT * FROM trucks JOIN locations ON locations.trucks_id = trucks.id WHERE locations.day = 'monday';", function (err, result) {
    if (err) {
      return console.error("error running query", err);
    }
    const data = JSON.stringify(result.rows);
    
    // console.log("OBJ", result.rows);
    // console.log("JSON", data)
    res.send(data);
  });
});

// Day of the week filter request
app.get("/trucks/:day", async (req, res) => {
  const keyword = req.params.day  
  console.log("KEYWORD", keyword)
  pool.query(`SELECT * FROM trucks JOIN locations ON locations.trucks_id = trucks.id WHERE locations.day = '${keyword}';`, function (err, result) {
    if (err) {
      return console.error("error running query", err);
    }
    const data = JSON.stringify(result.rows);
    // console.log("OBJ", result.rows);
    // console.log("JSON", data)
    res.send(data);
  });
});

// Food Type Filter Request
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
try {
  await pool.query("BEGIN") 
  let insertTrucks = `INSERT INTO trucks (truck_name, info, rating) VALUES (($1), ($2), ($3)) RETURNING id;`
  let res = await pool.query(insertTrucks, [req.body.name, req.body.info, 5])

  let insertLocations = `INSERT INTO locations (trucks_id, location_lat, location_lng, day) VALUES (($1), ($2), ($3), ($4));`
  let insertLocationsValues1 = [res.rows[0].id, req.body.dayLocation[1].lat, req.body.dayLocation[1].lng, "monday"]
  let insertLocationsValues2 = [res.rows[0].id, req.body.dayLocation[2].lat, req.body.dayLocation[2].lng, "tuesday"]
  let insertLocationsValues3 = [res.rows[0].id, req.body.dayLocation[3].lat, req.body.dayLocation[3].lng, "wednesday"]
  let insertLocationsValues4 = [res.rows[0].id, req.body.dayLocation[4].lat, req.body.dayLocation[4].lng, "thursday"]
  let insertLocationsValues5 = [res.rows[0].id, req.body.dayLocation[5].lat, req.body.dayLocation[5].lng, "friday"]
  let insertLocationsValues6 = [res.rows[0].id, req.body.dayLocation[6].lat, req.body.dayLocation[6].lng, "saturday"]
  let insertLocationsValues7 = [res.rows[0].id, req.body.dayLocation[7].lat, req.body.dayLocation[7].lng, "sunday"]
  // let insertLocationsArray = [insertLocationsValues1, insertLocationsValues2]
// let days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"] Cycle  through days array later??
  await pool.query(insertLocations, insertLocationsValues1)
  await pool.query(insertLocations, insertLocationsValues2)
  await pool.query(insertLocations, insertLocationsValues3)
  await pool.query(insertLocations, insertLocationsValues4)
  await pool.query(insertLocations, insertLocationsValues5)
  await pool.query(insertLocations, insertLocationsValues6)
  await pool.query(insertLocations, insertLocationsValues7)  
  await pool.query('COMMIT')
  } catch (e) {
    await pool.query('ROLLBACK')
    throw e
  }
})
//   } finally {
//     pool.release()
//   }
// })().catch(e => console.error(e.stack))


    // `INSERT INTO trucks (truck_name, info, rating) VALUES (($1), ($2), ($3));`,[req.body.name, req.body.info, 5], function (err, result) {
    // if (err) {
      // console.log("ERROR: req.body",req.body)
    //   return console.error("error running query", err);
    // }
    // console.log("req.body",req.body)
    // const data = JSON.stringify(result.rows);
    // // console.log("OBJ", result.rows);
    // // console.log("JSON", data)
//     res.json({property_message:"Truck is saved! Start Cooking!"});
//   });
// })

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});


// app.post("/signup", async (req, res) => {
//   console.log("req.body",req.body)
//   pool.query(
//     `INSERT INTO trucks (truck_name, info, rating, location_lat, location_lng) VALUES (($1), ($2), ($3), ($4), ($5));`,[req.body.name, req.body.info, 5, req.body.lat, req.body.lng], function (err, result) {
//     if (err) {
//       console.log("req.body",req.body)
//       return console.error("error running query", err);
//     }
//     // console.log("req.body",req.body)
//     // const data = JSON.stringify(result.rows);
//     // // console.log("OBJ", result.rows);
//     // // console.log("JSON", data)
//     res.json({property_message:"Truck is saved! Start Cooking!"});
//   });
// })