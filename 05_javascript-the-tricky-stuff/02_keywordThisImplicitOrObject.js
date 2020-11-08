// "use strict";

/*
 * Foundation for OOP.
 * Can't be set as the value of the variable because it's a reserved keyword
 * The value is determined by how the function is called
 * Can be determined using (global, object/implicit, explicit and new) rules.
 */

// 2 - Implicit/Object
// When the keyword 'this' is inside of a declared object.
// The value of the keyword this will be always the closest parent object.
var person = {
  firstName: "Arthur",
  sayHi: function () {
    // return "Hi "+ firstName; // firstName is not defined in this function
    return "Hi " + this.firstName;
  },
  determineContext: function () {
    return this === person;
  },
};

person.sayHi(); // Hi Arthur
person.determineContext(); // true
