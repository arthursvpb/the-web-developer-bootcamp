// JQuery -> javascript library for making things easier
// select, manipulate, add effects, etc.

// Selectors
// Select elements with %()
// .css() to style elements

// $("selector").action();
// very similar to querySelectorAll

// var h1 = $("h1");
//
// h1.css("border", "2px solid red");
// h1.css("text-align", "center");
//
// // I can define an object too
// var styles = {
//   backgroundColor: "pink",
//   fontWeight: "bold",
//   textAlign: "center"
// };
//
// // We call the variable styles with properties
// $(".styling").css(styles);

// Exercise
// var div = $("div");
// var highlight= $(".highlight");
// var third = $("#third");
// // We can select like this
//
// // var div1 = $($("div")[0]);
//
// // Or like this
//
// var div1 = $("div:first-of-type");
//
// div.css("backgroundColor", "purple");
// highlight.css("width", "200px");
// third.css("border", "2px solid orange");
// div1.css("color", "pink");

// Text and HTML methods
//
// text() --> similar to textContent
// $("h1").text("Olá");
// html() --> similar to innerHTML
//

// attr() --> gets the first element value or set
// $("#greatphoto").attr("alt", "Beijing Brush Seller");

// .val() -> get the current value of the first element
// $("input").val(); --> get the value
// $("input").val("set"); --> set the value

// Manipulating CLASSES (add, remove, toogle) --> similar to ClassList
// $("h1").addClass("correct");
// $("h1").removeClass("correct");
// $("h1").toggle("correct");
