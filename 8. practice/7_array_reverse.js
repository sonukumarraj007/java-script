const arr = [3, 2, 5, 7, 9, 7, 0, 3, 2, 8, 2];

const reverse_arr = [];

console.log("main array :", arr);

for (i = arr.length - 1; i >= 0; i--) {
  reverse_arr.push(arr[i]);
}

console.log("reverse array :", reverse_arr);

console.log("using array function :", arr.reverse(arr));
