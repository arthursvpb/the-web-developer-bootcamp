// This code works fine, but if we have 100 objects, it would be inefficient
// Every time we make an object we would have to redefine this function
// But is the same for everyone, let's put on the prototype instead.
function Person(name) {
  this.name = name;
  this.sayHi = function () {
    return "Hi" + this.name;
  };
}

arthur = new Person("Arthur");
arthur.sayHi;

// Refactoring with PROTOTYPES
function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function () {
  return "Hi " + this.name;
};

/** EXERCISE: Create a constructor function for a Vehicle: every object created
 * from this constructor should have a make, model, and year property. Each object
 * should also have a property called isRunning, which should be set to false
 *
 * Every object created form the Vehicle constructor should have a function called turnOn,
 * which changes the isRunning property to true.
 *
 * Every object created from the Vehicle constructor should have a function called turnOff,
 * which changes the isRunning property to false.
 *
 * Every object created from the Vehicle constructor should have a method called honk,
 * which returns the string "beep" only if the isRunning property is true.
 */

 // Making properties i don't want to share for each object
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}

 // All of my functions I want to each object to have
Vehicle.prototype.turnOn = function () {
  this.isRunning = true;
};

Vehicle.prototype.turnOff = function () {
  this.isRunning = false;
};

Vehicle.prototype.honk = function () {
  if (this.isRunning) {
    console.log("Beep!");
  } else {
    console.log("Turn on the car first.");
  }
};
