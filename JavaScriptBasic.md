let arr = [2, 9, 44, 1, 0, -19, 44, 77, 20];

// for loop
console.log("-------- for loop -------");

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// while loop
console.log("-------- while loop -------");

let i = 0;

while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// do while loop
console.log("-------- do while loop -------");

let j = 0;

do {
  console.log(arr[j]);
  j++;
} while (j < arr.length);

// for each
console.log("-------- for each -------");

arr.forEach((item) => {
  console.log(item);
});

// map
console.log("-------- map -------");

arr.map((item) => {
  console.log(item);
});
