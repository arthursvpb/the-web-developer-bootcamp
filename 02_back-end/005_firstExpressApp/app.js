// console.log("First express app.");

// Importing express framework
var express = require("express");
// Saving the express functions to a variable.
var app = express();

// app.SomeMethod

/* ROUTES */

// First route
// When you go to "/" you get a message.

// Defining a route that takes a GET request
// When the user is on /, do a function
// Req = Request, Res = response
// Req and Res are objects
// Request is an object that contains all the information about the request it was made
// Response contains all the information about what we're going to respond with.
app.get("/", function(req, res) {
  res.send("Hello world from EXPRESS APP!");
});

// When you go to /bye you get another message.
app.get("/bye", function(req, res) {
  res.send("Bye world from EXPRESS APP!");
});

// When you go to /dog you get another message.
app.get("/dog", function(req, res) {
  // Code triggered as soon I made a request
  console.log("Someone made a request to /DOG!");
  res.send("Hello DOG from EXPRESS APP!");
});

// Route variables (path variables): Ex: /r/subredditNam/comments/id/title/
// In every subpath I give, will enter to subredditName
// We use : to tell the path variable, (everything we want to change)
app.get("/r/:subredditName", function(req, res) {
  // console.log(req.params); // Tells me the param

  // Store the param in a variable and print to the response.
  var subreddit = req.params.subredditName;
  res.send("WELCOME TO " + subreddit.toUpperCase() + " SUBREDDIT ");
});

// Comments page
// The request object contains all the information about the request
app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
  console.log(req.params); // Tells me the param
  res.send("Welcome to comments page!");
});

// Create a route 404, that listen to every page, except the ones we create
// We use "*"
app.get("*", function(req, res) {
  res.send("<b>Error 404! You are a star!</b>");
});

// This isn't gonna work yet, because we are missing the listener that listen for different requests..
// Provide the PORT to listen on and the particular IP
// We can provide the callback function too.
app.listen(8000, function() {
  console.log("Listening on port 8000!");
});
