const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cowdb"
});

connection.connect();

// Your database query here

// Select all cows' names
const getAllNames = (cb) => {
  console.log("getAllNames called")
  connection.query(`Select * from cows`, (err, result) => {
    // console.log('cb: ', cb);
    if (err) {
      cb(err, null);
    } else {
      cb(null, result);
    }
  })
};

// Insert a new cow
const makeACow = (cow, cb) => {
  console.log("makeACow called")
  connection.query(`Insert into cows (name, description) values (?, ?)`, [cow.name, cow.description], (err, result) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, result);
    }
  })
};

// Select one cow's name and description



// Don't forget to export your functions
module.exports = {
  connection,
  getAllNames,
  makeACow
};
