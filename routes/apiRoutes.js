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


  // app.post('/auth', function (request, response) {
  //   var user = request.body.user;
  //   var password = request.body.password;
  //   if (user && password) {
  //     db.User.findOne({
  //       where: {
  //         user: user,
  //         password: password
  //       }
  //     }).then(function (results) {
  //       if (results.length > 0) {
  //         request.session.loggedin = true;
  //         request.session.user = user;
  //         response.render('index');
  //       } else {
  //         response.send('Incorrect Username and/or Password!');
  //       }
  //       response.end();
  //     });
  //   } else {
  //     response.send('Please enter Username and Password!');
  //     response.end();
  //   }
  // })

  // app.get('/home', function (request, response) {
  //   if (request.session.loggedin) {
  //     response.send('Welcome back, ' + request.session.username + '!');
  //   } else {
  //     response.send('Please login to view this page!');
  //   }
  //   response.end();
  // });

  // middleware function to check for logged-in users ~~if user is logged in will take to dashboard
  var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
      res.redirect("/dashboard");
    } else {
      next();
    }
  };

  var hbsContent = { user: '', loggedin: false, title: "You are now logged in today", body: "Hello World" };


  // Route for home page (Login page)
  app.get("/", sessionChecker, function (req, res) {
    res.render("index", {
      title: "Login Form"
    })
  });

  //route for registration page
  app.route("/registration")
    .get((req, res) => {
      res.render("registration", {
        title: "Registration Form"
      })
    })
    .post((req, res) => {
      db.User.create({
        user: req.body.user,
        password: req.body.password,
        email: req.body.email
      })
        .then(user => {
          req.session.user = user.dataValues;
          res.redirect('/dashboard');
        })
        .catch(error => {
          res.redirect('/registration');
        });
    })

  // route for user login 
  app.route("/index")
    .get(sessionChecker, (req, res) => {
      res.render("index", {
        title: "Login Form"
      })
    })
    .post((req, res) => {
      var user = req.body.user;
      var password = req.body.password;
      //searches database for user & password authentication 
      db.User.findOne({ where: { user: user } })
        .then(function (user) {
          if (!user) {
            console.log("not a valid user")
            res.redirect('/index');
          } else if (!user.validPassword(password)) {
            console.log(`user found but wrong password(${password})`)
            res.redirect('/index');
          } else {
            req.session.user = user.dataValues;
            res.redirect('/dashboard');
          }
        });
    });



  // route for user's dashboard
  app.get('/dashboard', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
      hbsContent.loggedin = true;
      hbsContent.user = req.session.user.user;
      console.log(req.session.user.user);
      res.render('dashboard', hbsContent);
    } else {
      res.redirect('/index');
    }
  });

  //route for logout button
  app.get('/logout', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
      hbsContent.loggedin = false;
      hbsContent.title = "You are logged out!";
      res.clearCookie('user_sid');
      console.log(JSON.stringify(hbsContent));
      res.redirect('/');
    } else {
      res.redirect('/index');
    }
  });

  //Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });




};
