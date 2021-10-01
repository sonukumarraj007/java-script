
function countDuplicateArray(arr){
    let count = 0;
    let duplicate_value = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < i; j++) {
          if (arr[i] === arr[j]) {
            duplicate_value.push(arr[j]);
            count++;
          }
        }
      }
      return count + ' duplicate element : ' + duplicate_value;
}

console.log(countDuplicateArray([3, 5, 6, 7, 4, 3, 2, 6, 7]));