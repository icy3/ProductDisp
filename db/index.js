const mysql = require("mysql");

// const { db_password } = require("../config.js");
// console.log("db password is", db_password);
const db = mysql.createConnection({
  host: "localhost",
  user: "student",
  password: "student",
  database: "product_display"
});

db.connect();

const getAllImages = function(listingId, callback) {
  db.query(
    `SELECT image_url FROM images where listing_id = '${listingId}';`,
    (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    }
  );
};

const getAllIds = function(callback) {
  db.query("SELECT listing_id FROM listings"),
    (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    };
};

module.exports = { db, getAllImages, getAllIds };
