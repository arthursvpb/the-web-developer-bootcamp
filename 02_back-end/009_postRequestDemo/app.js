var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// T-o-d-o List
var todo = ["Clean room", "Study", "E-mail professor"];

// Root route
app.get("/", function(req, res) {
  res.render("home.ejs");
});

// T-o-d-o route
app.get("/todo", function(req, res) {
  res.render("todo.ejs", { todo: todo });
});

// Sending new data to be added or be used somehow by the serverside
app.post("/addtodo", function(req, res) {
  // Object that will contain all of the data from the request body
  // All of the form data is put in the request body
  // ! Note: Express doesn't create the req.body for us, we need to explicity and turn into a JavaScript object first
  // ! To do that, we need to install the package body-parser
  // ! npm install body-parser --save

  // newtodo is the name we defined in the html
  var newTodo = req.body.newtodo;
  todo.push(newTodo);

  // res.send("YOU HAVE REACHED THE POST ROUTE!");

  // Redirecionando para a mesma página para ver a modificação
  res.redirect("/todo");
});

app.listen(8000, function() {
  console.log("Listening on port 8000!");
});
