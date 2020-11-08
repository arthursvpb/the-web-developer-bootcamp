// const request = require("request");
// request(
//   "https://jsonplaceholder.typicode.com/users/1",
//   /*function*/ (error, response, body) => {
//     // I am using node debugger in VS Code

//     if (!error && response.statusCode == 200) {
//       var parsedData = JSON.parse(body);
//       // console.log(parsedData.username + " is the username.");
//       // console.log(parsedData.address.city + " is where he lives.");

//       // Using new syntax
//       console.log(
//         `${parsedData.username} is the username, and he lives in ${parsedData.address.city}`
//       );
//     } else {
//       console.log("Error!", +error);
//     }
//   }
// );

// Using new syntax ES6+ using PROMISES
const rp = require("request-promise");

rp("https://jsonplaceholder.typicode.com/users/1")
  .then(function(body) {
    const parsedData = JSON.parse(body);
    console.log(
      `${parsedData.username} is the username, and he lives in ${parsedData.address.city}`
    );
  })
  .catch(function(err) {
    console.log("Error!", err);
  });
