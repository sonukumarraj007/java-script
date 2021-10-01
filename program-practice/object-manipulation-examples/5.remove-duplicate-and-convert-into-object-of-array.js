// ['Sonu', 'Vikash','Anshu','Udit', 'Sandeep', 'Sonu', 'Anshu']
// remove duplicate and
// convert into object of array
// {
// 	'name': value
// }

let name_list_2 = ['Sonu', 'Vikash','Anshu','Udit', 'Sandeep', 'Sonu', 'Anshu'];
let obj2 = [];
let tmp1= new Set();

name_list_2.forEach(item=>{
	tmp1.add(item);
})

tmp1.forEach(item=>{
	obj2.push({name: item})
})

console.log(obj2)
console.log("---------------------------------------");