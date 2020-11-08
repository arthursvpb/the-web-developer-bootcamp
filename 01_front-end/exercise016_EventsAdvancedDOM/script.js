// EVENTS
// All you do on a page, click a button, hover, pressing a key.

// Select event and add an event listener (listening for a click for example).

/// When event happens, do this function
// .addEventListener("event", function() {

// do this

//})

// var h1 = document.getElementsByTagName("h1");
//
// h1[0].addEventListener("click", function() {
//
//   h1[0].style.color = "blue";
//
// });

// We can have more than 1 eventListener (they execute in order)

// Button toggle exercise
// var button = document.querySelector("button");
// var body = document.querySelector("body");
//
// button.addEventListener("click", function() {
//
//   body.classList.toggle("red");
//
// })

var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");

var player1button = document.querySelector("#player1button");
var player2button = document.querySelector("#player2button");
var resetButton = document.querySelector("#resetButton");

var gameOver = false;
var winningScore = 5;

var input = document.querySelector("input");
var playingTo = document.querySelector("#playingTo");

// Event when the input change
input.addEventListener("change", function() {
  if (this.value >= 0) {
    playingTo.textContent = this.value;
    winningScore = this.value;
  }
})


// Increases player 1
player1button.addEventListener("click", function() {
  if (!gameOver) {
    player1.textContent++;
    if (player1.textContent == winningScore) {
      gameOver = true;
      player1.style.color = "green";
    }
  }
})

// Increases player 2
player2button.addEventListener("click", function() {
  if (!gameOver) {
    player2.textContent++;
    if (player2.textContent == winningScore) {
      gameOver = true;
      player2.style.color = "green";
    }
  }
})

// Reset Button
resetButton.addEventListener("click", function() {

  player1.textContent = 0;
  player2.textContent = 0;
  player2.style.color = "black";

})
