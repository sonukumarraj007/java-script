function primeNumber(number) {
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
  
  console.log(primeNumber(8));
  console.log(primeNumber(5));
  console.log(primeNumber(11));