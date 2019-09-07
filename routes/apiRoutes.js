var express = require('express');
var app = express.Router();
var axios = require('axios');

var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=	37.541290,-77.434769&radius=15000&type=restaurant&&key=" + process.env.API_KEY;

module.exports = function(app){

  app.get("/api/examples", function(req, res){
    
    axios.get(url).then(function(response){
      
      res.json(response.data.results)

    });

    
  });



};