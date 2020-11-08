const express = require("express");
const request = require("request");
const app = express();
const port = 8000;
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("search");
});

app.get("/results", (req, res) => {
  // We need to access the data from the query string
  var query = req.query.search;
  // Putting the query into the url
  var url = `http://www.omdbapi.com/?s=${query}&apikey=thewdb`;

  request(url, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.render("results", { data: data });
    } else {
      console.log("Error!", +error);
    }
  });
});

// prettier-ignore
app.listen(port, /*function*/() => {
console.log(`Listening on port ${port}!`);
});
