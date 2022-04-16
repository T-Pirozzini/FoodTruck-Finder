const express = require('express');
// const morgan = require('morgan')
require('dotenv').config()
const client = require('./conn.js');

// express app
const app = express();
const port = 3002;
const connectionString = process.env.REACT_APP_ELEPHANTSQL
// const pgp = require("pg-promise")()
// const db = pgp(connectionString)

// console.log(connectionString)
// db.connect()

app.get("/food_trucks", async (req, res) => {
  try {
    const results = await client.query('SELECT * FROM trucks');
    res.json(results);

} catch (err) {
    console.log(err);
}
});

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

