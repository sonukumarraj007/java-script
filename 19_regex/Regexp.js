// What Is a Regular Expression?
// A regular expression is a sequence of characters that forms a search pattern.

// When you search for data in a text, you can use this search pattern to describe what you are searching for.

// A regular expression can be a single character, or a more complicated pattern.

// Regular expressions can be used to perform all types of text search and text replace operations.

// Syntax
// /pattern/modifiers;


// Example
var patt = /w3schools/i;


// Example explained:

// /w3schools/i  is a regular expression.

// w3schools  is a pattern (to be used in a search).

// i  is a modifier (modifies the search to be case-insensitive).


// Using String Methods
// In JavaScript, regular expressions are often used with the two string methods: search() and replace().

// The search() method uses an expression to search for a match, and returns the position of the match.

// The replace() method returns a modified string where the pattern is replaced.

// Using String search() With a String
// The search() method searches a string for a specified value and returns the position of the match:


// Use a string to do a search for "W3schools" in a string:

var str = "Visit W3Schools!";
var n = str.search("W3Schools");

// Using String search() With a Regular Expression

var str = "Visit W3Schools";
var n = str.search(/w3schools/i);


// Using String replace() With a String
// The replace() method replaces a specified value with another value in a string:

var str = "Visit Microsoft!";
var res = str.replace("Microsoft", "W3Schools");

// Use String replace() With a Regular Expression
// Use a case insensitive regular expression to replace Microsoft with W3Schools in a string:

var str = "Visit Microsoft!";
var res = str.replace(/microsoft/i, "W3Schools");


// Regular Expression Modifiers
// Modifiers can be used to perform case-insensitive more global searches:

// Modifier	Description
// i	        Perform case-insensitive matching	
// g	        Perform a global match (find all matches rather than stopping after the first match)	
// m	        Perform multiline matching


function myFunction() {
    var str = "Visit W3Schools";
    var patt1 = /w3schools/i;
    var result = str.match(patt1);
    document.getElementById("demo").innerHTML = result;
  }


function myFunction() {
    var str = "Is this all there is?";
    var patt1 = /is/g;
    var result = str.match(patt1);
    document.getElementById("demo").innerHTML = result;
  }

  function myFunction() {
    var str = "\nIs th\nis it?";
    var patt1 = /^is/m;
    var result = str.match(patt1);
    document.getElementById("demo").innerHTML = result;
  }


// Regular Expression Patterns
// Brackets are used to find a range of characters:

// Expression	Description
// [abc]	    Find any of the characters between the brackets	
// [0-9]	    Find any of the digits between the brackets	
// (x|y)	    Find any of the alternatives separated with |


function myFunction() {
    var str = "Is this all there is?";
    var patt1 = /[h]/g; 
    var result = str.match(patt1);
    document.getElementById("demo").innerHTML = result;
  }

  function myFunction() {
    var str = "123456789";
    var patt1 = /[1-4]/g;
    var result = str.match(patt1);
    document.getElementById("demo").innerHTML = result;
  }


  function myFunction() {
    var str = "re, green, red, green, gren, gr, blue, yellow";
    var patt1 = /(red|green)/g;
    var result = str.match(patt1);
    document.getElementById("demo").innerHTML = result;
  }


//   Metacharacters are characters with a special meaning:

// Metacharacter	Description
// \d	                Find a digit	

function myFunction() {
    var str = "Give 100%!"; 
    var patt1 = /\d/g;
    var result = str.match(patt1);
    document.getElementById("demo").innerHTML = result;
  }


// \s	                Find a whitespace character	

function myFunction() {
    var str = "Is this all there is?";
    var patt1 = /\s/g;
    var result = str.match(patt1);
    document.getElementById("demo").innerHTML = result;
  }


// \b	                Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b
var str = "HELLO, LOOK AT YOU!"; 
var patt1 = /\bLO/;
var result = str.search(patt1);
document.getElementById("demo").innerHTML = result;

var str = "HELLO, LOOK AT YOU!"; 
var patt1 = /LO\b/;
var result = str.search(patt1);
document.getElementById("demo").innerHTML = result;

// \uxxxx	            Find the Unicode character specified by the hexadecimal number xxxx

function myFunction() {
    var str = "Visit W3Schools. Hello World!"; 
    var patt1 = /\u0057/g;
    var result = str.match(patt1);
    document.getElementById("demo").innerHTML = result;
  }


//   Quantifiers define quantities:

// Quantifier	Description

// n+	        Matches any string that contains at least one n
function myFunction() {
    var str = "Hellooo World! Hello W3Schools!"; 
    var patt1 = /o+/g;
    var result = str.match(patt1);
    document.getElementById("demo").innerHTML = result;
  }


// n*	        Matches any string that contains zero or more occurrences of n

function myFunction() {
    var str = "Hellooo World! Hello W3Schools!"; 
    var patt1 = /lo*/g;
    var result = str.match(patt1);
    document.getElementById("demo").innerHTML = result;
  }


// n?	        Matches any string that contains zero or one occurrences of n

function myFunction() {
    var str = "1, 100 or 1000?";
    var patt1 = /10?/g;
    var result = str.match(patt1);
    document.getElementById("demo").innerHTML = result;
  }

// Using the RegExp Object
// In JavaScript, the RegExp object is a regular expression object with predefined properties and methods.

// Using test()
// The test() method is a RegExp expression method.

// It searches a string for a pattern, and returns true or false, depending on the result.

// The following example searches a string for the character "e":

var patt = /e/;
patt.test("The best things in life are free!");

text = document.getElementById("p01").innerHTML; 
document.getElementById("demo").innerHTML = /e/.test(text);


// You don't have to put the regular expression in a variable first. The two lines above can be shortened to one:

// /e/.test("The best things in life are free!");




// Using exec()
// The exec() method is a RegExp expression method.

// It searches a string for a specified pattern, and returns the found text as an object.

// If no match is found, it returns an empty (null) object.

// The following example searches a string for the character "e":


// Example 1
// /e/.exec("The best things in life are free!");