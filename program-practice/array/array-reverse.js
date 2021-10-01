
function reverseArray(arr) {
    let r_arr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      r_arr.push(arr[i]);
    }
    return r_arr;
  }
  
  console.log(reverseArray([3, 5, 6, 8, 9, 87]));