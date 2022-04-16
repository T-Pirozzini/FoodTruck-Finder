var pg = require('pg');
require('dotenv').config()

var conString = process.env.REACT_APP_ELEPHANTSQL; //Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function (err) {
  if (err) {
    return console.error("could not connect to postgres", err);
  }
  client.query("SELECT * FROM trucks", function (err, result) {
    if (err) {
      return console.error("error running query", err);
    }

    // console.log(result.rows);
    // const data = JSON.stringify(result.rows)
    // console.log(data)
    // return data

    client.end();
  });
});

// export default client
