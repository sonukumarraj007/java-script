## Interview Questions

<ol>
			<li>global object- window, this</li>
			<li>different way to create object and what is the diffenece between all of them.
			</li>
			<li>copying and cloning and object assign</li>
			<li>constructor, opetator"new"</li>
			<li>closure, lexical environment
			</li>
			<li>setTimeout, setInterval, Canceling with clearTimeout, recusive setTimeout</li>
			<li>Currying</li>
			<li>Class, inheritance, super, Overriding a method, overriding constructor</li>
			<li>prototypes, methods for prototypes <br>
			<li> Property flags and descriptors</li>
			<li>Prototypal inheritance, this <br>
			<li>Event delegation</li>
			<li>Bubbling and capturing</li>
   </ol>



## typeof

```ts

console.log(typeof "str");

Output: "string"


```

## var, let, and const

### var

- **Function Scope:** Variables declared with var are scoped to the function in which they are declared.

- **Hoisting:** var declarations are hoisted to the top of their containing function or global scope. This means you can use the variable before it is declared, but its value will be undefined until the declaration is encountered.

- **Re-declaration:** You can re-declare variables declared with var within the same scope.

```ts

function varExample() {
  console.log(x); // undefined due to hoisting
  var x = 5;
  console.log(x); // 5
}

varExample();

var y = 10;
var y = 20; // Re-declaration is allowed
console.log(y); // 20

```

### let 

- **Block Scope:** Variables declared with let are scoped to the block in which they are declared.
  
- **Hoisting:** let declarations are hoisted but not initialized, so using the variable before the declaration results in a ReferenceError.
  
- **Re-declaration:** You cannot re-declare variables declared with let within the same scope.

```ts

function letExample() {
  // console.log(a); // ReferenceError: Cannot access 'a' before initialization
  let a = 5;
  console.log(a); // 5
}

letExample();

let b = 10;
// let b = 20; // SyntaxError: Identifier 'b' has already been declared
console.log(b); // 10


```

### const

- **Block Scope:** Variables declared with const are scoped to the block in which they are declared.

- **Hoisting:** const declarations are hoisted but not initialized, so using the variable before the declaration results in a ReferenceError.

- **Re-declaration:** You cannot re-declare variables declared with const within the same scope.

- **Immutable Binding:** The value of a const variable cannot be reassigned. However, if the variable holds an object or array, the contents of the object or array can be modified.

```ts

function constExample() {
  // console.log(c); // ReferenceError: Cannot access 'c' before initialization
  const c = 5;
  console.log(c); // 5
  // c = 10; // TypeError: Assignment to constant variable.
}

constExample();

const d = 10;
// const d = 20; // SyntaxError: Identifier 'd' has already been declared
console.log(d); // 10

const obj = { key: 'value' };
obj.key = 'newValue'; // Allowed
console.log(obj.key); // 'newValue'

// obj = { anotherKey: 'anotherValue' }; // TypeError: Assignment to constant variable.

```

## undefined, null

### undefined

- **Type:** undefined is a primitive type.

- **Meaning:** A variable that has been declared but has not been assigned a value has the value undefined.

- **Common Uses:**

  - When a variable is declared but not assigned.
  - When a function does not explicitly return a value.
  - When accessing a non-existent property of an object.
  - When a function parameter is not provided.
 
 ```ts

let a;
console.log(a); // undefined

function doSomething() {}
console.log(doSomething()); // undefined

let obj = {};
console.log(obj.nonExistentProperty); // undefined

function greet(name) {
  console.log(name); // undefined if no argument is passed
}
greet();


 ```

### null


- **Type:** null is a primitive type, but it is often considered an object for historical reasons.

- **Meaning**: null represents the intentional absence of any object value. It is a value that can be assigned to a variable to indicate "no value".

- **Common Uses:**
    - To explicitly indicate that a variable should have no value.
    - To reset or clear a variable.
 
```ts

let b = null;
console.log(b); // null

let obj = { key: 'value' };
obj.key = null; // Explicitly clearing the value
console.log(obj.key); // null

typeof undefined returns "undefined".
typeof null returns "object".

```

## Hoisting

Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compile phase. 
This means that variables and functions can be used before they are declared. However, there are important nuances to understand about how 
hoisting works with var, let, const, and function declarations.

### Variable Hoisting

**var Hoisting**

- Variables declared with var are hoisted to the top of their function scope.

- During hoisting, the declaration is moved to the top, but the assignment remains in place.

- The variable is initialized with undefined at the top of the scope.

```ts

console.log(a); // undefined
var a = 5;
console.log(a); // 5

// The above code is interpreted as:
var a;
console.log(a); // undefined
a = 5;
console.log(a); // 5

```


**let and const Hoisting**

- Variables declared with let and const are also hoisted, but they are not initialized.

- Accessing them before the declaration results in a ReferenceError.

- This temporal dead zone (TDZ) exists from the start of the block until the declaration is encountered.

```ts
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 5;
console.log(b); // 5

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 5;
console.log(c); // 5


```

### Function Hoisting

**Function Declarations**

- Function declarations are hoisted to the top of their scope.
  
- This means you can call the function before its declaration.

```ts
console.log(add(2, 3)); // 5

function add(x, y) {
  return x + y;
}

// The above code is interpreted as:
function add(x, y) {
  return x + y;
}
console.log(add(2, 3)); // 5

```


**Function Expressions**

- Function expressions (both with var, let, and const) are not hoisted.

- Only the variable declaration is hoisted, not the function definition.

```ts

console.log(subtract(5, 2)); // TypeError: subtract is not a function

var subtract = function(x, y) {
  return x - y;
};

console.log(subtract(5, 2)); // 3

// The above code is interpreted as:
var subtract;
console.log(subtract(5, 2)); // TypeError: subtract is not a function
subtract = function(x, y) {
  return x - y;
};
console.log(subtract(5, 2)); // 3

```

**With let and const:**

```ts
console.log(multiply(2, 3)); // ReferenceError: Cannot access 'multiply' before initialization

let multiply = function(x, y) {
  return x * y;
};

console.log(multiply(2, 3)); // 6


```

## rest parameters and spread operator

### Rest Parameters

- **Description:** Rest parameters allow a function to accept an indefinite number of arguments as an array.

- **Syntax:** function(...rest)

```ts

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

```

### Spread Operator

- **Description:** The spread operator allows an iterable such as an array or string to be expanded in places where zero or more arguments (for function calls) 
or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

- **Syntax:** ...iterable

#### Example: Spread in Function Calls

```ts

const numbers = [1, 2, 3];
console.log(Math.max(...numbers)); // Output: 3

```

#### Example: Spread in Array Literals

```ts

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

```

#### Example: Spread in Object Literals

```ts

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // Output: { a: 1, b: 3, c: 4 }

```


## Destructuring

Destructuring is a convenient way of extracting values from arrays and objects into distinct variables. This syntax makes it easier to 
work with complex data structures and can help make your code more readable and concise.

**Array Destructuring**

- **Basic Syntax:** [a, b] = array

```ts

const numbers = [1, 2, 3, 4];

const [first, second] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2

```

- **Skipping Items:** You can skip elements in the array.

```ts

const numbers = [1, 2, 3, 4];

const [first, , third] = numbers;
console.log(first); // Output: 1
console.log(third); // Output: 3

```

- **Rest Syntax:** You can use the rest syntax to collect the remaining items in an array.

```ts

const numbers = [1, 2, 3, 4];

const [first, ...rest] = numbers;
console.log(first); // Output: 1
console.log(rest); // Output: [2, 3, 4]

```

#### Object Destructuring

- **Basic Syntax:** {a, b} = object

```ts

const person = { name: 'Alice', age: 25 };

const { name, age } = person;
console.log(name); // Output: Alice
console.log(age); // Output: 25

```

- **Renaming Variables:** You can assign new variable names while destructuring.

```ts

const person = { name: 'Alice', age: 25 };

const { name: personName, age: personAge } = person;
console.log(personName); // Output: Alice
console.log(personAge); // Output: 25

```

- **Default Values:** You can set default values if the property does not exist in the object.

```ts

const person = { name: 'Alice' };

const { name, age = 30 } = person;
console.log(name); // Output: Alice
console.log(age); // Output: 30

```

- **Nested Objects:** You can destructure nested objects.

```ts

const person = { name: 'Alice', address: { city: 'Wonderland', zip: 12345 } };

const { address: { city, zip } } = person;
console.log(city); // Output: Wonderland
console.log(zip); // Output: 12345

```

## Arrow Function

Arrow functions are introduced in ES6, which provides you a more accurate way to write the functions in JavaScript. Arrow functions make your code more readable and structured.

Arrow functions are anonymous functions (the functions without a name and not bound with an identifier). They don't return any value and can declare without the function keyword. Arrow functions cannot be used as the constructors. The context within the arrow functions is lexically or statically defined. They are also called as Lambda Functions in different languages.

Arrow functions do not include any prototype property, and they cannot be used with the new keyword.

Before Arrow:

```ts

hello = function() {
  return "Hello World!";
}

```


With Arrow Function:

```ts

hello = () => {
  return "Hello World!";
}

```

Arrow Functions Return Value by Default:


```ts

hello = () => "Hello World!";

```

Arrow Function With Parameters:

```ts

hello = (val) => "Hello " + val;

```

In fact, if you have only one parameter, you can skip the parentheses as well:

```ts

hello = val => "Hello " + val;

```


## call, apply, and bind

In JavaScript, call, apply, and bind are methods used to control the value of this inside a function and to pass arguments to functions in different ways. 
These methods are very useful when dealing with methods that need a specific context or when reusing a function with different objects.

### call

- **Description:** The call method calls a function with a given this value and arguments provided individually.

- **Syntax:** function.call(thisArg, arg1, arg2, ...)

```ts

function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Alice' };

greet.call(person, 'Hello', '!'); // Output: Hello, Alice!


```

### apply

- **Description:** The apply method calls a function with a given this value and arguments provided as an array (or an array-like object).

- **Syntax:** function.apply(thisArg, [argsArray])

```ts

function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Alice' };

greet.apply(person, ['Hello', '!']); // Output: Hello, Alice!

```

### bind

- **Description:** The bind method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments 
preceding any provided when the new function is called.

- **Syntax:** function.bind(thisArg, arg1, arg2, ...)


```ts
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Alice' };

const greetPerson = greet.bind(person, 'Hello');
greetPerson('!'); // Output: Hello, Alice!

```


#### Summary

- **call:** Immediately invokes the function with a specified this value and arguments provided individually.

   - Use case: When you need to call a function with a specific this value and a known set of arguments.

   
- **apply:** Immediately invokes the function with a specified this value and arguments provided as an array.

   - Use case: When you need to call a function with a specific this value and an array of arguments (useful for variadic functions).

- **bind:** Creates a new function with a specified this value and initial arguments.

  - Use case: When you need to create a function with a specific this value and optionally preset initial arguments for later use.


#### Example with call


```ts

function add(a, b) {
  return a + b;
}

const result = add.call(null, 2, 3); // 5

```

#### Example with apply

```ts

function add(a, b) {
  return a + b;
}

const result = add.apply(null, [2, 3]); // 5

```

#### Example with bind

```ts

function add(a, b) {
  return a + b;
}

const addTwo = add.bind(null, 2);
const result = addTwo(3); // 5

```

## Callbacks

A callback is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. 
Callbacks are commonly used in asynchronous programming, where certain tasks (like data fetching) take time to complete, and you want to run some code only 
after that task is finished.

```ts

function fetchData(callback) {
  setTimeout(() => {
    const data = 'Fetched Data';
    callback(data);
  }, 1000);
}

function handleData(data) {
  console.log(data);
}

fetchData(handleData); // After 1 second, "Fetched Data" is logged to the console

```

### Callback in Callback (Nested Callbacks)

When you have multiple asynchronous operations that need to be performed one after the other, you often end up with nested callbacks, also 
known as "callback hell" or "pyramid of doom." This can make the code hard to read and maintain.

```ts

function firstOperation(callback) {
  setTimeout(() => {
    console.log('First operation complete');
    callback();
  }, 1000);
}

function secondOperation(callback) {
  setTimeout(() => {
    console.log('Second operation complete');
    callback();
  }, 1000);
}

function thirdOperation(callback) {
  setTimeout(() => {
    console.log('Third operation complete');
    callback();
  }, 1000);
}

firstOperation(() => {
  secondOperation(() => {
    thirdOperation(() => {
      console.log('All operations complete');
    });
  });
});

```

In this example, secondOperation is called only after firstOperation is complete, and thirdOperation is called only after secondOperation is complete. 
The nesting makes the code harder to read and maintain.


## Avoiding Callback Hell


Promises provide a way to handle asynchronous operations more cleanly than nested callbacks.

```ts

function firstOperation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('First operation complete');
      resolve();
    }, 1000);
  });
}

function secondOperation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Second operation complete');
      resolve();
    }, 1000);
  });
}

function thirdOperation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Third operation complete');
      resolve();
    }, 1000);
  });
}

firstOperation()
  .then(secondOperation)
  .then(thirdOperation)
  .then(() => {
    console.log('All operations complete');
  });

```

### Using async/await

The async and await keywords allow you to write asynchronous code that looks synchronous, further improving readability.

```ts

function firstOperation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('First operation complete');
      resolve();
    }, 1000);
  });
}

function secondOperation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Second operation complete');
      resolve();
    }, 1000);
  });
}

function thirdOperation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Third operation complete');
      resolve();
    }, 1000);
  });
}

async function runOperations() {
  await firstOperation();
  await secondOperation();
  await thirdOperation();
  console.log('All operations complete');
}

runOperations();

```

#### Summary

- **Callbacks:** Functions passed as arguments to other functions and invoked after some operation is completed.

- **Callback Hell:** The result of excessive nesting of callbacks, leading to hard-to-read and maintain code.

- **Avoiding Callback Hell:** Use named functions, Promises, or async/await to write cleaner asynchronous code.


## Promises

Promises are a modern JavaScript feature that provide a more elegant way to handle asynchronous operations compared to callbacks. 
They represent a value that may be available now, or in the future, or never. A promise can be in one of three states:

- **Pending:** Initial state, neither fulfilled nor rejected.

- **Fulfilled:** Operation completed successfully.

- **Rejected:** Operation failed.

```ts

const promise = new Promise((resolve, reject) => {
  // Asynchronous operation
  if (/* success */) {
    resolve('Success'); // Fulfilled state
  } else {
    reject('Error'); // Rejected state
  }
});


```


### Using Promises

Promises can be handled using .then(), .catch(), and .finally() methods.

- **.then(onFulfilled, onRejected):** Attaches callbacks for the resolution and/or rejection of the Promise.

- **.catch(onRejected):** Attaches a callback for only the rejection of the Promise.

- **.finally(onFinally):** Attaches a callback that is invoked when the Promise is settled, regardless of its outcome.


```ts

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve('Operation successful');
    } else {
      reject('Operation failed');
    }
  }, 1000);
});

promise
  .then((result) => {
    console.log(result); // Output: Operation successful
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log('Operation completed'); // Always executed
  });

```

### Chaining Promises

One of the powerful features of promises is chaining, where you can perform a series of asynchronous operations in sequence.

```ts

const firstOperation = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('First operation complete');
      resolve('First result');
    }, 1000);
  });
};

const secondOperation = (result) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Second operation complete with:', result);
      resolve('Second result');
    }, 1000);
  });
};

const thirdOperation = (result) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Third operation complete with:', result);
      resolve('Third result');
    }, 1000);
  });
};

firstOperation()
  .then(secondOperation)
  .then(thirdOperation)
  .then((finalResult) => {
    console.log('All operations complete with:', finalResult);
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });


```

### Handling Multiple Promises

**Promise.all**

**Promise.all** waits for all promises to be resolved (or for any to be rejected).

```ts

const promise1 = Promise.resolve('Promise 1 resolved');
const promise2 = Promise.resolve('Promise 2 resolved');
const promise3 = Promise.resolve('Promise 3 resolved');

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // Output: ['Promise 1 resolved', 'Promise 2 resolved', 'Promise 3 resolved']
  })
  .catch((error) => {
    console.error('One of the promises failed:', error);
  });


```

**Promise.race**

**Promise.race** returns the first promise that resolves or rejects.

```ts

const promise1 = new Promise((resolve) => setTimeout(resolve, 500, 'Promise 1 resolved'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'Promise 2 resolved'));

Promise.race([promise1, promise2])
  .then((result) => {
    console.log(result); // Output: 'Promise 2 resolved'
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });

```

**Promise.allSettled**

**Promise.allSettled** waits for all promises to either resolve or reject and returns an array of objects describing the outcome of each promise.

```ts

const promise1 = Promise.resolve('Promise 1 resolved');
const promise2 = Promise.reject('Promise 2 rejected');
const promise3 = Promise.resolve('Promise 3 resolved');

Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
    // Output: 
    // [
    //   { status: 'fulfilled', value: 'Promise 1 resolved' },
    //   { status: 'rejected', reason: 'Promise 2 rejected' },
    //   { status: 'fulfilled', value: 'Promise 3 resolved' }
    // ]
  });

```


Async/Await

async and await provide a more readable and synchronous-looking way to work with promises. An async function always returns a promise, 
and await pauses the execution of the function until the promise is resolved or rejected.


```ts

function firstOperation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('First operation complete');
      resolve('First result');
    }, 1000);
  });
}

function secondOperation(result) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Second operation complete with:', result);
      resolve('Second result');
    }, 1000);
  });
}

async function runOperations() {
  try {
    const firstResult = await firstOperation();
    const secondResult = await secondOperation(firstResult);
    console.log('All operations complete with:', secondResult);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

runOperations();

```


#### Summary

- **Promises:** Objects representing the eventual completion or failure of an asynchronous operation.

- **Methods:**

  - .then(onFulfilled, onRejected): Handles resolved/rejected promise.

  - .catch(onRejected): Handles rejected promise.

  - .finally(onFinally): Executes callback when promise is settled.

- **Chaining:** Allows for sequential execution of asynchronous operations.

- **Handling Multiple Promises:** Promise.all, Promise.race, Promise.allSettled.

- **Async/Await:** Syntactic sugar for promises, providing a more synchronous code structure for asynchronous operations.



## try, catch, and finally

### Syntax

```ts

try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code to run regardless of an error
}


```

#### Detailed Explanation

- **try Block:**

  - Contains the code that may throw an error.

  - If an error occurs in the try block, the control is immediately transferred to the catch block.

- **catch Block:**

  - Contains the code that executes if an error is thrown in the try block.

  - The catch block receives an error object that contains information about the error.

- **finally Block:**

  - Contains code that runs regardless of whether an error occurred or not.
    
  - This block is optional and is used for cleanup operations (e.g., closing files, releasing resources).
 
  #### Basic Example

```ts

try {
  let result = riskyOperation();
  console.log('Result:', result);
} catch (error) {
  console.error('An error occurred:', error.message);
} finally {
  console.log('This will always run');
}

```

#### Example with throw

You can manually throw errors using the throw statement.

```ts

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

try {
  let result = divide(4, 0);
  console.log('Result:', result);
} catch (error) {
  console.error('An error occurred:', error.message);
} finally {
  console.log('Division operation complete');
}

```


#### Custom Error Types

You can create custom error types by extending the built-in Error class.

```ts

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

function validate(input) {
  if (input < 0) {
    throw new ValidationError('Input must be a positive number');
  }
  return true;
}

try {
  validate(-1);
} catch (error) {
  if (error instanceof ValidationError) {
    console.error('Validation Error:', error.message);
  } else {
    console.error('Unknown Error:', error.message);
  }
} finally {
  console.log('Validation complete');
}


```


#### Asynchronous Error Handling

For asynchronous code, such as Promises or async/await, error handling is slightly different.

**Promises**

```ts
someAsyncFunction()
  .then((result) => {
    console.log('Result:', result);
  })
  .catch((error) => {
    console.error('An error occurred:', error.message);
  })
  .finally(() => {
    console.log('Async operation complete');
  });

```

**async/await**

```ts

async function asyncOperation() {
  try {
    let result = await someAsyncFunction();
    console.log('Result:', result);
  } catch (error) {
    console.error('An error occurred:', error.message);
  } finally {
    console.log('Async operation complete');
  }
}

asyncOperation();

```

#### Summary

- **try:** Contains code that may throw an error.

- **catch:** Handles errors thrown in the try block.

- **finally:** Runs code regardless of whether an error occurred or not (optional).

- **throw:** Manually throws an error.

- **Custom Errors:** Create custom error types by extending the Error class.

- **Asynchronous Error Handling:** Use .catch for Promises and try/catch within async functions for async/await.


## map, set, weakmap, and weakset

JavaScript provides several built-in objects for storing collections of data, each with its own characteristics and use cases. 
These include Map, Set, WeakMap, and WeakSet. Here's an overview of each:

### map 

- **Description:** A Map object holds key-value pairs where keys can be of any type (including objects and primitives).

- **Features:**

     - Maintains the order of insertion.
     - Provides methods for adding, deleting, and iterating over entries.
 
```ts

const map = new Map();

map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

console.log(map.get('a')); // 1
console.log(map.has('b')); // true

map.delete('c');
console.log(map.size); // 2

map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Output:
// a: 1
// b: 2


```

### set

- **Description:** A Set object holds unique values of any type, whether primitive values or object references.

- **Features:**

    - Values are unique.
    - Maintains the order of insertion.
    - Provides methods for adding, deleting, and iterating over values.
 
```ts

const set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(2); // Duplicate value, will be ignored

console.log(set.has(2)); // true

set.delete(3);
console.log(set.size); // 2

set.forEach(value => {
  console.log(value);
});

// Output:
// 1
// 2


```

### weakmap

- **Description:** A WeakMap object is a collection of key-value pairs where keys must be objects and the values can be of any type.

- **Features:**

  - Keys are weakly referenced, meaning they can be garbage collected if there are no other references to the key objects.

  - Does not prevent garbage collection.

  - No enumeration methods (forEach, keys, values, entries).
 
```ts
const weakMap = new WeakMap();
let obj1 = {};
let obj2 = {};

weakMap.set(obj1, 'value1');
weakMap.set(obj2, 'value2');

console.log(weakMap.get(obj1)); // 'value1'
console.log(weakMap.has(obj2)); // true

obj1 = null; // obj1 can be garbage collected
// obj1 will be removed from the WeakMap at some point

console.log(weakMap.get(obj1)); // undefined

```

### weakset

- **Description:** A WeakSet object is a collection of unique objects.

- **Features:**

   - Objects are weakly referenced, allowing for garbage collection.

   - No enumeration methods (forEach, keys, values, entries).

```ts

const weakSet = new WeakSet();
let obj1 = {};
let obj2 = {};

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // true

obj1 = null; // obj1 can be garbage collected
// obj1 will be removed from the WeakSet at some point

console.log(weakSet.has(obj1)); // false

```


### Summary

- **Map:**

  - Stores key-value pairs.
  - Keys can be of any type.
  - Maintains insertion order.
  - Iterable.

- **Set:**

   - Stores unique values of any type.
   - Maintains insertion order.
   - Iterable.

- **WeakMap:**

   - Stores key-value pairs with keys being objects.
   - Keys are weakly referenced.
   - Not iterable.

- **WeakSet:**
  
   - Stores unique objects.
   - Objects are weakly referenced.
   - Not iterable.

Each of these data structures serves different purposes and is suitable for different scenarios depending on the requirements of your application.



## Shallow Copy

A shallow copy creates a new object or array, but inserts references into it to the objects found in the original. In other words, 
it copies the references, not the actual objects. Therefore, if you modify the copied object, you also modify the original one.

### Example of Shallow Copy

```ts

// Original object
const original = { a: 1, b: { c: 2 } };

// Shallow copy using Object.assign()
const shallowCopy = Object.assign({}, original);

// Modifying the shallow copy
shallowCopy.a = 5;
shallowCopy.b.c = 10; // This modifies original.b.c as well

console.log(original);   // { a: 1, b: { c: 10 } }
console.log(shallowCopy); // { a: 5, b: { c: 10 } }

```

In this example, shallowCopy is a new object, but its b property still references the same object as original.b. Therefore, modifying shallowCopy.b.c also modifies original.b.c.


## Deep Copy

A deep copy creates a new object or array and recursively copies all nested objects and arrays found in the original. In other words, 
it creates a fully independent copy of the original data structure. Modifying the copied object does not affect the original one, and vice versa.


```ts

// Original object
const original = { a: 1, b: { c: 2 } };

// Deep copy using JSON.parse(JSON.stringify())
const deepCopy = JSON.parse(JSON.stringify(original));

// Modifying the deep copy
deepCopy.a = 5;
deepCopy.b.c = 10; // This does not modify original.b.c

console.log(original);   // { a: 1, b: { c: 2 } }
console.log(deepCopy);   // { a: 5, b: { c: 10 } }

```

In this example, deepCopy is a completely independent copy of original. Modifying deepCopy.b.c does not affect original.b.c.

### Considerations

- **Performance:** Deep copying can be slower and more memory-intensive, especially for large and deeply nested objects.

- **Circular References:** JSON.stringify() and JSON.parse() do not handle circular references well and will throw an error. For deep copying with 
circular references, you would need a custom deep copy function that handles such cases.

### Use Cases

- **Shallow Copy:** Useful when you want to quickly create a copy of an object or array where nested objects or arrays can be shared between the original and the copy.

- **Deep Copy:** Necessary when you need to modify a copy without affecting the original, or when dealing with complex data structures that should remain independent of each other.

### Summary

- **Shallow Copy:** Copies references to nested objects; modifications to nested objects affect both the original and the copy.

- **Deep Copy:** Creates independent copies of all nested objects and arrays; modifications to copied data do not affect the original.



## localStorage and sessionStorage

Both web storage mechanisms provided by modern web browsers to store key-value pairs locally within the user's browser. They are part of the 
Web Storage API and offer similar functionality but differ in terms of persistence and scope.

### localStorage

- **Persistence:** Data persists even after the browser window is closed and reopened. It is stored indefinitely, unless explicitly deleted by the user or the application.

- **Scope:** Data is scoped to the origin (protocol, host, and port) of the page. This means data stored by one website will not be accessible to another website with a different origin.

- **Storage Limit:** Typically, browsers allow storage of up to 5MB of data in localStorage, but this can vary slightly between browsers.

```ts
// Store data in localStorage
localStorage.setItem('key', 'value');

// Retrieve data from localStorage
const value = localStorage.getItem('key');

// Remove data from localStorage
localStorage.removeItem('key');

```

### sessionStorage

- **Persistence:** Data persists only for the duration of the page session. When the browser tab or window is closed, the sessionStorage data is cleared.

- **Scope:** Similar to localStorage, sessionStorage data is scoped to the origin (protocol, host, and port) of the page.

- **Storage Limit:** Like localStorage, sessionStorage typically has a storage limit of up to 5MB, but this can vary between browsers.

```ts

// Store data in sessionStorage
sessionStorage.setItem('key', 'value');

// Retrieve data from sessionStorage
const value = sessionStorage.getItem('key');

// Remove data from sessionStorage
sessionStorage.removeItem('key');

```

#### Choosing Between localStorage and sessionStorage

- **Persistence Requirements:** Use localStorage when you need data to persist across browser sessions. Use sessionStorage when data should be available
   only for the current session.

- **Security Considerations:** Both localStorage and sessionStorage are limited to the same-origin policy, meaning data is accessible only within the same origin.
   They are not suitable for storing sensitive information such as passwords or tokens due to potential XSS (Cross-Site Scripting) attacks.

- **Usage Scenarios:**

   - localStorage is commonly used for storing preferences, settings, or user-specific data that should persist between visits to the website.
   - sessionStorage is often used for storing temporary data or state information during a single session, such as shopping cart items or form data that needs to be remembered temporarily.
