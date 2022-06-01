let arr = [2, 9, 44, 1, 0, -19, 44, 77, 20];

let arr_length = arr.length;
let min_value = Infinity;

while (arr_length--) {
  if (arr[arr_length] < min_value) {
    min_value = arr[arr_length];
  }
}

console.log("normal way = ", min_value);

function array_min(arr) {
  let arr_length = arr.length;
  let min_value = Infinity;
  while (arr_length--) {
    if (arr[arr_length] < min_value) {
      min_value = arr[arr_length];
    }
  }
  return min_value;
}

console.log("using function = ", array_min(arr));

console.log("using Math library = ", Math.min.apply(null, arr));
