
// Merge to object
// Use a spread operator ( ...)
// Use the Object.assign() method
let obj1 = {
	name: 'Sonu',
	age: 26,
  };
  
  let obj2 = {
	hobby: 'Criket',
	mobil: 5687654,
	name: 'Sonu kumar',
  };
  
  console.log({ ...obj1, ...obj2 });
  console.log("---------------------------------------");
  
  console.log(Object.assign(obj1, obj2))
  console.log("---------------------------------------");