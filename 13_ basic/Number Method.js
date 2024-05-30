
// 1. The toString() method returns a number as a string.

var x = 123;
x.toString();            // returns 123 from variable x
(123).toString();        // returns 123 from literal 123
(100 + 23).toString();   // returns 123 from expression 100 + 23


//  2. toExponential() returns a string, with a number rounded and written using exponential notation.

// A parameter defines the number of characters behind the decimal point:

var x = 9.656;
x.toExponential(2);     // returns 9.66e+0
x.toExponential(4);     // returns 9.6560e+0
x.toExponential(6);     // returns 9.656000e+0

// 3. toFixed() returns a string, with the number written with a specified number of decimals:

var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000

//  4. toPrecision() returns a string, with a number written with a specified length:

var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600


//  5. valueOf() returns a number as a number.

var x = 123;
x.valueOf();            // returns 123 from variable x
(123).valueOf();        // returns 123 from literal 123
(100 + 23).valueOf();   // returns 123 from expression 100 + 23

//  Converting Variables to Numbers

// 1. The Number() method
// 2. The parseInt() method
// 3. The parseFloat() method

// Number() can be used to convert JavaScript variables to numbers:

Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN

// Number() can also convert a date to a number:

Number(new Date("2017-09-30"));    // returns 1506729600000

// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN 

// If the number cannot be converted, NaN (Not a Number) is returned.

// parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:

parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN

// If the number cannot be converted, NaN (Not a Number) is returned.


// Number Properties

// MAX_VALUE	        Returns the largest number possible in JavaScript
// MIN_VALUE	        Returns the smallest number possible in JavaScript
// POSITIVE_INFINITY	Represents infinity (returned on overflow)
// NEGATIVE_INFINITY	Represents negative infinity (returned on overflow)
// NaN	                Represents a "Not-a-Number" value

// 1. MAX_VALUE returns the largest possible number in JavaScript.

var x = Number.MAX_VALUE;

// 2. MIN_VALUE returns the lowest possible number in JavaScript.

var x = Number.MIN_VALUE;

// 3. POSITIVE_INFINITY

var x = Number.POSITIVE_INFINITY;

var x = 1 / 0;

// 4. NEGATIVE_INFINITY

var x = Number.NEGATIVE_INFINITY;

var x = -1 / 0;

// 5.  NaN - Not a Number

var x = Number.NaN;

// NaN is a JavaScript reserved word indicating that a number is not a legal number.

// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

var x = 100 / "Apple";  // x will be NaN (Not a Number)

// Number Properties Cannot be Used on Variables

var x = 6;
var y = x.MAX_VALUE;    // y becomes undefined