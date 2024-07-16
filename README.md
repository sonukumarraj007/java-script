
- #### [Java Script Basic](/JavaScriptBasic.md)
- #### [Java Script Notes](/JavaScriptNotes.md)
- #### [Java Script Interview Ask Question](/JavaScriptInterviewAskQuestion.md)
- #### [Java Script Interview Ask Program](/JavaScriptInterviewAskProgram.md)

## Beginner

- let vs var vs const
- Difference between function declaration & function expression
- Primitive data type
- Coercion
- Passing by Value vs. Reference
- Timer function
- Truthy and Falsy values

## Advanced

- Spread operator
- Rest syntax
- Destructuring
- Higher-Order function
- Closures
- call() , apply() and bind()
- hoisting : hoist a flash i.e move it to the top
- Currying function
- Event Bubbling and Capturing
- Debugging
- Generator Function
- Local storage vs Session storage
- Asynchronous js
- JavaScript Design Patterns
- Iterators and generators
- throttle vs debounce
- object creation patterns tutorial - factory , constructor pattern, prototype pattern
- JavaScript ES2020
- Tricky JavaScript interview questions and answers

## Contents

- #### [Variables and Data Types](/1_variables_and_data_types/variablesDataTypes.md)
- #### [Operators](/2_Operators/Operators.md)
- #### [Logic and Control Flow](/3_Logic_and_Control_flow/LogicAndControlFlow.md)
- #### [Functions](/4_Functions/Functions.md)
- #### [Hoisting and Closures](/5_Hoisting_and_Closure/HoistingAndClosure.md)
- #### [Strings in Detail](/6_Strings_in_detail/strings.md)
- #### [Arrays in Detail](/7_Arrays_in_detail/Arrays.md)
- #### [Objects in Detail](/8_Objects_in_detail/objects.md)
- #### [Value vs Reference](/9_Value_vs_Reference/value_vs_reference.md)
- #### [DOM](/10_DOM/dom.md)
- #### [Classes, this and new keyword](/11_Classes_this_and_new_keyword/11.md)
- #### [Asynchronous Concepts](/12_Asynchronous_Concepts/12.md)

## Basic Programs:

* [Basic operation using callback](#basic-operation-using-callback)
* [Area of a circle](#area-of-a-circle)
* [Area of a square](#area-of-a-square)
* [Area of a triangle](#area-of-a-triangle)
* [Celsius to fahrenheit](#celsius-to-fahrenheit)
* [Leap year](#leap-year)
* [Even or Odd number](#even-or-odd-number)
* [Swap two number](#swap-two-number)
* [Generator random number between given min and max value](#generator-random-number-between-given-min-and-max-value)
* [Factorial](#factorial)
* [Fibonacci series](#fibonacci-series)
* [Prime number](#prime-number)
* [Palindrome number](#palindrome-number)
* [Armstrong number](#armstrong-number)
* [Strong number](#strong-number)
* [Spy number](#spy-number)
* [Reverse number](#reverse-number)
* [Conunt the digit in number](#conunt-the-digit-in-number)
* [Sum of digit](#sum-of-digit)

## Array Programs:

* [Sum of array](#sum-of-array)
* [Reverse the array](#reverse-the-array)
* [Largest number in an array / Smallest number in an array](#largest-number-in-an-array)
* [Find 2nd largest number in an array / 2nd smallest number in an array](#find-2nd-largest-number-in-an-array)
* [Remove duplicate element in an array](#remove-duplicate-element-in-an-array)
* [Print odd and even number from an array](#print-odd-and-even-number-from-an-array)
* [Add two matrices](#add-two-matrices)
* [Multiply two matrices](#multiply-two-matrices)
* [Transpose matrix](#transpose-matrix)
* [How to find the missing number in integer array of 1 to 100](#how-to-find-the-missing-number-in-integer-array-of-1-to-100)

## String Programs:

* [Reverse the words like](#reverse-the-words-like)
* [How to check string is palindrome](#how-to-check-string-is-palindrome)
* [How to remove duplicate characters from string](#how-to-remove-duplicate-characters-from-string)
* [How to check if two strings are anagrams of each other](#how-to-check-if-two-strings-are-anagrams-of-each-other)
* [How to find duplicate characters in a string](#how-to-find-duplicate-characters-in-a-string)
* [How to you check two strings are equal](#how-to-you-check-two-strings-are-equal)
* [To sort an array of strings based on their lengths](#to-sort-an-array-of-strings-based-on-their-lengths)
* [How to remove a given characters from string](#how-to-remove-a-given-characters-from-string)
* [How to return highest occurring character in a string](#how-to-return-highest-occurring-character-in-a-string)
* [How to check a string contains another string](#how-to-check-a-string-contains-another-string)
* [How to count number of vowels and consonants in a string](#how-to-count-number-of-vowels-and-consonants-in-a-string)
* [Print first non repeated character from string](#print-first-non-repeated-character-from-string)

## Sorting Programs:

* [Bubble sort](#bubble-sort)
* [Selection sort](#selection-sort)
* [Insertion sort](#insertion-sort)
* [Quick sort](#quick-sort)
* [Linear search](#linear-search)
* [Binary search](#binary-search)

## Pattern Program

<ol>
			<li>*<br>**<br>***<br>****</li>
</ol>

## Basic operation using callback

```ts

function add(num1, num2){
  return num1+num2;
}

function subtract(num1, num2){
  return num1-num2;
}

function multiply(num1, num2){
  return num1*num2;
}

function division(num1, num2){
  return num1/num2;
}

function mod(num1, num2){
  return num1%num2;
}

function power(num1, num2){
  return num1**num2;
}

function calculate(num1, num2, callback){
  return callback(num1, num2);
}

console.log(calculate(2,4, power));

Output: 16

```

## Area of a circle

Area = π × radius x radius

```ts

function areaOfCircle(radius) {
    return Math.PI * radius ** 2;
}

console.log(areaOfCircle(5));

Output: 78.53981633974483

```

## Area of a square

Area = side x side

```ts

function areaOfSquare(side) {
    return side ** 2;
}

console.log(areaOfSquare(5));

Output: 25

```

## Area of a triangle

To calculate the area of a triangle, you can use Heron's formula, given the lengths of its three sides, denoted as 
𝑎, 𝑏, and 𝑐 where s is the semi-perimeter of the triangle:

s = (a + b + c) / 2 ;

Area = sqrt (s × (s−a) × (s−b) × (s−c) );

```ts

function areaOfTriangle(a, b, c) {
    // Calculate the semi-perimeter
    const s = (a + b + c) / 2;
    
    // Calculate the area using Heron's formula
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    
    return area;
}

const sideA = 3;
const sideB = 4;
const sideC = 5;

console.log(areaOfTriangle(sideA, sideB, sideC));

Output: 6

```

## Celsius to fahrenheit

To convert Celsius to Fahrenhei:

Fahrenheit = (Celsius × 5/9) + 32

```ts

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

const celsiusTemperature = 38;
const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);

console.log(celsiusTemperature + "°C is equal to " + fahrenheitTemperature + "°F");

Output: "38°C is equal to 100.4°F"

```

## Leap year

```ts

function isLeapYear(year) {
    // Leap years are evenly divisible by 4
    // Unless they are also divisible by 100, but not 400
  
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(2024));

Output: true

```

## Even or odd number

```ts

function evenOdd(num){
  if(num===0){
    return "It's Zero."
  }
   else if(num!==0 && num % 2 === 0 ){
    return `${num} is Even No.`;
  }
   else{
    return `${num} is Odd No.`;
  }
}

console.log(evenOdd(4));

```

## Swap two number

```ts

let a = 10;
let b = 20;

let temp = a;
a = b;
b = temp;

console.log("a : " +a);
console.log("b : " +b);

Output: "a : 20"
        "b : 10"

```

Without third variable:

```ts

let a = 10;
let b = 20;

a = a + b;
b = a - b;
a = a - b;

console.log("a : " +a);
console.log("b : " +b);

Output: "a : 20"
        "b : 10"

```

Using destructuring assignment:

```ts

let a = 10;
let b = 20;

[a, b] = [b, a];

console.log("a : " +a);
console.log("b : " +b);

Output: "a : 20"
        "b : 10"

```

## Generator random number between given min and max value

```ts

function randomNumber(min, max) {
    const random = Math.random();
    const scaled = random * (max - min) + min;
  
    return parseInt(scaled);
}

console.log(randomNumber(1,5));

```

## Factorial

```ts

function factorialOf(num){
  let result = 1;

  while(num >= 1){
   result = result * num;
   num--;
  }

  return result;
}

console.log(factorialOf(6));

Output: 720

```

Recursive way:

```ts

function factorialOf(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorialOf(n - 1);
}

console.log(factorialOf(6));

Output: 720

```

## Fibonacci series:

```ts

function fibonacciSeries(length) {
    const series = [0, 1]; 
    // Initialize the series with the first two Fibonacci numbers
    // Generate subsequent Fibonacci numbers and add them to the series
    for (let i = 2; i < length; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series;
}

console.log(fibonacciSeries(5));

Output: [0, 1, 1, 2, 3]

```

With recursion : 

```ts

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

function fibonacciSeries(length) {
    const series = [];
    for (let i = 0; i < length; i++) {
        series.push(fibonacci(i));
    }
    return series;
}

console.log(fibonacciSeries(5));

```

## Prime number

```ts

function isPrimeNumber(num) {
    
    // Check if the number is less than 2 (not a prime number)
    if (num < 2) {
        return false;
    }
     
    // Iterate from 2 to half of the number
    for (let i = 2; i <= num / 2; i++) {
        // If the number is divisible by any integer between 2 and half of itself, it's not prime
        if (num % i === 0) {
            return false;
        }
    }
    
    // If the number is not divisible by any integer between 2 and half of itself, it's prime
    return true;
}

console.log(isPrimeNumber(18));

Output: true

```

```ts

function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrimeNumber(18));

Output: true

```

Prime numbers between 1 to n: 

```ts

function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function findPrimesInRange(n) {
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

console.log(findPrimesInRange(50));

Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]

```


## Palindrome number

```ts

function isPalindrome(num) {
    const originalString = num.toString();
    const reversedString = originalString.split('').reverse().join('');
  
    return originalString === reversedString;
}

console.log(isPalindrome(12321));

Outout: true

```

## Armstrong number

An Armstrong number (also known as narcissistic number, plenary number, or plus perfect number) is a number that is equal to the sum of its own digits each raised to the power of the number of digits. For example, 153 is an Armstrong number because 

```ts

1**3 + 5**3 + 3**3 = 1 + 125 + 27 = 153

```

```ts

function isArmstrongNumber(num) {
    const numString = num.toString();
    const numDigits = numString.length;
    let sum = 0;
    
    for (let digit of numString) {
        sum += Math.pow(parseInt(digit), numDigits);
    }
    
    return sum === num;
}

console.log( isArmstrongNumber(153));

Output: true

```

## Strong number

A strong number (also known as a factorial sum number or Krishnamurthy number) is a number whose sum of the factorial of its digits is equal to the number itself. For example, 145 is a strong number because

```ts

1! + 4! + 5! = 1 + 24 + 120 = 145

```

```ts

function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}

function isStrongNumber(number) {
    const numString = number.toString();
    let sum = 0;
    
    for (let digit of numString) {
        sum += factorial(parseInt(digit));
    }
    
    return sum === number;
}

console.log(isStrongNumber(145));

Output: true

```

## Spy number

A Spy Number is a number where the sum of its digits equals the product of its digits. In other words, if we multiply all the digits of the number and add them, the result is the same as the number itself.

ex: 1, 2, 3, 4, 5, 6, 7, 8, 9, 22, 123, 132, 213, 231, 312, 321, 1124, 1142, 1214, 1241, 1412, 1421, 2114, 2141, 2411, 4112, 4121, 4211....

```ts

function isSpyNumber(num) {
    const digits = num.toString().split('').map(Number);
    const sum = digits.reduce((acc, curr) => acc + curr, 0);
    const product = digits.reduce((acc, curr) => acc * curr, 1);
    return sum === product;
}

console.log(isSpyNumber(1124));

```

## Reverse number 

```ts

function reverseNumber(number) {

    const reversedString = number.toString().split('').reverse().join('');

    return parseInt(reversedString, 10);
}

console.log(reverseNumber(123));

Output: 321

```

## Conunt the digit in number

```ts

function conuntDigitInNumber(number) {
  
  return number.toString().split('').length;
 
}

console.log(conuntDigitInNumber(54));

Output : 2

```

## Sum of digit

```ts

function sumOfDigits(number) {
    let sum = 0;
 
    const digits = number.toString().split('');
   
    digits.forEach((el)=> {
        sum = sum + parseInt(el, 10);
    })
    
    return sum;
}

console.log(sumOfDigits(54));

Output : 9

```

## Sum of array

```ts
const arr = [3,6,2,1,8,6];

```

```ts

function sumOfArray(arr){
  return arr.reduce((acc,curr) => acc + curr, 0)
}

console.log(sumOfArray(arr));

Output : 13

```

```ts

const  sumOfArray = (arr) => arr.reduce((acc,curr) => acc + curr, 0);

console.log(sumOfArray(arr));

Output : 13

```

```ts

const  sumOfArray = arr => arr.reduce((acc,curr) => acc + curr, 0);

console.log(sumOfArray(arr));

Output : 13

```

```ts

let sumOfArray = 0;
 
arr.forEach((el)=> sumOfArray = sumOfArray + el);

console.log(sumOfArray);

Output : 13

```


## Reverse the array

```ts
let array = [1, 2, 3, 4, 5];

console.log(array.reverse());

Output : [5, 4, 3, 2, 1]

```

## Largest number in an array

```ts

let numbers = [10, 5, 8, 22, 18];

let maxNumber = Math.max(...numbers);
console.log(maxNumber);

Output: 22

```

```ts

let maxNumber = numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);

```

```ts

let maxNumber = numbers[0];

numbers.forEach(number => {
  if (number > maxNumber) {
    maxNumber = number;
  }
});

console.log(maxNumber);

```

## Find 2nd largest number in an array

```ts

let numbers = [10, 5, 8, 22, 18];

const sortedNumber = numbers.sort((a,b)=> b-a)

console.log(sortedNumber[1]);

Output: 18

```

## Remove duplicate element in an array

```ts

let numbers = [1, 2, 3, 4, 4, 5, 6, 6, 7];

let uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);

``

```ts

let numbers = [1, 2, 3, 4, 4, 5, 6, 6, 7];

let uniqueNumbers = numbers.filter((value, index, self) => self.indexOf(value) === index);

console.log(uniqueNumbers);

Output: [1, 2, 3, 4, 5, 6, 7]

```

```ts

let numbers = [1, 2, 3, 4, 4, 5, 6, 6, 7];

let uniqueNumbers = numbers.reduce((acc, value) => {
  if (!acc.includes(value)) {
    acc.push(value);
  }
  return acc;
}, []);

console.log(uniqueNumbers);

Output: [1, 2, 3, 4, 5, 6, 7]

```

## Print odd and even number from an array

```ts

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddNumbers = [];
let evenNumbers = [];

numbers.forEach(number => {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  } else {
    oddNumbers.push(number);
  }
});

console.log("Odd Numbers:", oddNumbers); 
console.log("Even Numbers:", evenNumbers);

Output: Odd Numbers: [1, 3, 5, 7, 9]
Output: Even Numbers: [2, 4, 6, 8, 10]

```

```ts

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddNumbers = numbers.filter(number => number % 2 !== 0);
let evenNumbers = numbers.filter(number => number % 2 === 0);

```

```ts

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let { oddNumbers, evenNumbers } = numbers.reduce((acc, number) => {
  if (number % 2 === 0) {
    acc.evenNumbers.push(number);
  } else {
    acc.oddNumbers.push(number);
  }
  return acc;
}, { oddNumbers: [], evenNumbers: [] });

```

## Add two matrices

```ts
function addMatrices(matrixA, matrixB) {
  // Ensure matrices have the same dimensions
  if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
    throw new Error('Matrices must have the same dimensions to be added.');
  }

  // Initialize the result matrix
  let resultMatrix = [];
  
  for (let i = 0; i < matrixA.length; i++) {
    resultMatrix[i] = [];
    for (let j = 0; j < matrixA[i].length; j++) {
      // Add corresponding elements
      resultMatrix[i][j] = matrixA[i][j] + matrixB[i][j];
    }
  }

  return resultMatrix;
}

// Example usage
let matrixA = [
  [1, 2, 3],
  [4, 5, 6]
];

let matrixB = [
  [7, 8, 9],
  [10, 11, 12]
];

let result = addMatrices(matrixA, matrixB);

console.log(result);

// Output: 
// [
//   [8, 10, 12],
//   [14, 16, 18]
// ]

```

## Multiply two matrices

```ts

function multiplyMatrices(matrixA, matrixB) {
  // Check dimensions
  if (matrixA[0].length !== matrixB.length) {
    throw new Error('Matrices cannot be multiplied: columns of matrix A must be equal to rows of matrix B.');
  }

  let resultMatrix = [];
  for (let i = 0; i < matrixA.length; i++) {
    resultMatrix[i] = [];
    for (let j = 0; j < matrixB[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < matrixA[0].length; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      resultMatrix[i][j] = sum;
    }
  }

  return resultMatrix;
}

// Example usage
let matrixA = [
  [1, 2, 3],
  [4, 5, 6]
];

let matrixB = [
  [7, 8],
  [9, 10],
  [11, 12]
];

let result = multiplyMatrices(matrixA, matrixB);

console.log(result);
// Output: 
// [
//   [58, 64],
//   [139, 154]
// ]

```

## Transpose matrix

```ts

function transposeMatrix(matrix) {
  let transposedMatrix = [];

  for (let i = 0; i < matrix[0].length; i++) {
    transposedMatrix[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      transposedMatrix[i][j] = matrix[j][i];
    }
  }

  return transposedMatrix;
}

// Example usage
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let transposed = transposeMatrix(matrix);

console.log(transposed);

// Output:
// [
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9]
// ]

```

## How to find the missing number in integer array of 1 to 100

The expected sum of numbers from 1 to 100 can be calculated using the formula for the sum of an arithmetic series: 

n×(n+1) / 2 , where n is the last number in the series (in this case, 100).

```ts

function findMissingNumber(arr) {
  // Calculate the sum of numbers from 1 to 100
  let expectedSum = (100 * 101) / 2; // Sum of an arithmetic series formula: n*(n+1)/2

  // Calculate the sum of numbers in the array
  let actualSum = arr.reduce((sum, num) => sum + num, 0);

  // Find the missing number
  let missingNumber = expectedSum - actualSum;

  return missingNumber;
}

// Example usage

let numbersArray = [1, 2, 3, /*...*/, 99, 100]; // Array containing numbers from 1 to 100 with one missing number

let missingNumber = findMissingNumber(numbersArray);

console.log("Missing number:", missingNumber);

```
## typeof

```ts

console.log(typeof "str");

Output: "string"


```

## Reverse the words like

"I am Sonu Kumar"to "Kumar Sonu am I"

```ts

const str = "I am Sonu Kumar"

const result = str.split(" ").reverse().join(" ");

console.log(result);

Output: "Kumar Sonu am I"

```

## How to check string is palindrome

```ts

function isPalindrome(str) {
  let reversedStr = str.toLowerCase().split('').reverse().join('');
  
  return str === reversedStr;
}

console.log(isPalindrome('aba'));

```


## How to remove duplicate characters from string

```ts

function removeDuplicates(str) {
  let result = '';

  for (let char of str) {
    if (!result.includes(char)) {
      result += char;
    }
  }

  return result;
}

// Example usage
let inputString = "hello world";
let stringWithoutDuplicates = removeDuplicates(inputString);

console.log(stringWithoutDuplicates); // Output: "helo wrd"

```

## How to check if two strings are anagrams of each other

```ts

function areAnagrams(str1, str2) {
  // Remove non-alphanumeric characters and convert to lowercase
  str1 = str1.replace(/[^a-z0-9]/g, '').toLowerCase();
  str2 = str2.replace(/[^a-z0-9]/g, '').toLowerCase();

  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  return str1 === str2;
}

console.log(areAnagrams("listen", "silent")); // Output: true

console.log(areAnagrams("hello", "world")); // Output: false

```

## How to find duplicate characters in a string

```ts

function findDuplicates(str) {
  let duplicates = [];
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.indexOf(char) !== i && !duplicates.includes(char)) {
      duplicates.push(char);
    }
  }
  
  return duplicates;
}

// Example usage
let inputString = "hello world";
let duplicateChars = findDuplicates(inputString);

console.log("Duplicate characters:", duplicateChars); // Output: ["l", "o"]

```

## How to you check two strings are equal

```ts

function areStringsEqual(string1, string2, caseInsensitive = false) {
    if (caseInsensitive) {
        return string1.toLowerCase() === string2.toLowerCase();
    } else {
        return string1 === string2;
    }
}

let str1 = "Hello";
let str2 = "hello";

console.log(areStringsEqual(str1, str2)); // Output: false
console.log(areStringsEqual(str1, str2, true)); // Output: true

```

## To sort an array of strings based on their lengths

```ts

function sortStringsByLength(strings) {
    return strings.sort((a, b) => a.length - b.length);
}

let stringArray = ["apple", "banana", "cherry", "date"];
let sortedArray = sortStringsByLength(stringArray);

console.log(sortedArray); // Output: ["date", "apple", "banana", "cherry"]

```

## How to remove a given characters from string

```ts

function removeCharacters(str, charsToRemove) {
    let result = str.split('').filter(char => !charsToRemove.includes(char)).join('');
    return result;
}

let originalString = "hello world";
let charsToRemove = "lo";

let result = removeCharacters(originalString, charsToRemove);
console.log(result); // Output: "he wrd"

```

```ts

function removeCharacters(str, charsToRemove) {
    let result = '';
    for (let char of str) {
        if (!charsToRemove.includes(char)) {
            result += char;
        }
    }
    return result;
}

let originalString = "hello world";
let charsToRemove = "lo";

let result = removeCharacters(originalString, charsToRemove);
console.log(result); // Output: "he wrd"

```

## How to return highest occurring character in a string

```ts

function highestOccurringCharacter(str) {
    if (str.length === 0) return null;

    let charCount = {};
    let maxCount = 0;
    let maxChar = '';

    // Iterate over the string and count occurrences of each character
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }

        // Update maxCount and maxChar if the current character has a higher count
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            maxChar = char;
        }
    }

    return maxChar;
}

let str = "hello world";
console.log(highestOccurringCharacter(str)); // Output: "l"

str = "aabbbccde";
console.log(highestOccurringCharacter(str)); // Output: "b"

```

## How to check a string contains another string

```ts

function containsSubstring(str, substr) {
    return str.includes(substr);
}

let string = "hello world";
let substring = "world";
console.log(containsSubstring(string, substring)); // Output: true

substring = "world!";
console.log(containsSubstring(string, substring)); // Output: false

```

```ts

function containsSubstring(str, substr) {
    return str.indexOf(substr) !== -1;
}

```

## How to count number of vowels and consonants in a string

```ts
function countVowelsAndConsonants(str) {
    // Convert the string to lowercase to simplify comparison
    str = str.toLowerCase();
    
    // Define a set of vowels
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
    
    // Use reduce to count vowels and consonants
    const counts = str.split('').reduce((acc, char) => {
        if (/[a-z]/.test(char)) {
            if (vowelSet.has(char)) {
                acc.vowels++;
            } else {
                acc.consonants++;
            }
        }
        return acc;
    }, { vowels: 0, consonants: 0 });

    return counts;
}

// Example usage:
let str = "Hello World!";
let counts = countVowelsAndConsonants(str);
console.log("Vowels:", counts.vowels); // Output: 3
console.log("Consonants:", counts.consonants); // Output: 7

```

## Print first non repeated character from string

```ts

function firstNonRepeatedCharacter(str) {
  
    const charCount = {};
    
    // Iterate through the string and update character counts
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    return null;
}

let str = "hello world";
console.log(firstNonRepeatedCharacter(str)); // Output: "h"

str = "hello";
console.log(firstNonRepeatedCharacter(str)); // Output: "h"

```

```ts

function bubbleSort(arr) {
    const n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements if they are in the wrong order
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

let array = [5, 3, 8, 1, 4];
console.log("Original array:", array);
console.log("Sorted array:", bubbleSort(array));

```

## Bubble sort

```ts

function bubbleSort(arr) {
    const n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements if they are in the wrong order
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

let array = [5, 3, 8, 1, 4];

console.log("Original array:", array);
console.log("Sorted array:", bubbleSort(array));

```

## Selection sort

```ts

function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Find the index of the minimum element in the unsorted part of the array
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the minimum element with the first element of the unsorted part
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

let array = [5, 3, 8, 1, 4];
console.log("Original array:", array);
console.log("Sorted array:", selectionSort(array));

```

## Insertion sort

```ts

function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }

    return arr;
}

let array = [5, 3, 8, 1, 4];
console.log("Original array:", array);
console.log("Sorted array:", insertionSort(array));

```

## Quick sort

```ts

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: array with 0 or 1 element is already sorted
    }

    // Select a pivot element
    const pivot = arr[Math.floor(Math.random() * arr.length)];
    
    // Partition the array into two sub-arrays around the pivot
    const left = [];
    const right = [];
    const equal = [];
    for (let element of arr) {
        if (element < pivot) {
            left.push(element);
        } else if (element > pivot) {
            right.push(element);
        } else {
            equal.push(element);
        }
    }
    
    // Recursively sort the sub-arrays
    return [...quickSort(left), ...equal, ...quickSort(right)];
}

let array = [5, 3, 8, 1, 4];
console.log("Original array:", array);
console.log("Sorted array:", quickSort(array));

```

## Linear search

```ts

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if the target element is found
        }
    }
    return -1; // Return -1 if the target element is not found in the array
}

let array = [5, 3, 8, 1, 4];
let target = 8;

console.log("Array:", array);
console.log("Target:", target);
console.log("Index of target:", linearSearch(array, target)); // Output: 2

```

## Binary search

```ts

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Check if the target is equal to the middle element
        if (arr[mid] === target) {
            return mid; // Return the index if target is found
        }

        // If target is greater than the middle element, ignore the left half
        if (arr[mid] < target) {
            left = mid + 1;
        } 
        // If target is less than the middle element, ignore the right half
        else {
            right = mid - 1;
        }
    }

    return -1; // Return -1 if target is not found in the array
}

let array = [1, 3, 4, 5, 8];
let target = 8;

console.log("Array:", array);
console.log("Target:", target);
console.log("Index of target:", binarySearch(array, target)); // Output: 4

```


```ts

function printTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += "*";
        }
  
        console.log(row);
    }
}

printTriangle(4);

```


## Interview Ask Program

#### Calculate total sum of salary

```ts

let company = {
	hr: [{
			name: 'john',
			salary: 100,
		},
		{
			name: 'alice',
			salary: 200,
		},
	],

	development: {
		ui: [{
				name: 'tom',
				salary: 300,
			},
			{
				name: 'mark',
				salary: 200,
			},
		],

		backend: [{
			name: 'clark',
			salary: 400,
		}, ],
	},
};

```

```ts

let total_salary = 0;

company.hr.forEach(item => {
	total_salary += item.salary
})

company.development.backend.forEach(item => {
	total_salary += item.salary
})

company.development.ui.forEach(item => {
	total_salary += item.salary
})

console.log(total_salary);

```

#### Store all imgUrl in one array

```ts

let data = {
	postdata: [{
			name: 'name1',
			imgUrl: 'https://img1.png',
		},
		{
			name: 'name2',
			imgUrl: 'https://img2.png',
			children: [{
					name: 'name21',
					imgUrl: 'https://img21.png',
				},
				{
					name: 'name22',
					imgUrl: 'https://img22.png',
				},
				{
					name: 'name23',
					imgUrl: 'https://img23.png',
				},
			],
		},
		{
			name: 'name3',
			imgUrl: 'https://img3.png',
		},
		{
			name: 'name4',
			imgUrl: 'https://img4.png',
			children: [{
					name: 'name41',
					imgUrl: 'https://img41.png',
				},
				{
					name: 'name42',
					imgUrl: 'https://img42.png',
					children: [{
							name: 'name421',
							imgUrl: 'https://img421.png',
						},
						{
							name: 'name422',
							imgUrl: 'https://img422.png',
						},
					],
				},
				{
					name: 'name43',
					imgUrl: 'https://img43.png',
				},
			],
		},
		{
			name: 'name5',
			imgUrl: 'https://img5.png',
		},
		{
			name: 'name6',
			imgUrl: 'https://img6.png',
		},
		{
			name: 'name7',
			imgUrl: 'https://img7.png',
		},
	],
};

```

```ts

let allImgeUrl = [];

data.postdata.forEach(item => {
	allImgeUrl.push(item.imgUrl);

	if (item.children) {
		item.children.forEach(item => {
			allImgeUrl.push(item.imgUrl);
		})
	}

})

console.log(allImgeUrl);

```

#### Count transaction with customer id and convert into given format [{cust : x , trans : [x,y]}]

```ts
var trx = [{
    transaction: 1,
    customer: 100,
    amount: 100
},
{
    transaction: 2,
    customer: 105,
    amount: 100
},
{
    transaction: 3,
    customer: 100,
    amount: 50
},
{
    transaction: 4,
    customer: 45,
    amount: 750
},
{
    transaction: 5,
    customer: 45,
    amount: 750
}
];

```

```ts

for(let i=0; i<trx.length; i++){
	for(let j=1; j<i; j++){
		if(trx[i].customer == trx[j].customer){
    			console.log(j, " j : ", trx[j])
			}
	}
}

```

#### Convert into object of array ['Sonu', 'Vikash','Anshu','Udit', 'Sandeep'] like { 'name': value }

```ts

let name_list = ['Sonu', 'Vikash','Rahul','Anshu','Udit', 'Sandeep']
let obj1 = [];

name_list.forEach(item=>{
	obj1.push({name: item})
})

```

#### Remove duplicate elememt and convert into object of array

```ts

// convert into object of array
// {
// 	'name': value
// }

let name_list = ['Sonu', 'Vikash','Anshu','Udit', 'Sandeep', 'Sonu', 'Anshu'];
let obj = [];
let tmp= new Set(name_list);


tmp.forEach(item=>{
	obj.push({name: item})
})

console.log(obj);

```

#### Convert into object of array { 'label': 'Sonu', 'value': 'Sonu' }

```ts

// convert into object of array
// {
// 	'label': 'Sonu', 'value': 'Sonu'
// }

let name_list = ['Sonu', 'Rahul', 'Vikash','Anshu','Udit', 'Sandeep']
let obj = [];

name_list.forEach(item=>{
	obj.push({label: item, value: item})
})
console.log(obj);

```

#### Get all name value and convert into object of array

```ts

// Get all name value and convert into object of array
// {
// 	'label': 'Sonu', 'value': 'Sonu'
// }

let name_list = [
	{
		'id': 1,
		'name': 'Sonu'
	},
	{
		'id': 2,
		'name': 'Anshu'
	},
	{
		'id': 3,
		'name': 'Vikash'
	},
	{
		'id': 4,
		'name': 'Rahul'
	},
	
]

let obj = [];

name_list.forEach(item=>{
	obj.push({label: item.name, value: item.name})
})

console.log(obj);

```

#### Merge to object

```ts

// Use a spread operator ( ...)
// Use the Object.assign() method

let obj1 = {
	name: 'Sonu',
	age: 26,
  };
  
  let obj2 = {
	hobby: 'Criket',
	mobil: 5687654,
	name: 'Sonu kumar',
  };
  
  console.log({ ...obj1, ...obj2 });
   
```

```ts

console.log(Object.assign(obj1, obj2));

```

#### Add some property to objrct

```ts

let obj ={
	'name': 'Sonu Kumar',
	'age': 25
}

obj.roll_no = "12345"
console.log(obj);

output: {
  age: 25,
  name: "Sonu Kumar",
  roll_no: "12345"
}

```

#### Delete some property to objrct

```ts

let obj ={
	'name': 'Kumar',
	'age': 25,
	'roll_no': 12345
}

delete obj.name;
console.log(obj);

output: {
  age: 25,
  roll_no: 12345
}

```

#### String print '5'-5

```ts

console.log('5'-5);

output: 0

```

#### Transform object of array

```ts

let kvArray = [{key: 1, value: 10},
               {key: 2, value: 20},
               {key: 3, value: 30}]

Output : // [{"1":10},{"2":20},{"3":30}]

Solution : let result = kvArray.map(item => ({ [item.key]: item.value }));

```

#### remove blank, null, nan, undefined object from array and count the valid and invalid objects 

```ts

let arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: undefined }
]

```

```ts

let filteredArray = arr.filter(item => Number.isFinite(item.id));

console.log(filteredArray);

Output :
[{ id: 15 },
 { id: -1 },
 { id: 0 },
 { id: 3 },
 { id: 12.2 }
]

```

```ts

// count the valid and invalid objects

let counts = arr.reduce((result, item) => {
  if (Number.isFinite(item.id)) {
    result.validCount++;
  } else {
    result.invalidCount++;
  }
  return result;
}, { validCount: 0, invalidCount: 0 });

console.log("Valid Objects:", counts.validCount);
console.log("Invalid Objects:", counts.invalidCount);

```

#### What will be output

```ts

setTimeout(() => {
  console.log('test');
  setTimeout(() => {
	console.log('dummy');
	}, 100);
}, 10);

console.log('testing');

Output :

"testing"
"test"
"dummy"

```

#### What will be output

```ts

setTimeout(() => {
  console.log('test');
  setTimeout(() => {
	console.log('dummy');
	}, 10);
}, 1000);

console.log('testing');

Output :

"testing"
"test"
"dummy"

```

#### What will be output

```ts

var x = 21;
var xyz = function () {
     console.log(x);
     var x = 20;
};
xyz();

Output : undefined

```

#### What will be output

```js

var x = 21;
var xyz = function () {
     console.log(this.x);
     var x = 20;
};
xyz();

Output : 21

```

#### What will be output

```ts

var x = 21;
var xyz = function () {
     var x = 20;
     console.log(x);
};
xyz();

Output : 20

```

#### What will be output

```ts

var x = 21;
var xyz = function () {
     var x = 20;
     console.log(this.x);
};
xyz();

Output : 21

```

```ts

## Java Script Interview Question

<ol>
			<li>var, let, const</li>
			<li>undefined, null</li>
			<li> Hoisting <br>
				soln--> https://scotch.io/tutorials/understanding-hoisting-in-javascript</li>
			<li>global object- window, this</li>
			<li>different way to create object and what is the diffenece between all of them.
				<br>
				soln-->> https://coderwall.com/p/p5cf5w/different-ways-of-creating-an-object-in-javascript
			</li>
			<li>copying and cloning and object assign</li>
			<li>constructor, opetator"new"</li>
			<li>map, set, weakmap, and weakset</li>
			<li>recursion and stack</li>
			<li>what data structure is used in recursion</li>
			<li>call/apply/bind</li>
			<li>rest parameters, spread operator, 'arguments' variable</li>
   
			<li>closure, lexical environment
				<br>
				closure -->> https://scotch.io/tutorials/understanding-javascript-closures-a-practical-approach
				<br>
				Lexical Environment -->> https://scotch.io/turorials/understanding-scope-in-javascript
			</li>
			<li>setTimeout, setInterval, Canceling with clearTimeout, recusive setTimeout</li>
			<li>Currying</li>
			<li>Class, inheritance, super, Overriding a method, overriding constructor</li>
			<li>prototypes, methods for prototypes <br>
				soln-->> http://www.javascripttutorial.net/javascript-prototype/</li>
			<li> Property flags and descriptors</li>
			<li>Prototypal inheritance, this <br>
				soln-->> http://www.javascriptturorial.net/javascript-prototypal-inheritance/</li>
			<li> Error handling, try, catch, finally</li>
			<li>Event delegation</li>
			<li>Bubbling and capturing</li>
			<li>callbacks, Callback in callback</li>
			<li>Promise, Promises chaining, Returning promises</li>
		</ol>



```



