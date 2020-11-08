/** Intro to OOP */

// Classes -> Blueprint of objects
// Object -> Instances of classes
// We can use classes and share them easily to use them among the app.

// JS doesn't have bult-in support for classes, so we
// mimic the behavior with FUNCTIONS and OBJECTS.

// Making a function that when used will construct an object.
// Constructor functions -> construct objects

function House(bedrooms, bathrooms, numSqft) {
  this.bedrooms = bedrooms;
  this.bathrooms = bathrooms;
  this.numSqft = numSqft;

  // not returning anything
  // so if i call House(1, 2, 3) without new, it will return undefined
}

// New keyword must be used with a function
// It creates an empty object
// Sets the keyword 'this' to be that empty object
// Adds the line 'return this' to the end of the function
// * Adds a property called __proto__
// * that links the object to the prototype property on the constructor function
var firstHouse = new House(2, 2, 1000);

// Practicing exercise
function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.bark = function bark() {
    return `${this.name} says 'woof!'`;
  };
}

var tom = new Dog("Tom", 3);
var dog = new Dog("Dog", 8);

// * Multiple constructors

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

function Motorcycle(make, model, year) {
  // this.make = make;
  // this.model = model;
  // this.year = year;

  // We invoke the car function but change the context of keyword this.
  // The right value of the keyword this should be.
  // * whatever object is being created by the parent function when the new keyword is used.
  // we use the keyword this inside of the Motorcycle function to access the object.
  // So 'this' in this situation refers to the object created
  // from the motorcycle function when the 'new' keyword is used.

  // Car.call(this, make, model, year);
  // Car.apply(this, [make, model, year]);
  Car.apply(this, arguments); // arguments is an array of all arguments passed to a function
  this.numWheels = 2;
}
