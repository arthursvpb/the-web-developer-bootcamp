var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  // Referencing data
  // In the User Schema there is a post attribute
  // This attribute have an array of objects (moongose object ids belong to a post (like a foreign key))
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
    }
  ]
});
var User = mongoose.model("User", userSchema);

module.exports = User;
