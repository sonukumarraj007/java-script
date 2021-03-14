
//  1. 3 Places to put JavaScript code

// <script src="Basics.js"></script>
// <script></script>
//  Between the body tag of html
//  Between the head tag of html
//  In .js file (external javaScript)
 
// 2. JavaScript Can Change HTML Content
 
//  document.getElementById("demo").innerHTML = "Hello JavaScript";

// 3. JavaScript Can Change HTML Attribute Values

//  <button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>
 
// 4. JavaScript Can Change HTML Styles (CSS)
 
//  document.getElementById("demo").style.fontSize = "35px";
 
// 5. JavaScript can "display" data in different ways:

//  Writing into an HTML element, using innerHTML.
//  Writing into the HTML output using document.write().
//  Writing into an alert box, using window.alert().
//  Writing into the browser console, using console.log().


// Data Types
var length = 16;                               // Number
var lastName = "Johnson";                      // String
var x = {firstName:"John", lastName:"Doe"};    // Object

// The Concept of Data Types
var x = "16" + "Volvo";

var x = 16 + 4 + "Volvo";


// Types are Dynamic

var x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String
x = 'Yes I am!'; // Now x is a String

// At W3schools we use camelCase for identifier names (variables and functions).
// variable

var x1 = 34.00;     // Written with decimals
var x2 = 34;        // Written without decimals
var int =1000;
var pi = 3.14;
var person1 = "John Doe";
var answer = 'Yes I am!';
var carName;

console.log("variable printing........");
console.log(int);
console.log(pi);
console.log(person1);
console.log(answer);
console.log(carName);

// JavaScript Booleans

var x = 5;
var y = 5;
var z = 6;
(x == y)       // Returns true
(x == z)       // Returns false


// Arrays

var cars = ["Saab", "Volvo", "BMW"];

// Objects

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// The typeof Operator

typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"
typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"

// Difference Between Undefined and Null
// undefined and null are equal in value but different in type:

typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true

// Primitive Data
// string
// number
// boolean
// undefined

typeof "John"              // Returns "string"
typeof 3.14                // Returns "number"
typeof true                // Returns "boolean"
typeof false               // Returns "boolean"
typeof x                   // Returns "undefined" (if x has no value)

// Complex Data

// function
// object
// The typeof operator can return one of two complex types:
// The typeof operator returns "object" for objects, arrays, and null.

// The typeof operator does not return "object" for functions.

typeof {name:'John', age:34} // Returns "object"
typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
typeof null                  // Returns "object"
typeof function myFunc(){}   // Returns "function"

// Local Variables

function myFunction() {
  var carName = "Volvo";
 console.log( typeof carName);
 console.log(carName);
}

myFunction();



// Arithmetic Operations

// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Remainder)
// ++	Increment
// --	Decrement

var x = 5;
var y = 2;
var z = x + y;

var x = 5;
var y = 2;
var z = x - y;


var x = 5;
var y = 2;
var z = x * y;

var x = 5;
var y = 2;
var z = x / y;



// **	Exponentiation (ES2016)

var x = 5;
var z = x ** 2;

console.log(z);

// %	Modulus (Remainder)
var x = 5;
var y = 2;
var z = x % y;

console.log(z);

// ++	Increment
var x = 5;
x++;
var z = x;

console.log(z);

// --	Decrement

var x = 5;
x--;
var z = x;

console.log(z);


// JavaScript Operator Precedence Values
var x = (100 + 50) * 3;



// JavaScript Assignment Operators

var x = 10;
x += 5;

var x = 10;
x -= 5;

var x = 10;
x *= 5;

var x = 10;
x /= 5;

var x = 10;
x %= 5;



// fuction example

var x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}

console.log("fuction calling........");
console.log(x);

// Create an object:
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",

    // Object Methods
    // In a function definition, this refers to the "owner" of the function.
    fullName : function() {
        return this.firstName + " " + this.lastName;
      }

  };
  
  console.log("objct properties calling........");

  // Display some data from the object:
  console.log(person.age); 
  
  console.log(person["firstName"]);

  console.log("objct method calling........");

  console.log(  person.fullName());
 


//  JavaScript Events
// HTML events are "things" that happen to HTML elements.
// When JavaScript is used in HTML pages, JavaScript can "react" on these events

// An HTML event can be something the browser does, or something a user does.

// An HTML web page has finished loading
// An HTML input field was changed
// An HTML button was clicked

//<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>

//<button onclick="this.innerHTML = Date()">The time is?</button>

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }

//<button onclick="displayDate()">The time is?</button>



// Comparison Operators

// Comparison operators are used in logical statements to determine equality or difference between variables or values.

// 1. ==	equal to
// 2. ===	equal value and equal type
// 3. !=	not equal
// 3. !==	not equal value or not equal type
// 5. >	greater than
// 6. <	less than
// 7. >=	greater than or equal to
// 8. <=	less than or equal to


// Logical Operators

// Logical operators are used to determine the logic between variables or values.
// Given that x = 6 and y = 3, the table below explains the logical operators:

// &&	and	(x < 10 && y > 1) is true

// ||	or	(x == 5 || y == 5) is false

// !	not	!(x == y) is true



// Conditional (Ternary) Operator

// JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.

// Syntax
// variablename = (condition) ? value1:value2 

var voteable = (age < 18) ? "Too young":"Old enough";


// Conditional Statements

// In JavaScript we have the following conditional statements:

// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed

// The if Statement
// Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

if (new Date().getHours() < 18) {
  document.getElementById("demo").innerHTML = "Good day!";
}

// The else Statement
// Use the else statement to specify a block of code to be executed if the condition is false.

function myFunction() {
  var hour = new Date().getHours(); 
  var greeting;
  if (hour < 18) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  document.getElementById("demo").innerHTML = greeting;
}

myFunction();



// The else if Statement
// Use the else if statement to specify a new condition if the first condition is false.

function myFunction() {
  var greeting;
  var time = new Date().getHours();
  if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  document.getElementById("demo").innerHTML = greeting;
}

myFunction();

// Switch Statement

// The switch statement is used to perform different actions based on different conditions.
// Use the switch statement to select one of many code blocks to be executed.

var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;


// The break Keyword

// When JavaScript reaches a break keyword, it breaks out of the switch block.

// This will stop the execution of inside the block.

// It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.


// The default Keyword
// The default keyword specifies the code to run if there is no case match:


// The getDay() method returns the weekday as a number between 0 and 6.

// If today is neither Saturday (6) nor Sunday (0), write a default message:
// The default case does not have to be the last case in a switch block:

switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}

// Common Code Blocks
// Sometimes you will want different switch cases to use the same code.

// In this example case 4 and 5 share the same code block, and 0 and 6 share another code block:

switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}


// Different Kinds of Loops
// JavaScript supports different kinds of loops:

// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true


// The For Loop
// The for loop has the following syntax:

// for (statement 1; statement 2; statement 3) {
//   //code block to be executed
// }

// Statement 1 is executed (one time) before the execution of the code block.

// Statement 2 defines the condition for executing the code block.

// Statement 3 is executed (every time) after the code block has been executed.

Example
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}


// The For/Of Loop
// The JavaScript for/of statement loops through the values of an iterable objects

// for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.

// The for/of loop has the following syntax:

// for (variable of iterable) {
//   // code block to be executed
// }
// variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.

// iterable - An object that has iterable properties.

// Looping over an Array

var cars = ['BMW', 'Volvo', 'Mini'];
var x;

for (x of cars) {
  document.write(x + "<br >");
}

// Looping over a String

var txt = 'JavaScript';
var x;

for (x of txt) {
  document.write(x + "<br >");
}

// The While Loop
// The while loop loops through a block of code as long as a specified condition is true.

// Syntax
// while (condition) {
//   // code block to be executed
// }
// Example
// In the following example, the code in the loop will run, over and over again, as long as a variable (i) is less than 10:


while (i < 10) {
  text += "The number is " + i;
  i++;
}



// The Do/While Loop
// The do/while loop is a variant of the while loop. This loop will execute the code block once, before checking 
// if the condition is true, then it will repeat the loop as long as the condition is true.

// Syntax
// do {
//   // code block to be executed
// }

// while (condition);
// Example
// The example below uses a do/while loop. The loop will always be executed at least once, even 
// if the condition is false, because the code block is executed before the condition is tested:

do {
  text += "The number is " + i;
  i++;
}
while (i < 10);


// The Break Statement
// You have already seen the break statement used in an earlier chapter of this tutorial. 
// It was used to "jump out" of a switch() statement.

// The break statement can also be used to jump out of a loop.  

// The break statement breaks the loop and continues executing the code after the loop (if any):

for (i = 0; i < 10; i++) {
  if (i === 3)
   { 
     break; 
    }
  text += "The number is " + i + "<br>";
}



// The Continue Statement
// The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues 
// with the next iteration in the loop.

// This example skips the value of 3:


for (i = 0; i < 10; i++) {
  if (i === 3) 
  { 
    continue;
 }
  text += "The number is " + i + "<br>";
}



// JavaScript Labels
// To label JavaScript statements you precede the statements with a label name and a colon:

// label:
// statements
// The break and the continue statements are the only JavaScript statements that can "jump out of" a code block.

// Syntax:

// break labelname;

// continue labelname;

// The continue statement (with or without a label reference) can only be used to skip one loop iteration.

// The break statement, without a label reference, can only be used to jump out of a loop or a switch.

// With a label reference, the break statement can be used to jump out of any code block:


var cars = ["BMW", "Volvo", "Saab", "Ford"];
var text = "";

list: {
  text += cars[0] + "<br>"; 
  text += cars[1] + "<br>"; 
  break list;
  text += cars[2] + "<br>"; 
  text += cars[3] + "<br>"; 
}

document.getElementById("demo").innerHTML = text;





// JavaScript Data Types
// In JavaScript there are 5 different data types that can contain values:

// string
// number
// boolean
// object
// function


// There are 6 types of objects:

// Object
// Date
// Array
// String
// Number
// Boolean


// And 2 data types that cannot contain values:

// null
// undefined

typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"








// JavaScript Function Scope
// In JavaScript there are two types of scope:

// Local scope
// Global scope
// JavaScript has function scope: Each function creates a new scope.

// Scope determines the accessibility (visibility) of these variables.

// Variables defined inside a function are not accessible (visible) from outside the function.


// Local JavaScript Variables
// Variables declared within a JavaScript function, become LOCAL to the function.

// Local variables have Function scope: They can only be accessed from within the function.

// Example
// // code here can NOT use carName

function myFunction() {
  var carName = "Volvo";

  // code here CAN use carName

}


// Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

// Local variables are created when a function starts, and deleted when the function is completed.



// Global JavaScript Variables
// A variable declared outside a function, becomes GLOBAL.

// A global variable has global scope: All scripts and functions on a web page can access it. 

// Example
var carName = "Volvo";

// code here can use carName

function myFunction() {

  // code here can also use carName

}


// Automatically Global
// If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.

// This code example will declare a global variable carName, even if the value is assigned inside a function.

myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo";
}


// Strict Mode
// All modern browsers support running JavaScript in "Strict Mode".

// You will learn more about how to use strict mode in a later chapter of this tutorial.

// In "Strict Mode", undeclared variables are not automatically global.

// The "use strict" directive was new in ECMAScript version 5.

// It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.

// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

// With strict mode, you can not, for example, use undeclared variables.

// All modern browsers support "use strict" except Internet Explorer 9 and lower:

"use strict";
x = 3.14;       // This will cause an error because x is not declared


"use strict";
myFunction();

function myFunction() {
  y = 3.14;   // This will also cause an error because y is not declared
}


// Global Variables in HTML
// With JavaScript, the global scope is the complete JavaScript environment.

// In HTML, the global scope is the window object. All global variables belong to the window object.

// Example
// var carName = "Volvo";

// code here can use window.carName


// The Lifetime of JavaScript Variables
// The lifetime of a JavaScript variable starts when it is declared.

// Local variables are deleted when the function is completed.

// In a web browser, global variables are deleted when you close the browser window (or tab).

// Function Arguments
// Function arguments (parameters) work as local variables inside functions