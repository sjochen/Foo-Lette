var db = require("../models");

module.exports = function (app) {
  // // middleware function to check for logged-in users ~~if user is logged in will take to dashboard
  // var sessionChecker = (req, res, next) => {
  //   if (req.session.user && req.cookies.user_sid) {
  //     res.redirect("/dashboard");
  //   } else {
  //     next();
  //   }
  // };

  // var hbsContent = { user: '', loggedin: false, title: "You are not logged in today", body: "Hello World" };


  // // Route for home page (Login page)
  // app.get("/", sessionChecker, function (req, res) {
  //   res.render("index", {
  //     title: "Login Form"
  //   })
  // });

  // //route for registration page
  // app.route("/registration")
  //   .get((req, res) => {
  //     res.render("registration", hbsContent, {
  //       title: "Registration Form"
  //     })
  //   })
  //   .post((req, res) => {
  //     User.create({
  //       user: req.body.user,
  //       password: req.body.password,
  //       email: req.body.email
  //     })
  //       .then(user => {
  //         req.session.user = user.dataValues;
  //         res.redirect('/dashboard');
  //       })
  //       .catch(error => {
  //         res.redirect('/registration');
  //       });
  //   })

  // // route for user login 
  // app.route("/index")
  //   .get(sessionChecker, (req, res) => {
  //     res.render("/index", hbsContent, {
  //       title: "Login Form"
  //     })
  //   })
  //   .post((req, res) => {
  //     var user = req.body.user;
  //     var password = req.body.password;
  //     //searches database for user & password authentication 
  //     User.findOne({ where: { user: user } })
  //       .then(function (user) {
  //         if (!user) {
  //           alert('You are not a registered user, please register');
  //           res.redirect('/index');
  //         } else if (!user.validPassword(password)) {
  //           alert('Invalid password');
  //           res.redirect('/index');
  //         } else {
  //           req.session.user = user.dataValues;
  //           res.redirect('/dashboard');
  //         }
  //       });
  //   });

  

  // // route for user's dashboard
  // app.get('/dashboard', (req, res) => {
  //   if (req.session.user && req.cookies.user_sid) {
  //     hbsContent.loggedin = true;
  //     hbsContent.user = req.session.user.user;
  //     console.log(req.session.user.user);
  //     res.render('index', hbsContent);
  //   } else {
  //     res.redirect('/index');
  //   }
  // });

  // //route for logout button
  // app.get('/logout', (req, res) => {
  //   if (req.session.user && req.cookies.user_sid) {
  //     hbsContent.loggedin = false;
  //     hbsContent.title = "You are logged out!";
  //     res.clearCookie('user_sid');
  //     console.log(JSON.stringify(hbsContent));
  //     res.redirect('/');
  //   } else {
  //     res.redirect('/index');
  //   }
  // });

  // //Render 404 page for any unmatched routes
  // app.get("*", function (req, res) {
  //   res.render("404");
  // });




  // // Load example page and pass in an example by id
  // app.get("/example/:id", function (req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // 
};
