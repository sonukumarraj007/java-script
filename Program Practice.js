/* Program Practice */

// 1. Even Odd
// 2. Factorial
// 3. Fibonacci Series
// 4. Prime Number
// 5. Sum of digit
// 6. Count no. of digit
// 7. Armstrong Number

// array
// 1. Max
// 2. Min
// 3. sum of array
// 4. reverse
// 5. count duplicate array element and print

// 1. Even Odd
function findEvenOdd(number) {
  if (number === 0) {
    return "Ii's " + number;
  } else if (number % 2 === 0) {
    return number + " Is Even Number";
  } else {
    return number + " Is Odd Number";
  }
}

let result1 = findEvenOdd(5);
console.log(result1);
let result2 = findEvenOdd(6);
console.log(result2);
let result3 = findEvenOdd(0);
console.log(result3);

// 2. factorial
// 1*2*3 = 6
// 1*2*3*4 = 24
function calculateFactorial(number) {
  let factorial = 1;

  for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

let factorial_of = calculateFactorial(5);
console.log("factorial of : ", factorial_of);

// 3. Fibonacci Series
let number = 8;
let n1 = 0;
let n2 = 1;
let nextTerm;
console.log("Fibonacci Series:");
for (let i = 1; i <= number; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}

// 4. Prime Number
function findPrimeNumber(number) {
  let count = 0;
  for (let i = 1; i / 2 <= number; i++) {
    if (number % i === 0) {
      count++;
    }
  }
  if (count === 2) {
    return number + " Is prime number";
  } else {
    return number + " Is not a prime number";
  }
}
let prime_no = findPrimeNumber(8);
console.log(prime_no);

// 5. sum of digit
function calculateSumOfNumber(number) {
  let sum = 0;
  while (number > 0) {
    sum = sum + (number % 10);
    number = Math.floor(number / 10);
  }
  return `sum of number : ${sum}`;
}

let number1 = calculateSumOfNumber(23);
console.log(number1);

// 6. count no. of digit

function countDigit(number) {
  let count = 0;
  let tmp;
  while (number > 0) {
    tmp = number % 10;
    number = Math.floor(number / 10);
    count++;
  }
  return "digit of " + count;
}

let count_no = countDigit(12);
console.log(count_no);

// 7. Armstrong Number (sum of cubes of its digits)
function findArmstrongNumber(number) {
  let sum = 0;
  let tmp = 0;
  let num = number;
  while (num > 0) {
    tmp = num % 10;
    sum = sum + tmp * tmp * tmp;
    num = Math.floor(num / 10);
  }
  if (sum === number) {
    return `${number} Is armstrong number`;
  } else {
    return `${number} Is not armstrong number`;
  }
}
let armstrong_no = findArmstrongNumber(153);
console.log(armstrong_no);

// array

let number = [4, 5, 1, 2, 9, 10, 5];

// 1. Max
function findMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

let max = findMax(number);
console.log("Max of : ", max);

// 2. Min
function findMin(arr) {
  var len = arr.length;
  var min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

let min = findMin(number);
console.log("Min of : ", min);

// 3. sum of array

function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

let arr1 = [1, 9, 4, 5];

let sum_of_arr = sumOfArray(arr1);
console.log(sum_of_arr);

// 4. array reverse

function reverseArray(arr) {
  let r_arr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    r_arr.push(arr[i]);
  }
  return r_arr;
}

let arr = [3, 5, 6, 8, 9, 87];
let r_array = reverseArray(arr);
console.log("Array : ", arr);
console.log("Reverse Array : ", r_array);

// 5. count duplicate array element and print
let arr = [3, 5, 6, 7, 4, 3, 2, 6, 7];
console.log(arr);
let count = 0;
let duplicate_value = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = 1; j < i; j++) {
    if (arr[i] === arr[j]) {
      duplicate_value.push(arr[j]);
      count++;
    }
  }
}

console.log("d", duplicate_value);
console.log("count : ", count);
