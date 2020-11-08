var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

// Post
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});
var Post = mongoose.model("Post", postSchema);

// User
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  // Embedding data
  // Posts attribute is inside the user, giving the relationship of 1:N
  posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

// Retrieve an existing user and update it with a post
User.findOne({ name: "Arthur" }, (err, user) => {
  if (err) {
    console.log(err);
  } else {
      // Push into the array list
    user.posts.push({
      title: "Take me home",
      content: "Tonight"
    });
    // Save into the database
    user.save((err, user) => {
      if (err) {
        console.log(err);
      } else {
        console.log(user);
      }
    });
  }
});

// var newPost = new Post({
//   title: "Ronnie James Dio",
//   content: "Rainbow in the dark!"
// });

// newPost.save((err, post) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });
