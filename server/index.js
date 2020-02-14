const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3137;
const db = require("../db/index.js");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

// app.get('/', (req, res) => {console.log('hi')})

app.get(`/listing/:listing_id`, (req, res) => {
  console.log(req.params.listing_id);
  let currentListingId = req.params.listing_id;
  db.getAllImages(currentListingId, function(error, result) {
    if (error) {
      res.send(error);
    } else {
      res.send(result);
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
