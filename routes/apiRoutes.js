var db = require("../models");

module.exports = function (app) {


  // // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // // Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });


  app.post('/auth', function (request, response) {
    var user = request.body.user;
    var password = request.body.password;
    if (user && password) {
      db.User.findOne({
        where: {
          user: user,
          password: password
        }
      }).then(function (results) {
        if (results.length > 0) {
          request.session.loggedin = true;
          request.session.user = user;
          response.render('index');
        } else {
          response.send('Incorrect Username and/or Password!');
        }
        response.end();
      });
    } else {
      response.send('Please enter Username and Password!');
      response.end();
    }
  })

  app.get('/home', function (request, response) {
    if (request.session.loggedin) {
      response.send('Welcome back, ' + request.session.username + '!');
    } else {
      response.send('Please login to view this page!');
    }
    response.end();
  });






};
