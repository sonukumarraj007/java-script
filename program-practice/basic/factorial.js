// 5 = 5*4*3*2*1 =120

function calculateFactorial(number){
    let factorialOf = 1;
    for(let i=1; i<=number; i++){
        factorialOf = i * factorialOf;
    }
    return "Factorial of "+ number +' Is : '+ factorialOf;
}

console.log(calculateFactorial(0));
console.log(calculateFactorial(5));
console.log(calculateFactorial(6));