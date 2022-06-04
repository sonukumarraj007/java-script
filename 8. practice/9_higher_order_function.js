// calculate area of circle
// calculat circumfrence of circle
// calculate diameter of circle
// radius = [4, 1 , 5, 6]

const radius = [4, 1, 5, 6];

// solution one
console.log("---------- solution 1 -------------");

const area_of_circle = function (arr) {
  let output = [];
  arr.forEach((el) => {
    output.push(Math.PI * el * el);
  });
  return output;
};

console.log(area_of_circle(radius));

const circumfrence = function (arr) {
  let output = [];
  arr.forEach((el) => {
    output.push(2 * Math.PI * el);
  });
  return output;
};

console.log(circumfrence(radius));

const circle_diameter = function (arr) {
  let output = [];
  arr.forEach((el) => {
    output.push(2 * el);
  });
  return output;
};

console.log(circle_diameter(radius));

console.log("---------- solution 2 -------------");

// solution - 2 (modular approch)

const area = (el) => Math.PI * el * el;

console.log(radius.map(area));

console.log("---------- solution 3 -------------");

// solution - 3
console.log(
  radius.map((el) => {
    return Math.PI * el * el;
  })
);
