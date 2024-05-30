// JavaScript Date Objects

// Example
var d = new Date();

// JavaScript Date Output
// By default, JavaScript will use the browser's time zone and display a date as a full text string:

// Mon Dec 09 2019 12:50:15 GMT+0530 (India Standard Time)


// Creating Date Objects
// Date objects are created with the new Date() constructor.

// There are 4 ways to create a new date object:

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(milliseconds)
// new Date(date string)

// new Date()
// new Date() creates a new date object with the current date and time:
var d = new Date();

// new Date(year, month, ...)
// new Date(year, month, ...) creates a new date object with a specified date and time.

// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):

var d = new Date(2018, 11, 24, 10, 33, 30, 0);

// Note: JavaScript counts months from 0 to 11.

// January is 0. December is 11.

// 6 numbers specify year, month, day, hour, minute, second:
var d = new Date(2018, 11, 24, 10, 33, 30);

// 5 numbers specify year, month, day, hour, and minute:
var d = new Date(2018, 11, 24, 10, 33);

// 4 numbers specify year, month, day, and hour:
var d = new Date(2018, 11, 24, 10);

// 3 numbers specify year, month, and day:
var d = new Date(2018, 11, 24);

// 2 numbers specify year and month:
var d = new Date(2018, 11);

// You cannot omit month. If you supply only one parameter it will be treated as milliseconds.
var d = new Date(2018);


// Previous Century
// One and two digit years will be interpreted as 19xx:
var d = new Date(99, 11, 24);

var d = new Date(9, 11, 24);


// new Date(dateString)
// new Date(dateString) creates a new date object from a date string:
var d = new Date("October 13, 2014 11:13:00");

// JavaScript Stores Dates as Milliseconds
// JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).

// Zero time is January 01, 1970 00:00:00 UTC.

// Now the time is: 1575876015227 milliseconds past January 01, 1970


// new Date(milliseconds)
// new Date(milliseconds) creates a new date object as zero time plus milliseconds:
var d = new Date(0);

// 01 January 1970 plus 100 000 000 000 milliseconds is approximately 03 March 1973:
var d = new Date(100000000000);

// January 01 1970 minus 100 000 000 000 milliseconds is approximately October 31 1966:
var d = new Date(-100000000000);



// JavaScript Date Formats

// JavaScript Date Input
// There are generally 3 types of JavaScript date input formats:

// Type	Example
// ISO Date	"2015-03-25" (The International Standard)
// Short Date	"03/25/2015"
// Long Date	"Mar 25 2015" or "25 Mar 2015"

// JavaScript ISO Dates
// ISO 8601 is the international standard for the representation of dates and times.

// The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format:

// Example (Complete date)
var d = new Date("2015-03-25");

// The computed date will be relative to your time zone.
// Depending on your time zone, the result above will vary between March 24 and March 25.


// ISO Dates (Year and Month)
// ISO dates can be written without specifying the day (YYYY-MM):

// Example
var d = new Date("2015-03");

// Time zones will vary the result above between February 28 and March 01.

// ISO Dates (Only Year)
// ISO dates can be written without month and day (YYYY):

// Example
var d = new Date("2015");

// Time zones will vary the result above between December 31 2014 and January 01 2015.

// ISO Dates (Date-Time)
// ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):

// Example
var d = new Date("2015-03-25T12:00:00Z");

// Date and time is separated with a capital T.

// UTC time is defined with a capital letter Z.

// If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead:

var d = new Date("2015-03-25T12:00:00-06:30");

// UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time).


// Time Zones
// When setting a date, without specifying the time zone, JavaScript will use the browser's time zone.

// When getting a date, without specifying the time zone, the result is converted to the browser's time zone.

// In other words: If a date/time is created in GMT (Greenwich Mean Time), the date/time will be converted to CDT 
// (Central US Daylight Time) if a user browses from central US.

// JavaScript Short Dates.
// Short dates are written with an "MM/DD/YYYY" syntax like this:

var d = new Date("03/25/2015");

// JavaScript Long Dates.
// Long dates are most often written with a "MMM DD YYYY" syntax like this:

var d = new Date("Mar 25 2015");

// Month and day can be in any order:

var d = new Date("25 Mar 2015");

// And, month can be written in full (January), or abbreviated (Jan):

var d = new Date("January 25 2015");



// Date Input - Parsing Dates
// If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.

// Date.parse() returns the number of milliseconds between the date and January 1, 1970:

var msec = Date.parse("March 21, 2012");
document.getElementById("demo").innerHTML = msec;

// You can then use the number of milliseconds to convert it to a date object:

var msec = Date.parse("March 21, 2012");
var d = new Date(msec);
document.getElementById("demo").innerHTML = d;


// JavaScript Get Date Methods

// Method	            Description
// getFullYear()	    Get the year as a four digit number (yyyy)
// getMonth()	        Get the month as a number (0-11)
// getDate()	        Get the day as a number (1-31)
// getHours()   	    Get the hour (0-23)
// getMinutes()	    Get the minute (0-59)
// getSeconds()	    Get the second (0-59)
// getMilliseconds()	Get the millisecond (0-999)
// getTime()	        Get the time (milliseconds since January 1, 1970)
// getDay()	        Get the weekday as a number (0-6)
// Date.now()	        Get the time. ECMAScript 5.


// The getTime() Method
// The getTime() method returns the number of milliseconds since January 1, 1970:

var d = new Date();
document.getElementById("demo").innerHTML = d.getTime();

// The getFullYear() Method
// The getFullYear() method returns the year of a date as a four digit number:

var d = new Date();
document.getElementById("demo").innerHTML = d.getFullYear();


// The getMonth() Method
// The getMonth() method returns the month of a date as a number (0-11):

var d = new Date();
document.getElementById("demo").innerHTML = d.getMonth();

// You can use an array of names, and getMonth() to return the month as a name:

var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("demo").innerHTML = months[d.getMonth()];


// The getDate() Method
// The getDate() method returns the day of a date as a number (1-31):

var d = new Date();
document.getElementById("demo").innerHTML = d.getDate();

// The getHours() Method
// The getHours() method returns the hours of a date as a number (0-23):

var d = new Date();
document.getElementById("demo").innerHTML = d.getHours();


// The getMinutes() Method
// The getMinutes() method returns the minutes of a date as a number (0-59):

var d = new Date();
document.getElementById("demo").innerHTML = d.getMinutes();


// The getSeconds() Method
// The getSeconds() method returns the seconds of a date as a number (0-59):

var d = new Date();
document.getElementById("demo").innerHTML = d.getSeconds();


// The getMilliseconds() Method
// The getMilliseconds() method returns the milliseconds of a date as a number (0-999):

var d = new Date();
document.getElementById("demo").innerHTML = d.getMilliseconds();


// The getDay() Method
// The getDay() method returns the weekday of a date as a number (0-6):

var d = new Date();
document.getElementById("demo").innerHTML = d.getDay();

// In JavaScript, the first day of the week (0) means "Sunday", even if some countries in the world consider the
//  first day of the week to be "Monday"

// You can use an array of names, and getDay() to return the weekday as a name:

var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("demo").innerHTML = days[d.getDay()];




// UTC Date Methods
// UTC date methods are used for working with UTC dates (Universal Time Zone dates):

// Method	             Description
// getUTCDate()	     Same as getDate(), but returns the UTC date
// getUTCDay()	         Same as getDay(), but returns the UTC day
// getUTCFullYear()	 Same as getFullYear(), but returns the UTC year
// getUTCHours()	     Same as getHours(), but returns the UTC hour
// getUTCMilliseconds() Same as getMilliseconds(), but returns the UTC milliseconds
// getUTCMinutes()	     Same as getMinutes(), but returns the UTC minutes
// getUTCMonth()	     Same as getMonth(), but returns the UTC month
// getUTCSeconds()	     Same as getSeconds(), but returns the UTC seconds



// JavaScript Set Date Methods


// Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.

// Set Date Methods
// Set Date methods are used for setting a part of a date:

// Method	          Description
// setDate()	      Set the day as a number (1-31)
// setFullYear()	  Set the year (optionally month and day)
// setHours()	      Set the hour (0-23)
// setMilliseconds()  Set the milliseconds (0-999)
// setMinutes()	      Set the minutes (0-59)
// setMonth()	      Set the month (0-11)
// setSeconds()	      Set the seconds (0-59)
// setTime()	      Set the time (milliseconds since January 1, 1970)


// The setFullYear() Method
// The setFullYear() method sets the year of a date object. In this example to 2020:

var d = new Date();
d.setFullYear(2020);
document.getElementById("demo").innerHTML = d;

// The setFullYear() method can optionally set month and day:

var d = new Date();
d.setFullYear(2020, 11, 3);
document.getElementById("demo").innerHTML = d;

// The setMonth() Method
// The setMonth() method sets the month of a date object (0-11):

var d = new Date();
d.setMonth(11);
document.getElementById("demo").innerHTML = d;

// The setDate() Method
// The setDate() method sets the day of a date object (1-31):

var d = new Date();
d.setDate(15);
document.getElementById("demo").innerHTML = d;

// The setDate() method can also be used to add days to a date:

var d = new Date();
d.setDate(d.getDate() + 50);
document.getElementById("demo").innerHTML = d;

// If adding days shifts the month or year, the changes are handled automatically by the Date object.

// The setHours() Method
// The setHours() method sets the hours of a date object (0-23):

var d = new Date();
d.setHours(22);
document.getElementById("demo").innerHTML = d;

// The setMinutes() Method
// The setMinutes() method sets the minutes of a date object (0-59):

var d = new Date();
d.setMinutes(30);
document.getElementById("demo").innerHTML = d;

// The setSeconds() Method
// The setSeconds() method sets the seconds of a date object (0-59):

d.setSeconds(30);
document.getElementById("demo").innerHTML = d;

// Compare Dates
// Dates can easily be compared.

// The following example compares today's date with January 14, 2100:

var today, someday, text;
today = new Date();
someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
document.getElementById("demo").innerHTML = text;

// JavaScript counts months from 0 to 11. January is 0. December is 11.