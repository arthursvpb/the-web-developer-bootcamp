const request = require("request");
request(
  "https://servicodados.ibge.gov.br/api/v1/localidades/regioes",
  function(error, response, body) {
    //   console.error("error:", error); // Print the error if one occurred
    //   console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    //   console.log("body:", body); // Print the HTML for the Google homepage.

    if (error) {
      console.log("Something went wrong.");
      console.log(error);
    } else {
      if (response.statusCode == 200) {
        // This worked

        // Body is the actual response body, the stuff that came back.
        // HTML from google or the IBGE API.
        // The body is a STRING! We need to turn into an object
        var parsedData = JSON.parse(body);
        console.log(parsedData);

        console.log(parsedData[0].sigla);
        
      }
    }
  }
);
