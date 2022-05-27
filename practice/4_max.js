let arr = [2, 9, 44, 1, 0, -19, 44, 77, 20];

arr_length = arr.length;
max_value = -Infinity;

while (arr_length--) {
  if (arr[arr_length] > max_value) {
    max_value = arr[arr_length];
  }
}

console.log("normal way = ", max_value);

function max_of_array(arr) {
  arr_length = arr.length;
  max_value = -Infinity;

  while (arr_length--) {
    if (arr[arr_length] > max_value) {
      max_value = arr[arr_length];
    }
  }
  return max_value;
}

console.log("using fuction = ", max_of_array(arr));

console.log("using math library = ", Math.max.apply(null, arr));
