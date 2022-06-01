/* Array example and method list */

// 1. length
// loop
// forEach
// 2. push()
// 3. pop()
// 4. shift()
// 5. unshift()
// 6. splice(position, no. of ele remove, new eliment added)
// 7. slice(1, 3)
// 8. concat()
// 9. join()
// 10. toString
// 11. sort()
// 12. reverse
// 13. Math.max.apply(null, arr)
// 14. Math.min.apply(null, arr)

var cars = ['Saab', 'Volvo', 'BMW'];
var number = [1, 4, 5, 2, 8, 9, 3, 2, 1];

console.log(cars[0]);

cars[0] = 'Mercedes Benz';

console.log(cars);

console.log('type of : ', typeof cars);

console.log('length of array : ', cars.length);

// looping array

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
console.log('..........');

// forEach()

cars.forEach(myFunction);

function myFunction(value) {
  console.log(value);
}


// push()

cars.push("Mahindra");
console.log("adding new array element : ", cars)

// pop()
cars.pop()
console.log("remove element from array : ", cars)


// shift()
cars.shift();
console.log("remove element from arrat at beging : ", cars)

// unshift()
cars.unshift("Honda")
console.log("new array element added at beging : ", cars)

// splice(position, no. of ele remove, new eliment added)

cars.splice(0,2, "Yamaha", "TVS")
console.log("splice method : ", cars)

// slice()

console.log("slice method : ", cars.slice(1,3))

// concat()
console.log("concat method : ", cars.concat(number));

// merging multiple array
let name = ['sonu', 'kumar', 'age']
console.log("merging multiple array : ", cars.concat(number, name))

// join()

console.log("join to array : ", cars.join(" * "))

// toString()

console.log("Array to string : ", cars.toString());

// sort()
console.log('array sort. : ', cars.sort());
console.log("number array sort : ", number.sort())

// reverse()

console.log("reverse method : ", cars.reverse())

// Math.max(1, 2, 3)
console.log("max : ", Math.max.apply(null, number));

// Math.min(1, 2, 3)

console.log("min : ", Math.min.apply(null, number));