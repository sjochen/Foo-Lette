var express = require('express');
var app = express.Router();
var axios = require('axios');

var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=" + process.env.API_KEY;

module.exports = function(app){

  app.get("/api/examples", function(req, res){
    
    axios.get(url).then(function(response){
      
      res.json(response.data)

    });

    
  });



};






// app.get("/api/posts/", function(req, res) {
//   db.Post.findAll({})
//     .then(function(dbPost) {
//       res.json(dbPost);
//     });
// });