// DOM (document object model)-> Interface between javascript and html + css, is the root element

// #document

// So everything we want to pick is inside the document
// ex: document.querySelector (method that lives inside the document)
// ex: document.body

// Select and Manipulate

// Select the h1 and save to a variable
var h1 = document.querySelector("h1");
var a = document.querySelector("a");
// Manipulate the variable selected
h1.style.color = "red";

// Document methods to select

// document.querySelector() --> needs the CSS sintax
  // returns ONLY THE FIRST element that match
// document.querySelectorAll() --> needs the CSS sintax
  // returns ALL elements that matches

// document.getElementsByClassName()
// document.getElementById
// document.getElementsByTagName()

// NodeList -> Lightweight array
//


/* IMPORTANT */

// Manipulating STYLE
// .style -> property to manipulate an element's STYLE.
// element.style.property = "value";
// "value" must be a string
h1.style.color = "blue";
// Property with margin-top (-) we do camelCase
h1.style.marginTop = "200px";
a.style.fontSize = "50px";

// Is bad idea to use so much "styles" in javascript
// Its beeter to turn style on or off in CSS (define a CSS class)
// adding a class with property instead of sytling with javascript
h1.classList.add("some-class");
// h1.classList.remove

// toggle -> very useful
// takes a class name, if the given element has the class already, will remove it, and if doesnt, it will add
h1.classList.toggle("another-class");

// Manipulating TEXT AND CONTENT
// textContent changes the text of the HTML
h1.textContent = "Teste mudado pelo textContent";
// innerHTML changes the html, not only the content
h1.innerHTML = "<i>Teste mudado pelo innerHTML com itálico</i>"

// Manipulating ATTRIBUTES
a.getAttribute("href");
// we need to put http to refer the site google, not the relative
a.setAttribute("href", "http://www.google.com.br");
// this work on any attributes, id, class, etc.
