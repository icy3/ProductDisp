const mysql = require('mysql');

const {db_password} = require("../config.js")
console.log('db password is', db_password);
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : `${db_password}`,
  // had trouble importing password
  database : 'product_display'
});

db.connect();

module.exports = {db};