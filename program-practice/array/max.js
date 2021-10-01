
function findMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  }
  
  console.log(findMax([2,4,5,1,66,54,33]));