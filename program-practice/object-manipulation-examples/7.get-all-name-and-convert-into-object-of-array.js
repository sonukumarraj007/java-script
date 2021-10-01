
// Get all name value and convert into object of array
// {
// 	'label': 'Sonu', 'value': 'Sonu'
// }

let name_list_4 = [
	{
		'id': 1,
		'name': 'Sonu'
	},
	{
		'id': 2,
		'name': 'Anshu'
	},
	{
		'id': 3,
		'name': 'Vikash'
	},
	{
		'id': 4,
		'name': 'Rahul'
	},
	
]

let obj4 = [];

name_list_4.forEach(item=>{
	obj4.push({label: item.name, value: item.name})
})

console.log(obj4)
console.log("---------------------------------------");
