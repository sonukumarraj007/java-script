/* Program Practice */
// 1. Even Odd
// 2. Factorial
// 3. Prime Number
// 4. Armstrong Number
// 5. Max
// 6. Min

// Even Odd
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

// factorial
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

// Prime Number
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

// Armstrong Number (sum of cubes of its digits)

function findArmstrongNumber(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {}
  return number + " Is armstrong number";
}
let armstrong_no = findArmstrongNumber(4);
console.log(armstrong_no);

let number = [4, 5, 1, 2, 9, 10, 5];

// Max
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

// Min
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
