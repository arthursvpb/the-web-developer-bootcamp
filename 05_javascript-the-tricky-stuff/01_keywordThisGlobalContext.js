"use strict";
// Help us to make better code, like
// With strict mode, you can not, for example, use undeclared variables.
// The value of the keyword this, inside of a function is undefined (not the global object).

/*
 * Foundation for OOP.
 * Can't be set as the value of the variable because it's a reserved keyword
 * The value is determined by how the function is called
 * Can be determined using (global, object/implicit, explicit and new) rules.
 */

console.log(this); // window (browser) or global(node.js) on global context.

// 1 - Global context (When it is not inside of a declared object).
// When there is not a object defined which contains the keyword this.
// When it is outside of all, it's a value refers to the *global object*.
// A global object is a object that is defined on the global scope.
// In Node.js is the "global" object.
// In the browser is the "Window" object.
// Every variable that I declare in the global scope, is attached to the global variable Window.

// Assigned to the global scope
var variable = "I am on the global scope.";

// Always will be on the global scope (omitting the var keyword)
function globalVariable(){
  variable = "I am always on the global scope.";
}

console.log(global.variable);

// Assigned to the global scope
function whatIsThis() {
  return this;
}
console.log(whatIsThis()); // window or the node.js global object

// This in a function will make reference to the argument object
var person = "Arthur";

function variablesInThis() {
  // I couldn't do person = "Gabrielle" because person is not defined inside the function
  // So the "this" will make reference
  // On compile this is replaced by the object (window or global)

  this.person = "Gabrielle"; // global.person = "Gabrielle"
}
