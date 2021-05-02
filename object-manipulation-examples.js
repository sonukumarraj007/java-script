// 1. calculate total sum of salary

let company = {
	hr: [{
			name: 'john',
			salary: 100,
		},
		{
			name: 'alice',
			salary: 200,
		},
	],

	development: {
		ui: [{
				name: 'tom',
				salary: 300,
			},
			{
				name: 'mark',
				salary: 200,
			},
		],

		backend: [{
			name: 'clark',
			salary: 400,
		}, ],
	},
};

console.log("---------------------------------------")

let total_salary = 0;

company.hr.forEach(item => {
	total_salary += item.salary
})

company.development.backend.forEach(item => {
	total_salary += item.salary
})

company.development.ui.forEach(item => {
	total_salary += item.salary
})

console.log("Total Salary : ", total_salary);
console.log("---------------------------------------")

// 2. Store all imgUrl in one array
let data = {
	postdata: [{
			name: 'name1',
			imgUrl: 'https://img1.png',
		},
		{
			name: 'name2',
			imgUrl: 'https://img2.png',
			children: [{
					name: 'name21',
					imgUrl: 'https://img21.png',
				},
				{
					name: 'name22',
					imgUrl: 'https://img22.png',
				},
				{
					name: 'name23',
					imgUrl: 'https://img23.png',
				},
			],
		},
		{
			name: 'name3',
			imgUrl: 'https://img3.png',
		},
		{
			name: 'name4',
			imgUrl: 'https://img4.png',
			children: [{
					name: 'name41',
					imgUrl: 'https://img41.png',
				},
				{
					name: 'name42',
					imgUrl: 'https://img42.png',
					children: [{
							name: 'name421',
							imgUrl: 'https://img421.png',
						},
						{
							name: 'name422',
							imgUrl: 'https://img422.png',
						},
					],
				},
				{
					name: 'name43',
					imgUrl: 'https://img43.png',
				},
			],
		},
		{
			name: 'name5',
			imgUrl: 'https://img5.png',
		},
		{
			name: 'name6',
			imgUrl: 'https://img6.png',
		},
		{
			name: 'name7',
			imgUrl: 'https://img7.png',
		},
	],
};

let allImgeUrl = [];

data.postdata.forEach(item => {
	allImgeUrl.push(item.imgUrl);

	if (item.children) {
		item.children.forEach(item => {
			allImgeUrl.push(item.imgUrl);
		})
	}

})

console.log(allImgeUrl);
console.log("---------------------------------------")

//3. Count transaction with customer id and convert into given format 
//   [{cust : x , trans : [x,y]}]

var trx = [{
		transaction: 1,
		customer: 100,
		amount: 100
	},
	{
		transaction: 2,
		customer: 105,
		amount: 100
	},
	{
		transaction: 3,
		customer: 100,
		amount: 50
	},
	{
		transaction: 4,
		customer: 45,
		amount: 750
	},
	{
		transaction: 5,
		customer: 45,
		amount: 750
	}
];

// 4. ['Sonu', 'Vikash','Anshu','Udit', 'Sandeep']
// convert into object of array
// {
// 	'name': value
// }

let name_list = ['Sonu', 'Vikash','Anshu','Udit', 'Sandeep']
let obj1 = [];

name_list.forEach(item=>{
	obj1.push({name: item})
})
console.log(obj1)
console.log("---------------------------------------");

// 5. ['Sonu', 'Vikash','Anshu','Udit', 'Sandeep', 'Sonu', 'Anshu']
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
console.log("--------------sssss-------------------------");

// 5. ['Sonu', 'Vikash','Anshu','Udit', 'Sandeep',]
// convert into object of array
// {
// 	'label': 'Sonu', 'value': 'Sonu'
// }

let name_list_3 = ['Sonu', 'Vikash','Anshu','Udit', 'Sandeep']
let obj3 = [];

name_list.forEach(item=>{
	obj3.push({label: item, value: item})
})
console.log(obj3)
console.log("---------------------------------------");


// 6. Get all name value and convert into object of array
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
		'name': 'Ravi'
	},
	
]

let obj4 = [];

name_list_4.forEach(item=>{
	obj4.push({label: item.name, value: item.name})
})

console.log(obj4)
console.log("---------------------------------------");

// console.log('1');
// console.log('2');
// console.log('3');
// console.log('5'-5);