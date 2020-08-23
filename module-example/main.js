import * as Helper from './helper.js';

let sumOf = Helper.sum(4,6);
console.log(sumOf);

let multiplyOf = Helper.mult(12,5);
console.log(multiplyOf);

const userName = Helper.myname;

document.getElementById("userName").innerHTML = userName;