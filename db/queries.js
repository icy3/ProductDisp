
// configuration for the connection from server - database for postgress
    // still need to alter many places to fit my 
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'student',
  host: 'localhost',
  database: 'postgres',
  password: 'student',
  port: 5432,
})
const getImage = (request, response) => {
}

module.exports = {getImage}