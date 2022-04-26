const express = require("express");
// const morgan = require('morgan')
require("dotenv").config();
var cors = require("cors");

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY) //Secret key goes in here
//const uuid = require("uuid/v4") //Not sure what this does? // prevents charging a client twice

// express app
const app = express();
const PORT = 3002;

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

// middleware
app.use(cors(corsOptions));
app.use(express.urlencoded({extended:true}))
app.use(express.json({extended:true}))

// con setting
const pg = require("pg");
const { Pool } = require("pg");

// const dbParams = require("./db");


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
  const day = req.params.day  
  console.log("KEYWORD", day)
  pool.query(`SELECT * FROM trucks JOIN locations ON locations.trucks_id = trucks.id WHERE locations.day = '${day}';`, function (err, result) {  
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
app.get("/trucks/:day/:filter", async (req, res) => {
  console.log("params", req.params)
  const keyword = req.params.filter
  const day = req.params.day 
  // console.log("req.params", req.params) 
  console.log("keyword:", keyword) 
  console.log("DAY:", day)
  pool.query(`SELECT * FROM trucks JOIN locations ON locations.trucks_id = trucks.id WHERE info LIKE '%${keyword}%' AND locations.day= '${day}';`, function (err, result) {
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
  let result = await pool.query(insertTrucks, [req.body.name, req.body.info, 5])

  let insertLocations = `INSERT INTO locations (trucks_id, location_lat, location_lng, day) VALUES (($1), ($2), ($3), ($4));`
  let insertLocationsValues1 = [result.rows[0].id, req.body.dayLocation[1].lat, req.body.dayLocation[1].lng, "monday"]
  let insertLocationsValues2 = [result.rows[0].id, req.body.dayLocation[2].lat, req.body.dayLocation[2].lng, "tuesday"]
  let insertLocationsValues3 = [result.rows[0].id, req.body.dayLocation[3].lat, req.body.dayLocation[3].lng, "wednesday"]
  let insertLocationsValues4 = [result.rows[0].id, req.body.dayLocation[4].lat, req.body.dayLocation[4].lng, "thursday"]
  let insertLocationsValues5 = [result.rows[0].id, req.body.dayLocation[5].lat, req.body.dayLocation[5].lng, "friday"]
  let insertLocationsValues6 = [result.rows[0].id, req.body.dayLocation[6].lat, req.body.dayLocation[6].lng, "saturday"]
  let insertLocationsValues7 = [result.rows[0].id, req.body.dayLocation[7].lat, req.body.dayLocation[7].lng, "sunday"]
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
  res.status(200).json({message: "Truck has been saved."})
  } catch (e) {
    await pool.query('ROLLBACK')
    throw e
  }
})


app.post("/trucks/checkout", async (req, res) => {
  const {product, token} = req.body
  // const idempontencyKey = uuid() // stops double charge on a client
  console.log("EMAIL", token.email)
  console.log("PRODUCT", product)
  return stripe.customers.create({
    email: token.email,
    source: token.id
  }).then (customer => {
    stripe.charges.create( 
    { 
      amount: product.price * 100,
      currency: "CAD",
      customer: customer.id,
      receipt_email: token.email,
      description: `purchase of ${product.name}`
    })
  })
  .then(result => res.status(200).json(result))
  .catch(err => console.log(err))
 
});



app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`);
});


