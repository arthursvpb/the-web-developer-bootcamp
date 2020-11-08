// Prototype
// relationship between __proto__, prototype and constructor

// New keyword recap
// 1. Creates an empty object
// 2. Assigns the value of 'this' to be that object
// 3. Adds 'return this' to the end of the function
// 4. Create a link (__proto__) between the object and
// the prototype property of the constructor function

// * PROTOTYPES

/* Diagram for better understanding: (https://pasteboard.co/J7YeDfF.png) */
/* circles for functions and square for objects */

/*
 *
 * 1. Every constructor function has a property called prototype that is an object.
 * 2. That object has a property on it called constructor which poins back to the original constructor function.
 * 3. If properties or methods are placed in a constructor function prototype, it can be acessful from any object created from that constructor funcion.
 * 4. The way of getting acess is through the __proto__ link that is established on the new keyword use.
 *
 */

function Person(name) {
  this.name = name;
}

var arthur = new Person("Arthur");
var gabrielle = new Person("Gabrielle");

Person.prototype; // {constructor: ƒ}

arthur.__proto__ === Person.prototype; // true

Person.prototype.constructor === Person; // true

// * PROTOTYPE CHAIN
// Prototype is SHARED among all objects created by that constructor function

Person.prototype.isStudent = true;

arthur.isStudent; // true;
gabrielle.isStudent; // true;

// To access properties on the prototype
gabrielle.__proto__.isStudent = false;

// This is the way Javascript finds methods and properties on objects
// This is called prototype chain

// Creating a new array
var arr = new Array();

arr.push(10); // Where is the push method defined?

// The answer is: __proto__
arr.__proto__ === Array.prototype; // true

console.dir(arr);
// Array[1]
// length: 1
// __proto__: Array(0)
//      concat: ƒ concat()
//      constructor: ƒ Array()
//      (...)

// The way javascript finds methods and properties is by looking at the object
// until he finds the method or property there are looking for, it goes to that object __proto__
// If nothing is found, the expression evaluate UNDEFINED.
arr.__proto__ === Array.prototype; // true

// Every single object in Javascript have the Object.prototype
// The __proto__ of Object.prototype is null
// This is where the chain stops

// See: Prototype chain in Javascript (https://pasteboard.co/J7YoYL2.png)