const {etsy_API_KEY, db_password} = require("../config.js");

const db = require("./index.js")
const mockData = require("./mockData.js")

var insertMockData = () => {
  for (let listings of mockData) {
    let params = [];
    params.push(listings.user_id);
    params.push(listings.title);
    let queryStr = `INSERT INTO listings (user_id, title) VALUES (?, ?);`;
    db.query(queryStr, params, (err, data) => {
      if (err) {
        console.log("error inserting data");
      }
      // else {
      //   console.log("successfully inserted data!");
      // }
    });
  }
};
insertMockData();