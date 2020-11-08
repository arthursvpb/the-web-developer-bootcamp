// "use strict";

/*
 * Foundation for OOP.
 * Can't be set as the value of the variable because it's a reserved keyword
 * The value is determined by how the function is called
 * Can be determined using (global, object/implicit, explicit and new) rules.
 */

// 4 - New
// New is used to create a new object
// New is used with a function and inside the
// function definition the keyword "this" refers to the newly created object

// The 'this' will refer to the global object
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// But, when creating with the 'new' keyword the value changes
// The keyword this now refers to the object that is created when the new keyword is used
var arthur = new Person("Arthur", "Vasconcellos");

/*

  RECAP

*/

/*
* 'this' is a reserved keyword and the value is determined at execution
* can be set using global context, object binding, explicit binding or the new keyword
* when set in the global context in a function, it is either the global object or undefined (used in strict mode)
* to set the value of this we use call, apply or bind
* we can also use the new keyword to set the context of 'this', more detailed in OOP.
*/
