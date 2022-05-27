let a = 8;
let b = 15;

console.log("before swap : ", "a =", a, "b =", b);

// c = a + b;
// a = c - a;
// b = c - a;

a = a + b;
b = a - b;
a = a - b;

console.log("after swap  : ", "a =", a, "b =", b);
