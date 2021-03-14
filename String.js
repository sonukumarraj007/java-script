
// string declaration

var carName1 = "Volvo XC60";  // Double quotes
var carName2 = 'Volvo XC60';  // Single quotes



// Strings Can be Objects
// Normally, JavaScript strings are primitive values, created from literals:

var firstName = "John";

// But strings can also be defined as objects with the keyword new:

var firstName = new String("John");

var x = "John";               // typeof x will return string
var y = new String("John");   // typeof y will return object


// == operator, equal strings are equal

var x = "John";             
var y = new String("John");

// (x == y) is true because x and y have equal values

// === operator, equal strings are not equal, because the === operator expects equality in both type and value

var x = "John";             
var y = new String("John");

// (x === y) is false because x and y have different types (string and object)

// Objects cannot be compared:

var x = new String("John");             
var y = new String("John");

// (x == y) is false because x and y are different objects

// (x === y) is false because x and y are different objects


// JavaScript String Methods

// length property
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var sln = txt.length;

console.log(sln)

// The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");

// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");

// Both indexOf(), and lastIndexOf() return -1 if the text is not found.

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("John");

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate", 15);

// The search() method searches a string for a specified value and returns the position of the match:

var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");

// The two methods, indexOf() and search(), are equal?


// Extracting String Parts

// slice(start, end)
// substring(start, end)
// substr(start, length)

// 5. slice() extracts a part of a string and returns the extracted part in a new string.

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);

// If a parameter is negative, the position is counted from the end of the string.

var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);

// If you omit the second parameter, the method will slice out the rest of the string:

var res = str.slice(7);

var res = str.slice(-12);

// 6. The substring() Method

// substring() is similar to slice().

// The difference is that substring() cannot accept negative indexes.

var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);

// If you omit the second parameter, substr() will slice out the rest of the string.

var str = "Apple, Banana, Kiwi";
var res = str.substr(7);

// If the first parameter is negative, the position counts from the end of the string.

var str = "Apple, Banana, Kiwi";
var res = str.substr(-4);

// Replacing String Content

// The replace() method replaces a specified value with another value in a string:

str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");

// To replace case insensitive, use a regular expression with an /i flag (insensitive):

str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "W3Schools");

// To replace all matches, use a regular expression with a /g flag (global match):

str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");

// A string is converted to upper case with toUpperCase():

var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper

// A string is converted to lower case with toLowerCase():

var text1 = "Hello World!";       // String
var text2 = text1.toLowerCase();  // text2 is text1 converted to lower

// concat() joins two or more strings:

var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);

// The concat() method can be used instead of the plus operator. These two lines do the same:

var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");

// The trim() method removes whitespace from both sides of a string:

var str = "       Hello World!        ";
alert(str.trim());

// Extracting String Characters

// charAt(position)
// charCodeAt(position)
// Property access [ ]

// The charAt() method returns the character at a specified index (position) in a string:

var str = "HELLO WORLD";
str.charAt(0);            // returns H

// The charCodeAt() method returns the unicode of the character at a specified index in a string:

// The method returns a UTF-16 code (an integer between 0 and 65535).

var str = "HELLO WORLD";

str.charCodeAt(0);         // returns 72

// ECMAScript 5 (2009) allows property access [ ] on strings:

var str = "HELLO WORLD";
str[0];                   // returns H


// 12. A string can be converted to an array with the split() method:

var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe

// If the separator is omitted, the returned array will contain the whole string in index [0].

// If the separator is "", the returned array will be an array of single characters:

var txt = "Hello";       // String
txt.split("");           // Split in characters
