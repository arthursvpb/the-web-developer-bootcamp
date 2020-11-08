//  JQuery Events
//  Making things interactive

// https://api.jquery.com/category/events/

// click(), keypress(), on();

// Alert when any button is clicked
// $("button").click(function() {
//   alert("You clicked");
// });

// Listen for any keypress in any text input
var input = $('input[type="text"]');

$(input).keypress(function(event) {
  // KeyCode 13 == enter
  if(event.which === 13){
    alert("You hit enter");
  }
  console.log(input.val());
});

// on() --> similar to addEventListener -> specify the type of event
// Not just for clicks, but all types of events
// Double click
$("button").on('dblclick', function(){
  alert("double clicked!");
});

// Dragstart
$('a').on('dragstart', function() {
  console.log("Drag started!");
});

//Keypress event
$('input[type="text"]').on('keypress', function(){
  alert("Keypress in an text input.");
});

// Just press 1 element in elements
$("h1").on("click", function() {

  $(this).css("color", "purple");

});

// Why use on?
// click() adds listener for existing elements
// on() add listeners for all potential future elements


// JQuery Effects (very nice and important)
// Animations and effections (bult-in effects)
// Fade in and slides


// Fade out
$('#fadeOut').on("click", function() {
  $('div').fadeOut(2000/*miliseconds*/, function()/*callback functon, to execute after the fadeout*/{
    alert("Fade out completed.");
    // Remove the HTML, not only giving display none
    // $(this).remove();
  });
});

// Fade in
$('#fadeIn').on("click", function() {
  $('div').fadeIn(2000/*miliseconds*/, function()/*callback functon, to execute after the fadeout*/{
    alert("Fade in completed.");
    // Remove the HTML, not only giving display none
    // $(this).remove();
  });
});

$('#fadeToggle').on("click", function() {
  $('div').fadeToggle(2000/*miliseconds*/, function()/*callback functon, to execute after the fadeout*/{
    alert("Fade TOGGLE completed.");
    // Remove the HTML, not only giving display none
    // $(this).remove();
  });
});

// Slides

// Slide up
$('#slideUp').on("click", function() {
  $('div').slideUp(2000/*miliseconds*/, function()/*callback functon, to execute after the fadeout*/{

    // Remove the HTML, not only giving display none
    // $(this).remove();
  });
});

// SlideDown
$('#slideDown').on("click", function() {
  $('div').slideDown(2000/*miliseconds*/, function()/*callback functon, to execute after the fadeout*/{

    // Remove the HTML, not only giving display none
    // $(this).remove();
  });
});

// SLide Toggle
$('#slideToggle').on("click", function() {
  $('div').slideToggle(2000/*miliseconds*/, function()/*callback functon, to execute after the fadeout*/{

    // Remove the HTML, not only giving display none
    // $(this).remove();
  });
});
