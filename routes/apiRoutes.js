var express = require('express');
var app = express.Router();
var axios = require('axios');

var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=" + process.env.API_KEY;

axios.get("/api/examples", url)
.then(function (response) {
  console.log(response.data.results);
});


// app.get("/api/examples", function(req, res) {
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.json(dbExamples);
//     });
//   });