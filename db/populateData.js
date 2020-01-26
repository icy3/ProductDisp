const {etsy_API_KEY, db_password} = require("../config.js");  
const {db} = require("./index.js")
const {mockData} = require("./mockData.js")
const axios = require("axios")

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
// insertMockData();

const insertImageData = () => {
  let i = 0;

   function addImage() {
    axios.get(`https://openapi.etsy.com/v2/listings/${mockData[i].listing_id}/images?api_key=${etsy_API_KEY}`)
    .then(result => {
      let images = result.mockData.results[0].url_fullxfull;
      let listingId = result.mockData.results[0].listing_id;
      let params = [
        images, 
        listingId,
      ];
      let queryStr = `UPDATE listings SET image_url=images ? WHERE listing_id ? ;`;
      db.query(queryStr, params, (err, data) => {
        if (err) {
          console.log("error inserting data" + i);
        }
        else {
          console.log("successfully inserted data " + i);
        }
      });
    })
    .then(() => {
      i++;
      if (i < 100) {                           
        setTimeout(addImage, 1000);
      }
    })
    .catch(err => {
      console.log(err);
      i++;
      if (i < 100) {
        setTimeout(addImage, 1000);
      }
    })
  }
  addImage();
}
insertImageData(); 
