// PORT
const port = 8000;

// * Starter setup
var bodyParser = require("body-parser"),
  methodOverride = require("method-override"),
  expressSanitizer = require("express-sanitizer"),
  mongoose = require("mongoose"),
  express = require("express"),
  app = express();

// * Connect mongoose to MongoDB
mongoose.set("useUnifiedTopology", true);
mongoose.set("useFindAndModify", false);
mongoose.connect("mongodb://localhost/restful_blog_app", {
  useNewUrlParser: true
});

// * Starter setup
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

// * Schema
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: { type: Date, default: Date.now }
});

// * Compile the Schema into a model
var Blog = new mongoose.model("Blog", blogSchema);

// ! RESTFUL ROUTES
// * Root ROUTE
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

// * INDEX ROUTE
app.get("/blogs", (req, res) => {
  Blog.find({}, (err, blogs) => {
    if (err) {
      console.log("Error!" + err);
    } else {
      res.render("index", { blogs: blogs });
    }
  });
});

// * NEW ROUTE
app.get("/blogs/new", (req, res) => {
  res.render("new");
});

// * CREATE ROUTE
app.post("/blogs", (req, res) => {
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.create(req.body.blog, (err, newBlog) => {
    if (err) {
      res.render("new");
    } else {
      console.log("Created" + newBlog);
      res.redirect("/blogs");
    }
  });
});

// * SHOW ROUTE
app.get("/blogs/:id", (req, res) => {
  Blog.findById(req.params.id, (err, foundBlog) => {
    if (err) {
      console.log("Error " + err);
    } else {
      res.render("show", { blog: foundBlog });
    }
  });
});

// * EDIT ROUTE
app.get("/blogs/:id/edit", (req, res) => {
  Blog.findById(req.params.id, (err, foundBlog) => {
    if (err) {
      console.log("Error " + err);
    } else {
      res.render("edit", { blog: foundBlog });
    }
  });
});

// * UPDATE ROUTE
app.put("/blogs/:id", (req, res) => {
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedBlog) => {
    if (err) {
      console.log("Error." + err);
    } else {
      res.redirect(`/blogs/${req.params.id}`);
    }
  });
});

// * DELETE ROUTE
app.delete("/blogs/:id", (req, res) => {
  Blog.findByIdAndRemove(req.params.id, err => {
    if (err) {
      console.log("Error" + err);
    } else {
      res.redirect("/blogs");
    }
  });
});

// * Listen for connections
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
