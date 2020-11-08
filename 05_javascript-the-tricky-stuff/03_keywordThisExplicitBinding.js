// "use strict";

/*
 * Foundation for OOP.
 * Can't be set as the value of the variable because it's a reserved keyword
 * The value is determined by how the function is called
 * Can be determined using (global, object/implicit, explicit and new) rules.
 */

// 3 - Explicit Binding
// When we want the context of 'this' to be, using call, apply or bind
// They explicitly set the value of the keyword "this"
// Call, apply or bind can only be used by functions

// call  -> invoke function, infinite parameters
// apply -> invoke function, 2 parameters
// bind  -> create function definition

var arthur = {
  firstName: "Arthur",
  sayHi: function () {
    return "hi " + this.firstName;
  },
  dog: {
    bark: function () {
      return "Hello " + this.firstName;
    },
  },
};

/*------------
 *
 * CALL
 *
 *------------*/
arthur.dog.bark.call(arthur);

// Avoiding code duplication
var arthur = {
  firstName: "Arthur",
  sayHi: function () {
    return "hi " + this.firstName;
  },
};

var gabrielle = {
  firstName: "Gabrielle",
};

arthur.sayHi(); // Hi Arthur
// Using the arthur method and changing the value of this
arthur.sayHi.call(gabrielle); // Hi Gabrielle

/*------------
 *
 * APPLY
 *
 *------------*/

// Almost identical to call, except the parameters
var arthur = {
  firstName: "Arthur",
  sayHi: function () {
    return "hi " + this.firstName;
  },
  addNumbers: function (a, b, c, d) {
    return this.firstName + " just calculated " + (a + b + c + d);
  },
};

var gabrielle = {
  firstName: "Gabrielle",
};

arthur.addNumbers(1, 2, 3, 4); // Arthur just calculated 10

// Using call
arthur.addNumbers.call(gabrielle, 1, 2, 3, 4);
// Using apply
arthur.addNumbers.apply(gabrielle, [1, 2, 3, 4]);

/*------------
 *
 * BIND
 *
 *------------*/

// Bind works like call, but the return is a function definition with the keyword this set to the right value.

var gabiCalc = arthur.addNumbers.bind(gabrielle, 1, 2, 3, 4);
gabiCalc();

// Bind is useful when we don't know all of the arguments that will be passed to a function
// We call this PARTIAL APPLICATION
var gabiCalc = arthur.addNumbers.bind(gabrielle, 1, 2);
gabiCalc(3, 4); // will calculate the rest of the numbers

// We don't need to know all the parameters to the function when we binded
// We only have to know which the value we want to assign to the 'this' keyword
var gabiCalc = arthur.addNumbers.bind(gabrielle);

// Later we can use for a function that will be called at a later point at time
// This happens when dealing with ASYNC code, or code that doesn't run line by line.
gabiCalc(1, 2, 3, 4);

/* ASYNC JAVASCRIPT */

// Code that can run in any time, not being
setTimeout(() => {
  console.log("this will be logged in 10 seconds");
}, 10000);

// We can continue running code, not being blocked while we wait 10 seconds.
// var awesome = "yup!"
// console.log("hello..")
// (...) after 10 seconds
// "this will be logged in 10 seconds"

var arthur = {
  firstName: "Arthur",
  sayHi: function () {
    // Since the setTimeout will be called in another point at time,
    // The keyword this does not refer to the parent object.
    // It refers to the global object.
    // The object that setTimeout is attached to is the window object
    // Even though it's inside the arthur object, THE CONTEXT which the function is executed is the global context.
    setTimeout(
      function () {
        console.log("Hi " + this.firstName);
      }.bind(this), // bind the arthur object when the function is called
      8000
    );
  },
};

arthur.sayHi(); // Hi undefined
