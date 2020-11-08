// Rendering HTML and Templates

// * res.render() to render HTML (from a EJS file)
// * what is EJS and why we use it
// * pass variables to EJS templates

// Templates -> Dynamic HTML files
// Ejs -> Embedded Javascript Templating
// Allow us to manipulate variables, statements, loops with HTML

// Importing express framework
var express = require("express");
// Saving the express functions to a variable.
var app = express();
// app.SomeMethod

// Tells express to serve the content of the public directory
app.use(express.static("public"));

app.get("/", function(req, res) {
  // We can send some HTML and CSS, but is not the best way of doing it.
  // res.send("<h1 style='text-align: center'>Root route.</h1>");

  // So we can use the render method to render a different file.
  // This is static, we have to put this file on the folder "views"
  // We need to put this file in the "views" folder. Express will lookup for it.
  res.render("home.ejs");
});

app.get("/love/:thing", function(req, res) {
  var thing = req.params.thing;

  // We have to send the variable we create here to the HTML ejs file
  // When we pass through as an object, I can put multiple pieces of data that I want to have in my template
  res.render("love.ejs", { thingVar: thing });
});

// Making a loop
app.get("/posts", function(req, res) {
  var posts = [
    { title: "Post 1", author: "Susy" },
    { title: "Post 2", author: "Arthur" },
    { title: "Post 3", author: "Gabriel" }
  ];

  // posts refer to the name of the variable, and what we will call inside of the template
  res.render("posts.ejs", { posts: posts });
});

app.listen(8000, function() {
  console.log("Listening on port 8000!");
});
