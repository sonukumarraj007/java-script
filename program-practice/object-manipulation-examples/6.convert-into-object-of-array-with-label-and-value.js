// ['Sonu', 'Rahul', 'Vikash','Anshu','Udit', 'Sandeep',]
// convert into object of array
// {
// 	'label': 'Sonu', 'value': 'Sonu'
// }

let name_list = ['Sonu', 'Rahul', 'Vikash','Anshu','Udit', 'Sandeep']
let obj3 = [];

name_list.forEach(item=>{
	obj3.push({label: item, value: item})
})
console.log(obj3)
console.log("---------------------------------------");