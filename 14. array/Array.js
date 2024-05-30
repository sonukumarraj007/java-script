
// JavaScript arrays are used to store multiple values in a single variable.

// Creating an Array

var array_name = [item1, item2, ....];   

var cars = ["Saab", "Volvo", "BMW"];

// Using the JavaScript Keyword new

var cars = new Array("Saab", "Volvo", "BMW");

// Access the Elements of an Array

var name = cars[0];

var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars[0];

// Changing an Array Elemen

var cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
document.getElementById("demo").innerHTML = cars[0];


// Access the Full Array

var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;

// Arrays are Objects

// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

var person = ["John", "Doe", 46];

// Arrays use numbers to access its "elements". In this example, person[0] returns John:

// Objects use names to access its "members". In this example, person.firstName returns John:

var person = {firstName:"John", lastName:"Doe", age:46};


// Array Elements Can Be Objects

myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;


// Array Properties and Methods

var x = cars.length;   // The length property returns the number of elements
var y = cars.sort();   // The sort() method sorts arrays

// 1. The length property of an array returns the length of an array (the number of array elements).

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length;   // the length of fruits is 4

// Accessing the First Array Element

fruits = ["Banana", "Orange", "Apple", "Mango"];
var first = fruits[0];

// Accessing the Last Array Element

fruits = ["Banana", "Orange", "Apple", "Mango"];
var last = fruits[fruits.length - 1];


// Looping Array Elements

var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

// You can also use the Array.forEach() function:

var fruits, text;
fruits = ["Banana", "Orange", "Apple", "Mango"];

text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}



//  The easiest way to add a new element to an array is using the push() method:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");    // adds a new element (Lemon) to fruits

// New element can also be added to an array using the length property:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Lemon";    // adds a new element (Lemon) to fruits

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[6] = "Lemon";    // adds a new element (Lemon) to fruits


// When to Use Arrays. When to use Objects.

// JavaScript does not support associative arrays.
// You should use objects when you want the element names to be strings (text).
// You should use arrays when you want the element names to be numbers.

// Avoid new Array()

var points = new Array();     // Bad
var points = [];              // Good 

var points = new Array(40, 100, 1, 5, 25, 10); // Bad
var points = [40, 100, 1, 5, 25, 10];          // Good


// How to Recognize an Array

// The problem is that the JavaScript operator typeof returns "object":

var fruits = ["Banana", "Orange", "Apple", "Mango"];

typeof fruits;    // returns object

// Solution 1: To solve this problem ECMAScript 5 defines a new method Array.isArray():

Array.isArray(fruits);   // returns true

// Solution 2: To solve this problem you can create your own isArray() function:

function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
  }

//   Solution 3: The instanceof operator returns true if an object is created by a given constructor:

var fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits instanceof Array;   // returns true



// JavaScript Array Methods

// 1. The JavaScript method toString() converts an array to a string of (comma separated) array values.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

// Result: Banana,Orange,Apple,Mango

// 2. The join() method also joins all array elements into a string.

// It behaves just like toString(), but in addition you can specify the separator:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");

// Result: Banana * Orange * Apple * Mango

//  3. The pop() method removes the last element from an array:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();              // Removes the last element ("Mango") from fruits

// The pop() method returns the value that was "popped out":

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.pop();      // the value of x is "Mango"

// 4. The push() method adds a new element to an array (at the end):

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits

//  The push() method returns the new array length:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.push("Kiwi");   //  the value of x is 5


//5. The shift() method removes the first array element and "shifts" all other elements to a lower index.

// Shifting is equivalent to popping, working on the first element instead of the last.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();            // Removes the first element "Banana" from fruits

// The shift() method returns the string that was "shifted out":


var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.shift();    // the value of x is "Banana"


//  6. The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits

// The unshift() method returns the new array length.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Returns 5


// Changing Elements

// Array elements are accessed using their index number:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";        // Changes the first element of fruits to "Kiwi"

// The length property provides an easy way to append a new element to an array:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";          // Appends "Kiwi" to fruits

// 7. Deleting Elements Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];           // Changes the first element in fruits to undefined

// Using delete may leave undefined holes in the array. Use pop() or shift() instead.



// Splicing an Array

// The splice() method can be used to add new items to an array:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi")


// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// The splice() method returns an array with the deleted items:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");


// Using splice() to Remove Elements

// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);        // Removes the first element of fruits


// The first parameter (0) defines the position where new elements should be added (spliced in).

// The second parameter (1) defines how many elements should be removed.

// The rest of the parameters are omitted. No new elements will be added.

// Merging (Concatenating) Arrays

// The concat() method creates a new array by merging (concatenating) existing arrays:

var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);   // Concatenates (joins) myGirls and myBoys

// The concat() method does not change the existing arrays. It always returns a new array.
// The concat() method can take any number of array arguments:


// Example (Merging Three Arrays)
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);   // Concatenates arr1 with arr2 and arr3


// The concat() method can also take values as arguments:
// Example (Merging an Array with Values)

var arr1 = ["Cecilie", "Lone"];
var myChildren = arr1.concat(["Emil", "Tobias", "Linus"]); 


// Slicing an Array
// The slice() method slices out a piece of an array into a new array.

// This example slices out a part of an array starting from array element 1 ("Orange"):

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);

// The slice() method creates a new array. It does not remove any elements from the source array.

// This example slices out a part of an array starting from array element 3 ("Apple"):

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3);

// The slice() method can take two arguments like slice(1, 3).

// The method then selects elements from the start argument, and up to (but not including) the end argument.

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);

// If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(2);



// Automatic toString()

// JavaScript automatically converts an array to a comma separated string when a primitive value is expected.
// This is always the case when you try to output an array.
// These two examples will produce the same result:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();


var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;


// Finding Max and Min Values in an Array
//There are no built-in functions for finding the highest or lowest value in a JavaScript array.




// JavaScript Sorting Arrays

// The sort() method sorts an array alphabetically:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // Sorts the elements of fruits


// The reverse() method reverses the elements in an array.
// You can use it to sort an array in descending order:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // First sort the elements of fruits
fruits.reverse();     // Then reverse the order of the elements


// Numeric Sort
// By default, the sort() function sorts values as strings.
// This works well for strings ("Apple" comes before "Banana").
// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce incorrect result when sorting numbers.
// You can fix this by providing a compare function:

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});

// Use the same trick to sort an array descending:

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});



// Math.max.apply to find the highest number in an array:

var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = myArrayMax(points);

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

// Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).


// You can use Math.min.apply to find the lowest number in an array:

var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = myArrayMin(points);

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

// Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).


// Sorting Object Arrays

// Even if objects have properties of different data types, the sort() method can be used to sort the array.
// The solution is to write a compare function to compare the property values:

var cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

displayCars();

function myFunction() {
  cars.sort(function(a, b){return a.year - b.year});
  displayCars();
}

function displayCars() {
  document.getElementById("demo").innerHTML =
  cars[0].type + " " + cars[0].year + "<br>" +
  cars[1].type + " " + cars[1].year + "<br>" +
  cars[2].type + " " + cars[2].year;
}

// example 2

var cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

displayCars();

function myFunction() {
  cars.sort(function(a, b){
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
  displayCars();
}

function displayCars() {
  document.getElementById("demo").innerHTML =
  cars[0].type + " " + cars[0].year + "<br>" +
  cars[1].type + " " + cars[1].year + "<br>" +
  cars[2].type + " " + cars[2].year;
}



//  JavaScript Array Iteration Methods

// 1. The forEach() method calls a function (a callback function) once for each array element.

var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value, index, array) {
  txt = txt + value + "<br>"; 
}

// Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself

var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
  txt = txt + value + "<br>";
}


// 2. Array.map()

// The map() method creates a new array by performing a function on each array element.
// The map() method does not execute the function for array elements without values.
// The map() method does not change the original array.
// This example multiplies each array value by 2:

var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

document.getElementById("demo").innerHTML = numbers2;

function myFunction(value, index, array) {
  return value * 2;
}

// Note that the function takes 3 arguments:
// The item value
// The item index
// The array itself
// When a callback function uses only the value parameter, the index and array parameters can be omitted:


var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}


// 3. Array.filter()

// The filter() method creates a new array with array elements that passes a test.
// This example creates a new array from elements with a value larger than 18:

var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

document.getElementById("demo").innerHTML = over18;

function myFunction(value, index, array) {
  return value > 18;
}

// Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself
// In the example above, the callback function does not use the index and array parameters, so they can be omitted:

var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
}

// 4. Array.reduce()

// The reduce() method runs a function on each array element to produce (reduce it to) a single value.
// The reduce() method works from left-to-right in the array. See also reduceRight().
// The reduce() method does not reduce the original array.
// This example finds the sum of all numbers in an array:

var numbers = [45, 4, 9, 16, 25];
var sum = numbers.reduce(myFunction);

document.getElementById("demo").innerHTML = "The sum is " + sum;

function myFunction(total, value, index, array) {
  return total + value;
}

// Note that the function takes 4 arguments:

// The total (the initial value / previously returned value)
// The item value
// The item index
// The array itself
// The example above does not use the index and array parameters. It can be rewritten to:

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}

// The reduce() method can accept an initial value:

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction, 100);

function myFunction(total, value) {
  return total + value;
}


// 5. Array.reduceRight()

// The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.
// The reduceRight() works from right-to-left in the array. See also reduce().
// The reduceRight() method does not reduce the original array.
// This example finds the sum of all numbers in an array:

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

// Note that the function takes 4 arguments:

// The total (the initial value / previously returned value)
// The item value
// The item index
// The array itself
// The example above does not use the index and array parameters. It can be rewritten to:


var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(myFunction);

function myFunction(total, value) {
  return total + value;
}


// 6. Array.every()

// The every() method check if all array values pass a test.
// This example check if all array values are larger than 18:

var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

// Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself
// When a callback function uses the first parameter only (value), the other parameters can be omitted:

var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}


// 7. Array.some()

// The some() method check if some array values pass a test.
// This example check if some array values are larger than 18:

var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

// Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself

// 8. Array.indexOf()

// The indexOf() method searches an array for an element value and returns its position.
// Note: The first item has position 0, the second item has position 1, and so on.

// Search an array for the item "Apple":

var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");

// Syntax: array.indexOf(item, start)

// item :	Required. The item to search for.
// start :	Optional. Where to start the search. Negative values will start at the given position counting from the end, 
// and search to the end.

// Array.indexOf() returns -1 if the item is not found.
// If the item is present more than once, it returns the position of the first occurrence.


// 9. Array.lastIndexOf()

// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

// Search an array for the item "Apple":

var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple");

// Syntax: array.lastIndexOf(item, start)
// item:	Required. The item to search for
// start;	Optional. Where to start the search. Negative values will start at the given position counting from the end, 
// and search to the beginning


// 10. Array.find()

// The find() method returns the value of the first array element that passes a test function.
// This example finds (returns the value of) the first element that is larger than 18:

var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

// Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself

// 11. Array.findIndex()

// The findIndex() method returns the index of the first array element that passes a test function.
// This example finds the index of the first element that is larger than 18:

var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}


// Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself