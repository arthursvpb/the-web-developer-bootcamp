// JS OBJECTS

// var pessoa = {
//   nome: "Arthur",
//   idade: 20,
//   city: "JP"
// }
//
// alert("Seu nome é: "+pessoa.nome)
// Podemos usar também pessoa["nome"]

// var someObject = {
//   friends:[
//     {name: "Malfoy"},
//     {name: "Crabbe"},
//     {name: "Goyle"}
//   ]
// }
//
// // pick up malfoy
// someObject.friends[0].name
// // we can use this way
// someObject["friends"][0]["name"]


// Creatin array of movie objects
// var movieObjects = [
//
//   {name: "Harry Potter",  rating: "5 stars",  hasWatched: true},
//
//   {name: "Star Wars",  rating: "4 stars",  hasWatched: false},
//
//   {name: "LOTR",  rating: "4 stars",  hasWatched: true},
//
//   {name: "TRON",  rating: "3 stars",  hasWatched: false},
//
// ]

// Iterating the array (meu jeito)
// for (let i = 0; i < movieObjects.length; i++) {
//
//   if (movieObjects[i].hasWatched) {
//     var watch = "You have watched";
//   }else {
//     var watch = "You have not seen";
//   }
//
//   console.log(watch+" "+movieObjects[i].name+" - "+movieObjects[i].rating);
// }

// Jeito mais prático com forEach
//  Para cada movieObjects dentro de movieObjects faça essa função
// movieObjects.forEach(function(movieObjects) {
//   var result = "You have ";
//
//   // Usando operador ternario
//   movieObjects.hasWatched ? result += "watched" : result += "not seen";
//
//   result += " \""+ movieObjects.name + "\" - ";
//   result += movieObjects.rating;
//
//   console.log(result);
// })

//  METHODS
// JUST A FUNCTION THAT IS PROPERTY INSIDE AN OBJECTS
// var obj = {
//   add: function functionName(x, y) {
//     return x + y;
//   }
// }

// Keyword this
// Refers to the local scope
