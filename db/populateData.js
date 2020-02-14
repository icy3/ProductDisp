// const { etsy_API_KEY } = require("../config.js");
const { db } = require("./index.js");
const { mockData } = require("./mockData.js");
const axios = require("axios");

var insertMockData = () => {
  // console.log("james is a hobo", etsy_API_KEY);
  for (let i = 0; i < mockData.length; i++) {
    let listings = mockData[i];
    let params = [listings.listing_id, listings.title, listings.creation_tsz];
    let queryStr = `INSERT INTO listings (listing_id, title) VALUES (?, ?);`;
    db.query(queryStr, params, (err, data) => {
      if (err) {
        console.log("error inserting data", i);
      } else {
        console.log("successfully inserted data!", i);
      }
    });
  }
};
// insertMockData();

const insertImageData = () => {
  let i = 0;

  function addImage() {
    axios
      .get('/')
      //`https://openapi.etsy.com/v2/listings/${mockData[i].listing_id}/images?api_key=${etsy_API_KEY}`
      
      .then(result => {
        let images = result.data.results;
        images.forEach(image => {
          let image_url = image.url_fullxfull;
          let listing_id = image.listing_id;
          let params = [image_url, listing_id];
          let queryStr = `INSERT INTO images (image_url, listing_id) VALUES (?, ?);`;
          db.query(queryStr, params, (err, data) => {
            if (err) {
              console.log("error inserting data" + i);
            } else {
              console.log("successfully inserted data " + i);
            }
          });
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
      });
  }
  addImage();
};
insertImageData();
