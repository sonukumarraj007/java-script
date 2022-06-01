// What is ECMAScript 5?
// ECMAScript 5 is also known as ES5 and ECMAScript 2009

// This chapter introduces some of the most important features of ES5.

// ECMAScript 5 Features
// These were the new features released in 2009:

// The "use strict" Directive
// String.trim()
// Array.isArray()
// Array.forEach()
// Array.map()
// Array.filter()
// Array.reduce()
// Array.reduceRight()
// Array.every()
// Array.some()
// Array.indexOf()
// Array.lastIndexOf()
// JSON.parse()
// JSON.stringify()
// Date.now()
// Property Getters and Setters
// New Object Property Methods


// Array.isArray()

// The isArray() method checks whether an object is an array.

function myFunction() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var x = document.getElementById("demo");
    x.innerHTML = Array.isArray(fruits);
}  


// JSON.parse()

// A common use of JSON is to receive data from a web server.
// Imagine you received this text string from a web server:

'{"name":"John", "age":30, "city":"New York"}'

// The JavaScript function JSON.parse() is used to convert the text into a JavaScript object:

var txt = '{"name":"John", "age":30, "city":"New York"}'
var obj = JSON.parse(txt);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age;


// JSON.stringify()

// A common use of JSON is to send data to a web server.
// When sending data to a web server, the data has to be a string.
// Imagine we have this object in JavaScript:

var obj = {"name":"John", "age":30, "city":"New York"};

// Use the JavaScript function JSON.stringify() to convert it into a string.

var myJSON = JSON.stringify(obj);

var obj = {"name":"John", "age":30, "city":"New York"};
var myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;


// Date.now()

// Date.now() returns the number of milliseconds since zero date (January 1. 1970 00:00:00 UTC).

var timInMSs = Date.now();

// Date.now() returns the same as getTime() performed on a Date object.

// Property Getters and Setters

// ES5 lets you define object methods with a syntax that looks like getting or setting a property.

// This example creates a getter for a property called fullName:

// Create an object:
var person = {
    firstName: "John",
    lastName : "Doe",
    get fullName() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  // Display data from the object using a getter:
  document.getElementById("demo").innerHTML = person.fullName;

//   This example creates a setter and a getter for the language property:


var person = {
    firstName: "John",
    lastName : "Doe",
    language : "NO",
    get lang() {
      return this.language;
    },
    set lang(value) {
      this.language = value;
    }
  };
  
  // Set an object property using a setter:
  person.lang = "en";
  
  // Display data from the object using a getter:
  document.getElementById("demo").innerHTML = person.lang;

//   This example uses a setter to secure upper case updates of language:

var person = {
    firstName: "John",
    lastName : "Doe",
    language : "NO",
    set lang(value) {
      this.language = value.toUpperCase();
    }
  };
  
  // Set an object property using a setter:
  person.lang = "en";
  
  // Display data from the object:
  document.getElementById("demo").innerHTML = person.language;



//   New Object Property Methods

// Object.defineProperty() is a new Object method in ES5.

// It lets you define an object property and/or change a property's value and/or metadata.


// Create an Object:
var person = {
    firstName: "John",
    lastName : "Doe",
    language : "NO",
  };
  
  // Change a Property:
  Object.defineProperty(person, "language", {
    value: "EN",
    writable : true,
    enumerable : true,
    configurable : true
  });
  
  // Enumerate Properties
  var txt = "";
  for (var x in person) {
    txt += person[x] + "<br>";
  }
  document.getElementById("demo").innerHTML = txt;


//   Next example is the same code, except it hides the language property from enumeration:

// Create an Object:
var person = {
    firstName: "John",
    lastName : "Doe",
    language : "NO",
  };
  
  // Change a Property:
  Object.defineProperty(person, "language", {
    value: "EN",
    writable : true,
    enumerable : false,
    configurable : true
  });
  
  // Enumerate Properties
  var txt = "";
  for (var x in person) {
    txt += person[x] + "<br>";
  }
  document.getElementById("demo").innerHTML = txt;

//   This example creates a setter and a getter to secure upper case updates of language:

/// Create an Object:
var person = {
    firstName: "John",
    lastName : "Doe",
    language : "NO"
  };
  
  // Change a Property:
  Object.defineProperty(person, "language", {
    get : function() { return language },
    set : function(value) { language = value.toUpperCase()}
  });
  
  // Change Language
  person.language = "en";
  
  // Display Language
  document.getElementById("demo").innerHTML = person.language;


//   ECMAScript 5 added a lot of new Object Methods to JavaScript:

// Adding or changing an object property
Object.defineProperty(object, property, descriptor)

// Adding or changing many object properties
Object.defineProperties(object, descriptors)

// Accessing Properties
Object.getOwnPropertyDescriptor(object, property)

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Returns enumerable properties as an array
Object.keys(object)

// Accessing the prototype
Object.getPrototypeOf(object)

// Prevents adding properties to an object
Object.preventExtensions(object)
// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents changes of object properties (not values)
Object.seal(object)
// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)
// Returns true if object is frozen
Object.isFrozen(object)



// Trailing Commas
// ECMAScript 5 allows trailing commas in object and array definitions:

// JSON Objects:
// Allowed:
var person = '{"firstName":"John", "lastName":"Doe", "age":46}'
JSON.parse(person)

// Not allowed:
var person = '{"firstName":"John", "lastName":"Doe", "age":46,}'
JSON.parse(person)


// JSON Arrays:
// Allowed:
points = [40, 100, 1, 5, 25, 10]

// Not allowed:
points = [40, 100, 1, 5, 25, 10,]