// ['Sonu', 'Vikash', 'Rahul', 'Anshu','Udit', 'Sandeep']
// convert into object of array
// {
// 	'name': value
// }

let name_list = ['Sonu', 'Vikash','Rahul','Anshu','Udit', 'Sandeep']
let obj1 = [];

name_list.forEach(item=>{
	obj1.push({name: item})
})
console.log(obj1)
console.log("---------------------------------------");