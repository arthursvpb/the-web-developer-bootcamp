/**
 * Closures
 *
 * Closure is a function that makes use of variable defined in outer functions that have
 * previously returned.
 */

function outer() {
  var data = "closures are";
  return function inner() {
    var innerData = " awesome";
    return data + innerData;
  };
}

outer()(); // closures are awesome

// First closure
function outer(a) {
  // This function called inner is a closure
  return function inner(b) {
    return a + b;
  };
}

// The inner function have to return to work

// We can the inner function right away using an extra ()
outer(5)(5); // 10

// Or we can store in a variable
var storeOuter = outer(5);
storeOuter(5); // 10

// We don't have to give the inner function a name - we can make it anonymous.

// * Important: if the closure don't use the variable from the outer function, it is not
// * a closure, it is a NESTED FUNCTION.

// * The great use of closures are PRIVATE VARIABLES.
// Private variables are variables that can be not modified externally.
// In JS we don't have that built in.

function counter() {
  // private variable
  // no one has access to this variable in another scope
  // no one can changes the value of count starts off, it's always going to be 0.
  var count = 0;
  return function () {
    return ++count;
  };
}

var c = counter();
c(); // 1

// Another example
function classRom() {
  // We don't have access to the instructors variable, which makes it private.
  var instructors = ["Colt", "Elie"];
  return {
    getInstructors: function () {
      return instructors;
    },
    addInstructors: function (instructor) {
      instructors.push(instructor);
      return instructors;
    },
  };
}

course = classRom(); // {getInstructors: ƒ, addInstructors: ƒ}
course.getInstructors(); // ["Colt", "Elie"]
course.addInstructors("Arthur"); // ["Colt", "Elie", "Arthur"]

course2 = classRom(); // {getInstructors: ƒ, addInstructors: ƒ}
course2.getInstructors(); // ["Colt", "Elie"] not affected by course1