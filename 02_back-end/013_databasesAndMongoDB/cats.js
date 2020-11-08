// Require the moongose package
var mongoose = require("mongoose");

// Tell mongoose to connect to the server we have running
// Fixing deprecation warnings.
mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb://localhost/cat_app", { useNewUrlParser: true });

// Tells the JS that i want to be able to add cats to our database
// This is a pattern for our data
var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

// Schema is just the pattern
// Model is the compiled data saved to the variable Cat
var Cat = mongoose.model("Cat", catSchema);

// We can use 'Cat'
// Cat.remove()
// Cat.find()
// Cat.create()

// // Add a cat into the DB
// var catToSave = new Cat({
//   name: "Bichento",
//   age: 4,
//   temperament: "Lazy"
// });

// // Add to the database
// catToSave.save((err, cat) => {
//   if (err) {
//     console.log("Something went wrong." + err);
//   } else {
//     console.log("Saved successfully");
//     console.log(cat);
//   }
// });

// More efficient way without having to do the steps above
// Creating new and save all at once
Cat.create(
  {
    name: "Snow White",
    age: 5,
    temperament: "Bland"
  } /*Callback funtction*/,
  function(err, cat) {
    if (err) {
      console.log("Error: " + err);
    } else {
      console.log("Created cat:");
      console.log(cat);
    }
  }
);

// Retrieve all cats from DB and log each one.
// Parameter are err and cats, cats is the result of .find
Cat.find({}, (err, cats) => {
  if (err) {
    console.log("Error: " + err);
  } else {
    console.log("All the cats: ");
    console.log(cats);
  }
});
