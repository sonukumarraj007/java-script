function countNoOfDigit(number) {
    let count = 0;
    let tmp;
    while (number > 0) {
      tmp = number % 10;
      number = Math.floor(number / 10);
      count++;
    }
    return "No. of digit : " + count;
  }
  
  
  console.log(countNoOfDigit(12));
  console.log(countNoOfDigit(152));
  console.log(countNoOfDigit(1267));