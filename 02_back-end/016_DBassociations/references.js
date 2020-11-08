var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

// Require the Post and the User modules
var Post = require("./models/post.js");
var User = require("./models/user.js");

// * Creating the User
// User.create({
//   email: "hey@arnold.com",
//   name: "Arnold Cabeca de Bigorna"
// });

// * Creating the Post
Post.create(
  {
    title: "Hello world FINAL",
    content: "blablabla FINAL"
  },
  (err, post) => {
    // * Associate the post to a User
    User.findOne({ email: "hey@arnold.com" }, (err, foundUser) => {
      if (err) {
        console.log(err);
      } else {
        foundUser.posts.push(post);
        foundUser.save((err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        });
      }
    });
  }
);

// Find all posts for an User
// * .populate will populate the field posts, lookup for the object IDs, find the correct data and stick in the post array
// * .exec will start the query
// User.findOne({ email: "hey@arnold.com" })
//   .populate("posts")
//   .exec((err, user) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(user);
//     }
//   });
