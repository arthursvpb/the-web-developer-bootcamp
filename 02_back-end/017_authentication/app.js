var express = require("express"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  bodyParser = require("body-parser"),
  User = require("./models/user"),
  LocalStrategy = require("passport-local"),
  passportLocalMongoose = require("passport-local-mongoose");

mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb://localhost/auth_demo_app", { useNewUrlParser: true });

var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  require("express-session")({
    // Used to encode and decode the sessions
    secret: "Dig dig big big",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Creating new Local Strategy using the User.authenticate() method that is coming from passportLocalMongoose
passport.use(new LocalStrategy(User.authenticate()));
// * Responsible for reading the session, taking the encoded data from the session,
// * unencoded it and then encode it again (put it back in the session)
// * These methods are add by passportLocalMongoose
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/// ============== ///
/// ----ROUTES---- ///
/// ============== ///

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/secret", isLoggedin, (req, res) => {
  res.render("secret");
});

// ! AUTH ROUTES

// SHOW SIGN UP FORM
app.get("/register", (req, res) => {
  res.render("register");
});

// HANDLE USER SIGN UP
app.post("/register", (req, res) => {
  // Make new user object
  // Pass the password as the second argument to User.register
  // The password will be HASHED that will be store in the database
  // If everything went okay will return a user variable that has everything inside it
  User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
    if (err) {
      console.log(err);
      return res.render("register");
    } else {
      // Log the user in (take care everything in session, store the correct information)
      // Will run the serialize user method
      // "local" is the strategy, but we can change it to any like "twitter"
      passport.authenticate("local")(req, res, () => {
        res.redirect("/secret");
      });
    }
  });
});

// ! LOGIN ROUTES

// SHOW LOGIN FORM
app.get("/login", (req, res) => {
  res.render("login");
});

// LOGIN LOGIC
// We use the authenticate as the second argument on the post method
// * This is a MIDDLEWARE
// * Code that runs before the final route callback
// * When the app does a post request to /login is going to run the middleware code immediately
// * We can have multiple middleware
// * This will compare the password to match the one the user typed.
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
  }),
  (req, res) => {}
);

// LOGOUT LOGIC
app.get("/logout", (req, res) => {
  // Simple line of code to logout
  // Not changing anything on the database and no transaction
  // * Passport will destroy all the user data in the session
  // * Will no longer keep track of this user's data in the session from request to request
  req.logout();
  res.redirect("/");
});

// * MiddleWare to check if the user is logged in
// @param (req, res, next) are standart for middleware
// Req -> Request object
// Res -> Response object
// Next -> The next thing that needs to be called
// Express take care of it and it know what function to call next
function isLoggedin(req, res, next) {
  if (req.isAuthenticated()) {
    // Proceed
    return next();
  }
  // Else, go back to login
  res.redirect("/login");
}

app.listen(8000, () => {
  console.log("Server is running.");
});
