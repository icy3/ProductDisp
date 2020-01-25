const {etsy_API_KEY, db_password} = require("../config.js");

const {db} = require("./index.js")
const {mockData} = require("./mockData.js")

var insertMockData = () => {
  for (let i = 0; i < mockData.length; i++) {
    let listings = mockData[i];
    let params = [
      listings.listing_id,
      listings.title,
      listings.creation_tsz
    ];
    let queryStr = `INSERT INTO listings (listing_id, title, creation_tsz) VALUES (?, ?, ?);`;
    db.query(queryStr, params, (err, data) => {
      if (err) {
        console.log("error inserting data", i);
      }
      else {
        console.log("successfully inserted data!", i);
      }
    });
  }
};
insertMockData();