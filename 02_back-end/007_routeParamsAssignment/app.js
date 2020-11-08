// Importing express framework
var express = require("express");
// Saving the express functions to a variable.
var app = express();
// app.SomeMethod

app.get("/", function(req, res) {
  res.send("Hello, there! Welcome to my assignment.");
});

// My way
// app.get("/speak/pig", function(req, res) {
//   res.send("The pig says 'Oink'!");
// });

// app.get("/speak/cow", function(req, res) {
//   res.send("The cow says 'Moo'!");
// });

// app.get("/speak/dog", function(req, res) {
//   res.send("The dog says 'Woof Woof'!");
// });

// Colt used this way
app.get("/speak/:animal", function(req, res) {
  var sounds = {
    pig: "Oink",
    cow: "Moo!",
    dog: "Woof Woof!",
    cat: "I hate you, human",
    goldfish: "..."
  };
  var animal = req.params.animal.toLowerCase();
  var sound = sounds[animal];
  res.send("The " + animal + " says " + sound);
});

app.get("/repeat/:word/:numberOfTimes", function(req, res) {
  var word = req.params.word;
  // var numberOfTimes = parseInt(req.params.numberOfTimes);
  var numberOfTimes = Number(req.params.numberOfTimes);
  var result = "";

  for (var i = 0; i < numberOfTimes; i++) {
    result += word + " ";
  }

  // We can't get multiple responses, so I can't put this line inside the for loop.
  // res.send(word.repeat(numberOfTimes) + " ");
  res.send(result);
});

app.get("*", function(req, res) {
  res.send("Page not found.. :(");
});

app.listen(8000, function() {
  console.log("Listening on port 8000!");
});
