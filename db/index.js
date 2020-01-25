const mysql = require('mysql');

const {etsy_API_KEY, db_password} = require("../config.js")
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : db_password,
  database : 'my_db'
});

db.connect();