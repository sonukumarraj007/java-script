function sumOfDigit(number) {
    let sum = 0;
    while (number > 0) {
      sum = sum + (number % 10);
      number = Math.floor(number / 10);
    }
    return `sum of number : ${sum}`;
  }
  
 
  console.log(sumOfDigit(23));
  console.log(sumOfDigit(223));
  console.log(sumOfDigit(123));