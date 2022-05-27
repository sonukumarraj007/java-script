const arr = [3, 2, 5, 7, 9, 7, 0, 3, 2, 8, 2];
let count = 0;
const duplicate_value = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] === arr[j]) {
      duplicate_value.push(arr[i]);
      count++;
    }
  }
}

console.log("duplicate value :", duplicate_value);
console.log("duplicate value count :", count);
