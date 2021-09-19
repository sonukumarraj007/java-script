function findEvenOddNo(number){
    if(number == 0){
        return number + " Is not a Even neither Odd no."
    }else if(number %2 == 0){
        return number + " Is Even no."
    }
    else{
        return number + " Is Odd no."
    }
}

console.log(findEvenOddNo(44));
console.log(findEvenOddNo(41));
console.log(findEvenOddNo(0));
console.log(findEvenOddNo(-44));
console.log(findEvenOddNo(-41));