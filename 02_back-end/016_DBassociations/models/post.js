var mongoose = require("mongoose");

// Post
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});
var Post = mongoose.model("Post", postSchema);

// Return value for a file for exporting the model
module.exports = Post;
