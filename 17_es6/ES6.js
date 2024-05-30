
// What is ECMAScript 6?
// ECMAScript 6 is also known as ES6 and ECMAScript 2015.

// Some people call it JavaScript 6.

// This chapter will introduce some of the new features in ES6.

// JavaScript let
// JavaScript const
// JavaScript Arrow Functions
// JavaScript Classes
// Default parameter values
// Array.find()
// Array.findIndex()
// Exponentiation (**) (EcmaScript 2016)


// JavaScript let
// The let statement allows you to declare a variable with block scope.

// Example
var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10


// JavaScript const
// The const statement allows you to declare a constant (a JavaScript variable with a constant value).

// Constants are similar to let variables, except that the value cannot be changed.

var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10

// JavaScript const variables must be assigned a value when they are declared:

// Not Real Constants
// The keyword const is a little misleading.

// It does NOT define a constant value. It defines a constant reference to a value.

// Because of this, we cannot change constant primitive values, but we can change the properties of constant objects.


// Constant Objects can Change
// You can change the properties of a constant object:


// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

// But you can NOT reassign a constant object:

const car = {type:"Fiat", model:"500", color:"white"};
car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR

// Constant Arrays can Change
// You can change the elements of a constant array:

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

// But you can NOT reassign a constant array:

const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR


// Redeclaring

// Redeclaring a JavaScript var variable is allowed anywhere in a program:

var x = 2;    //  Allowed
var x = 3;    //  Allowed
x = 4;        //  Allowed

// Redeclaring or reassigning an existing var or let variable to const, in the same scope, or in the same block, is not allowed:

var x = 2;         // Allowed
const x = 2;       // Not allowed
{
  let x = 2;     // Allowed
  const x = 2;   // Not allowed
}

// Redeclaring or reassigning an existing const variable, in the same scope, or in the same block, is not allowed:

const x = 2;       // Allowed
const x = 3;       // Not allowed
x = 3;             // Not allowed
var x = 3;         // Not allowed
let x = 3;         // Not allowed

{
  const x = 2;   // Allowed
  const x = 3;   // Not allowed
  x = 3;         // Not allowed
  var x = 3;     // Not allowed
  let x = 3;     // Not allowed
}

// Redeclaring a variable with const, in another scope, or in another block, is allowed:

const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}


// Arrow functions were introduced in ES6.

// Arrow functions allow us to write shorter function syntax:

// Before:
hello = function() {
  return "Hello World!";
}

// With Arrow Function:
hello = () => {
  return "Hello World!";
}

// It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the
//  brackets and the return keyword:

hello = () => "Hello World!";

// If you have parameters, you pass them inside the parentheses:

hello = (val) => "Hello " + val;

// In fact, if you have only one parameter, you can skip the parentheses as well:

hello = val => "Hello " + val;

// ES5
var x = function(x, y) {
    return x * y;
 }
 
 // ES6
 const x = (x, y) => x * y;


// What About this?
// The handling of this is also different in arrow functions compared to regular functions.

// In short, with arrow functions there are no binding of this.

// In regular functions the this keyword represented the object that called the function, which could be the window, 
// the document, a button or whatever.

// With arrow functions the this keyword always represents the object that defined the arrow function.

// Let us take a look at two examples to understand the difference.

// Both examples call a method twice, first when the page loads, and once again when the user clicks a button.

// The first example uses a regular function, and the second example uses an arrow function.

// The result shows that the first example returns two different objects (window and button), and the second example 
// returns the window object twice, because the window object is the "owner" of the function.


//Regular Function:
hello = function() {
    document.getElementById("demo").innerHTML += this;
  }
  
  //The window object calls the function:
  window.addEventListener("load", hello);
  
  //A button object calls the function:
  document.getElementById("btn").addEventListener("click", hello);


  //Arrow Function:
hello = () => {
    document.getElementById("demo").innerHTML += this;
  }
  
  //The window object calls the function:
  window.addEventListener("load", hello);
  
  //A button object calls the function:
  document.getElementById("btn").addEventListener("click", hello);


//   JavaScript Classes
// A class is a type of function, but instead of using the keyword function to initiate it, 
// we use the keyword class, and the properties are assigned inside a constructor() method.

// Class Definition
// Use the keyword class to create a class, and always add the constructor() method.

// The constructor method is called each time the class object is initialized.

// A simple class definition for a class named "Car":

class Car {
    constructor(brand) {
      this.carname = brand;
    }
  }

//   Create an object called "mycar" based on the Car class:

mycar = new Car("Ford");

// Methods
// The constructor method is special, it is where you initialize properties,
// it is called automatically when a class is initiated, and it has to have the exact name "constructor", 
// in fact, if you do not have a constructor method, JavaScript will add an invisible and empty constructor method.

// You are also free to make your own methods, the syntax should be familiar:


// Create a method named "present":

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

mycar = new Car("Ford");
document.getElementById("demo").innerHTML = mycar.present();

// Send a parameter to the "present()" method:

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present(x) {
      return x + ", I have a " + this.carname;
    }
  }
  
  mycar = new Car("Ford");
  document.getElementById("demo").innerHTML = mycar.present("Hello");



// Static Methods
// Static methods are defined on the class itself, and not on the prototype.

// That means you cannot call a static method on the object (mycar), but on the class (Car):

// Create a static method and call it on the class:

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  static hello() {
    return "Hello!!";
  }
}

mycar = new Car("Ford");

//Call 'hello()' on the class Car:
document.getElementById("demo").innerHTML = Car.hello();

//and NOT on the 'mycar' object:
//document.getElementById("demo").innerHTML = mycar.hello();
//this would raise an error.

// If you want to use the mycar object inside the static method, you can send it as a parameter:

// Send "mycar" as a parameter:

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  static hello(x) {
    return "Hello " + x.carname;
  }
}

mycar = new Car("Ford");

document.getElementById("demo").innerHTML = Car.hello(mycar);


// Inheritance
// To create a class inheritance, use the extends keyword.

// A class created with a class inheritance inherits all the methods from another class:

// Create a class named "Model" which will inherit the methods from the "Car" class:

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

mycar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = mycar.show();

// The super() method refers to the parent class.

// By calling the super() method in the constructor method, we call the parent's 
// constructor method and gets access to the parent's properties and methods.
// Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.


// Getters and Setters
// Classes also allows you to use getters and setters.

// It can be smart to use getters and setters for your properties, especially if you want to do something special with 
// the value before returning them, or before you set them.

// To add getters and setters in the class, use the get and set keywords.

// Create a getter and a setter for the "carname" property:

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

mycar = new Car("Ford");

document.getElementById("demo").innerHTML = mycar.cnam;

// The name of the getter/setter method cannot be the same as the name of the property, in this case carname.

// Many programmers use an underscore character _ before the property name to separate the getter/setter from the actual property:

// You can use the underscore character to separate the getter/setter from the actual property:

class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

mycar = new Car("Ford");

document.getElementById("demo").innerHTML = mycar.carname;


// Hoisting
// Unlike functions, and other JavaScript declarations, class declarations are not hoisted.

// That means that you must declare a class before you can use it:

//You cannot use the class yet.
//mycar = new Car("Ford")
//This would raise an error.

class Car {
    constructor(brand) {
      this.carname = brand;
    }
  }
  
  //Now you can use the class:
  mycar = new Car("Ford")

  
//   "use strict"
// The syntax in classes must be written in "strict mode".

// You will get an error if you do not follow the "strict mode" rules.

// In "strict mode" you will get an error if you use a variable without declaring it:

class Car {
  constructor(brand) {
    i = 0;
    this.carname = brand;
  }
}
var mycar = new Car("Ford");


var Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
}

console.log(new Rectangle(5,8).area());
// expected output: 40


//function expression

var getRectArea = function(width, height) {
    return width * height;
}

console.log(getRectArea(3,4));
// expected output: 12



class Triple {
  static triple(n) {
    if (n === undefined) {
      n = 1;
    }
    return n * 3;
  }
}

class BiggerTriple extends Triple {
  static triple(n) {
    return super.triple(n) * super.triple(n);
  }
}

console.log(Triple.triple());        // 3
console.log(Triple.triple(6));       // 18

var tp = new Triple();

console.log(BiggerTriple.triple(3));
// 81 (not affected by parent's instantiation)

console.log(tp.triple());
// 'tp.triple is not a function'.


// Default Parameter Values
// ES6 allows function parameters to have default values.

// Example
function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
myFunction(5); // will return 15



// New Number Properties
// ES6 added the following properties to the Number object:

// EPSILON
// MIN_SAFE_INTEGER
// MAX_SAFE_INTEGER
// Example
var x = Number.EPSILON;

var x = Number.MIN_SAFE_INTEGER;

var x = Number.MAX_SAFE_INTEGER;


// New Number Methods
// ES6 added 2 new methods to the Number object:

// Number.isInteger()
// Number.isSafeInteger()
// The Number.isInteger() Method
// The Number.isInteger() method returns true if the argument is an integer.

// Example
Number.isInteger(10);        // returns true
Number.isInteger(10.5);      // returns false


// The Number.isSafeInteger() Method
// A safe integer is an integer that can be exactly represented as a double precision number.

// The Number.isSafeInteger() method returns true if the argument is a safe integer.

// Example
Number.isSafeInteger(10);    // returns true
Number.isSafeInteger(12345678901234567890);  // returns false


// New Global Methods
// ES6 also added 2 new global number methods:

isFinite()
isNaN()
// The isFinite() Method
// The global isFinite() method returns false if the argument is Infinity or NaN.

// Otherwise it returns true:

// Example
isFinite(10/0);       // returns false
isFinite(10/1);       // returns true

// The isNaN() Method
// The global isNaN() method returns true if the argument is NaN. Otherwise it returns false:

// Example
isNaN("Hello");       // returns true



// Exponentiation Operator
// The exponentiation operator (**) raises the first operand to the power of the second operand.

// Example
var x = 5;
var z = x ** 2;          // result is 25


// x ** y produces the same result as Math.pow(x,y):

// Example
var x = 5;
var z = Math.pow(x,2);   // result is 25