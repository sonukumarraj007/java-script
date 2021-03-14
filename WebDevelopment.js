
// The HTML DOM (Document Object Model)
// When a web page is loaded, the browser creates a Document Object Model of the page.

// With the object model, JavaScript gets all the power it needs to create dynamic HTML:

// JavaScript can change all the HTML elements in the page
// JavaScript can change all the HTML attributes in the page
// JavaScript can change all the CSS styles in the page
// JavaScript can remove existing HTML elements and attributes
// JavaScript can add new HTML elements and attributes
// JavaScript can react to all existing HTML events in the page
// JavaScript can create new HTML events in the page


// What is the DOM?
// The DOM is a W3C (World Wide Web Consortium) standard.

// The DOM defines a standard for accessing documents:

// "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."

// The W3C DOM standard is separated into 3 different parts:

// Core DOM - standard model for all document types
// XML DOM - standard model for XML documents
// HTML DOM - standard model for HTML documents


// What is the HTML DOM?
// The HTML DOM is a standard object model and programming interface for HTML. It defines:

// The HTML elements as objects
// The properties of all HTML elements
// The methods to access all HTML elements
// The events for all HTML elements
// In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.


// The getElementById Method
// The most common way to access an HTML element is to use the id of the element.

// In the example above the getElementById method used id="demo" to find the element.

document.getElementById("demo").innerHTML = "Hello World!";


// The innerHTML Property
// The easiest way to get the content of an element is by using the innerHTML property.

// The innerHTML property is useful for getting or replacing the content of HTML elements.

// The innerHTML property can be used to get or change any HTML element, including <html> and <body>.


// Finding HTML Elements

// Method	                             Description
// document.getElementById(id)	         Find an element by element id
// document.getElementsByTagName(name)	 Find elements by tag name
// document.getElementsByClassName(name) Find elements by class name


// Changing HTML Elements

// Property	                                   Description
// element.innerHTML =  new html content	   Change the inner HTML of an element
// element.attribute = new value	           Change the attribute value of an HTML element
// element.style.property = new style	       Change the style of an HTML element

// Method	                                   Description
// element.setAttribute(attribute, value)	   Change the attribute value of an HTML element



// Adding and Deleting Elements

// Method	                          Description
// document.createElement(element)	  Create an HTML element
// document.removeChild(element)	  Remove an HTML element
// document.appendChild(element)	  Add an HTML element
// document.replaceChild(new, old)	  Replace an HTML element
// document.write(text)               Write into the HTML output stream


// Adding Events Handlers

// Method	                                                Description
// document.getElementById(id).onclick = function(){code}	Adding event handler code to an onclick event



// Finding HTML Element by Id
// The easiest way to find an HTML element in the DOM, is by using the element id.

// This example finds the element with id="intro":

var myElement = document.getElementById("intro");

// If the element is found, the method will return the element as an object (in myElement).

// If the element is not found, myElement will contain null.


// Finding HTML Elements by Tag Name
// This example finds all <p> elements:

var x = document.getElementsByTagName("p");

// This example finds the element with id="main", and then finds all <p> elements inside "main":

var x = document.getElementById("main");
var y = x.getElementsByTagName("p");

// Finding HTML Elements by Class Name
// If you want to find all HTML elements with the same class name, use getElementsByClassName().
// This example returns a list of all elements with class="intro".

var x = document.getElementsByClassName("intro");


// Finding HTML Elements by CSS Selectors
// If you want to find all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc),
//  use the querySelectorAll() method.
// This example returns a list of all <p> elements with class="intro".

var x = document.querySelectorAll("p.intro");

// Finding HTML Elements by HTML Object Collections
// This example finds the form element with id="frm1", in the forms collection, and displays all element values:

var x = document.forms["frm1"];
var text = "";
var i;
for (i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;


// The following HTML objects (and object collections) are also accessible:

document.anchors
document.body
document.documentElement
document.embeds
document.forms
document.head
document.images
document.links
document.scripts
document.title



// Changing HTML Content
// The easiest way to modify the content of an HTML element is by using the innerHTML property.

// To change the content of an HTML element, use this syntax:

// document.getElementById(id).innerHTML = new HTML


document.getElementById("p1").innerHTML = "New text!";

var element = document.getElementById("id01");
element.innerHTML = "New Heading";



// Changing the Value of an Attribute
// To change the value of an HTML attribute, use this syntax:

// document.getElementById(id).attribute = new value
// This example changes the value of the src attribute of an <img> element:

document.getElementById("myImage").src = "landscape.jpg";


// JavaScript HTML DOM - Changing CSS

// Changing HTML Style
// To change the style of an HTML element, use this syntax:

// document.getElementById(id).style.property = new style
// The following example changes the style of a <p> element:

document.getElementById("p2").style.color = "blue";


// Using Events
// The HTML DOM allows you to execute code when an event occurs.

// Events are generated by the browser when "things happen" to HTML elements:

// An element is clicked on
// The page has loaded
// Input fields are changed
// You will learn more about events in the next chapter of this tutorial.

// This example changes the style of the HTML element with id="id1", when the user clicks a button:

/* <h1 id="id1">My Heading 1</h1>

<button type="button"
onclick="document.getElementById('id1').style.color = 'red'">
Click Me!</button> */



// JavaScript HTML DOM Events

// Reacting to Events
// A JavaScript can be executed when an event occurs, like when a user clicks on an HTML element.

// To execute code when a user clicks on an element, add JavaScript code to an HTML event attribute:

// onclick=JavaScript
// Examples of HTML events:

// When a user clicks the mouse
// When a web page has loaded
// When an image has been loaded
// When the mouse moves over an element
// When an input field is changed
// When an HTML form is submitted
// When a user strokes a key

/* <h1 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1> */

// In this example, a function is called from the event handler:


/* <h1 onclick="changeText(this)">Click on this text!</h1> */

function changeText(id) {
  id.innerHTML = "Ooops!";
}


// HTML Event Attributes
// To assign events to HTML elements you can use event attributes.

//<button onclick="displayDate()">Try it</button>

// In the example above, a function named displayDate will be executed when the button is clicked.


// Assign Events Using the HTML DOM
// The HTML DOM allows you to assign events to HTML elements using JavaScript:

document.getElementById("myBtn").onclick = displayDate;


// The onload and onunload Events
// The onload and onunload events are triggered when the user enters or leaves the page.

// The onload event can be used to check the visitor's browser type and browser version, and load the proper version of the web page based on the information.

// The onload and onunload events can be used to deal with cookies.

<body onload="checkCookies()"></body>

// The onchange Event
// The onchange event is often used in combination with validation of input fields.

// Below is an example of how to use the onchange. The upperCase() function will be called when a user changes the content of an input field.

//<input type="text" id="fname" onchange="upperCase()"></input>

// The onmouseover and onmouseout Events
// The onmouseover and onmouseout events can be used to trigger a function when the user mouses over, or out of, an HTML element:

function mOver(obj) {
    obj.innerHTML = "Thank You"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
  }

  <div onmouseover="mOver(this)" onmouseout="mOut(this)" 
style="background-color:#D94A38;width:120px;height:20px;padding:40px;">
Mouse Over Me</div>


// The onmousedown, onmouseup and onclick Events
// The onmousedown, onmouseup, and onclick events are all parts of a mouse-click. First when a mouse-button is clicked,
//  the onmousedown event is triggered, then, when the mouse-button is released, the onmouseup event is triggered, 
//  finally, when the mouse-click is completed, the onclick event is triggered.

function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me";
  }
  
  function mUp(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="Thank You";
  }


<div onmousedown="mDown(this)" onmouseup="mUp(this)"
style="background-color:#D94A38;width:90px;height:20px;padding:40px;">
Click Me</div>

// onmousedown and onmouseup
// onload
// onfocus
// onmouseover
// onmouseout


// JavaScript HTML DOM EventListener

// The addEventListener() method
// Example
// Add an event listener that fires when a user clicks a button:

document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}



// The addEventListener() method attaches an event handler to the specified element.

// The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.

// You can add many event handlers to one element.

// You can add many event handlers of the same type to one element, i.e two "click" events.

// You can add event listeners to any DOM object not only HTML elements. i.e the window object.

// The addEventListener() method makes it easier to control how the event reacts to bubbling.

// When using the addEventListener() method, the JavaScript is separated from the HTML markup, for better readability and allows 
// you to add event listeners even when you do not control the HTML markup.

// You can easily remove an event listener by using the removeEventListener() method.


// Syntax
// element.addEventListener(event, function, useCapture);
// The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)

// The second parameter is the function we want to call when the event occurs.

// The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.


// Add an Event Handler to an Element

document.getElementById("myBtn").addEventListener("click", function() {
    alert("Hello World!");
  });

//   You can also refer to an external "named" function:

element.addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
}

// Add Many Event Handlers to the Same Element
// The addEventListener() method allows you to add many events to the same element, without overwriting existing events:

var x = document.getElementById("myBtn");
x.addEventListener("click", myFunction);
x.addEventListener("click", someOtherFunction);

function myFunction() {
  alert ("Hello World!");
}

function someOtherFunction() {
  alert ("This function was also executed!");
}


// You can add events of different types to the same element:

var x = document.getElementById("myBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
  document.getElementById("demo").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
  document.getElementById("demo").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
  document.getElementById("demo").innerHTML += "Moused out!<br>";
}


// Add an Event Handler to the window Object
// The addEventListener() method allows you to add event listeners on any HTML DOM object such as HTML elements, the HTML document, 
// the window object, or other objects that support events, like the xmlHttpRequest object.

// Add an event listener that fires when a user resizes the window:

window.addEventListener("resize", function(){
  document.getElementById("demo").innerHTML = sometext;
});

// Passing Parameters
// When passing parameter values, use an "anonymous function" that calls the specified function with the parameters:

var p1 = 5;
var p2 = 7;

document.getElementById("myBtn").addEventListener("click", function() {
  myFunction(p1, p2);
});

function myFunction(a, b) {
  var result = a * b;
  document.getElementById("demo").innerHTML = result;
}

// Event Bubbling or Event Capturing?
// There are two ways of event propagation in the HTML DOM, bubbling and capturing.

// Event propagation is a way of defining the element order when an event occurs. If you have a <p> element inside a <div> element, 
// and the user clicks on the <p> element, which element's "click" event should be handled first?

// In bubbling the inner most element's event is handled first and then the outer: the <p> element's click event is handled first, 
// then the <div> element's click event.

// In capturing the outer most element's event is handled first and then the inner: the <div> element's click event will be handled first, 
// then the <p> element's click event.

// With the addEventListener() method you can specify the propagation type by using the "useCapture" parameter:

// addEventListener(event, function, useCapture);
// The default value is false, which will use the bubbling propagation, when the value is set to true, the event uses the capturing propagation.

document.getElementById("myP").addEventListener("click", myFunction, true);
document.getElementById("myDiv").addEventListener("click", myFunction, true);


document.getElementById("myP1").addEventListener("click", function() {
    alert("You clicked the white element!");
  }, false);
  
  document.getElementById("myDiv1").addEventListener("click", function() {
    alert("You clicked the orange element!");
  }, false);
  
  document.getElementById("myP2").addEventListener("click", function() {
    alert("You clicked the white element!");
  }, true);
  
  document.getElementById("myDiv2").addEventListener("click", function() {
    alert("You clicked the orange element!");
  }, true);



//   The removeEventListener() method
// The removeEventListener() method removes event handlers that have been attached with the addEventListener() method:

element.removeEventListener("mousemove", myFunction);



// Creating New HTML Elements (Nodes)
// To add a new element to the HTML DOM, you must create the element (element node) first, and then append it to an existing element.

var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(para);



// Creating new HTML Elements - insertBefore()
// The appendChild() method in the previous example, appended the new element as the last child of the parent.

// If you don't want that you can use the insertBefore() method:

var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var element = document.getElementById("div1");
var child = document.getElementById("p1");
element.insertBefore(para, child);


// Removing Existing HTML Elements
// To remove an HTML element, use the remove() method:

var elmnt = document.getElementById("p1");
elmnt.remove();

// Removing a Child Node
// For browsers that does not support the remove() method, you have to find the parent node to remove an element:

var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.removeChild(child);


// Replacing HTML Elements 
// To replace an element to the HTML DOM, use the replaceChild() method:

var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.replaceChild(para, child);


// The HTMLCollection Object
// The getElementsByTagName() method returns an HTMLCollection object.

// An HTMLCollection object is an array-like list (collection) of HTML elements.

// The following code selects all <p> elements in a document:

var x = document.getElementsByTagName("p");

y = x[1];

// HTML HTMLCollection Length
// The length property defines the number of elements in an HTMLCollection:

var myCollection = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = myCollection.length;

// Example explained:

// Create a collection of all <p> elements
// Display the length of the collection
// The length property is useful when you want to loop through the elements in a collection:

// Change the background color of all <p> elements:

var myCollection = document.getElementsByTagName("p");
var i;
for (i = 0; i < myCollection.length; i++) {
  myCollection[i].style.backgroundColor = "red";
}


// The HTML DOM NodeList Object

// A NodeList object is a list (collection) of nodes extracted from a document.

// A NodeList object is almost the same as an HTMLCollection object.

// Some (older) browsers return a NodeList object instead of an HTMLCollection for methods like getElementsByClassName().

// All browsers return a NodeList object for the property childNodes. 

// Most browsers return a NodeList object for the method querySelectorAll().

// The following code selects all <p> nodes in a document:

var myNodeList = document.querySelectorAll("p");

y = myNodeList[1];

// HTML DOM Node List Length
// The length property defines the number of nodes in a node list:

var myNodelist = document.querySelectorAll("p");
document.getElementById("demo").innerHTML = myNodelist.length;

var myNodelist = document.querySelectorAll("p");
var i;
for (i = 0; i < myNodelist.length; i++) {
  myNodelist[i].style.backgroundColor = "red";
}



// The Difference Between an HTMLCollection and a NodeList
// An HTMLCollection (previous chapter) is a collection of HTML elements.

// A NodeList is a collection of document nodes.

// A NodeList and an HTML collection is very much the same thing.

// Both an HTMLCollection object and a NodeList object is an array-like list (collection) of objects.

// Both have a length property defining the number of items in the list (collection).

// Both provide an index (0, 1, 2, 3, 4, ...) to access each item like an array.

// HTMLCollection items can be accessed by their name, id, or index number.

// NodeList items can only be accessed by their index number.

// Only the NodeList object can contain attribute nodes and text nodes.