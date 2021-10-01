// sum of cubes of its digits

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

  console.log(findArmstrongNumber(153));
  console.log(findArmstrongNumber(13));
  console.log(findArmstrongNumber(123));