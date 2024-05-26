## Calculate total sum of salary

```ts

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

```

```ts

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

console.log(total_salary);

```

## Store all imgUrl in one array

```ts

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

```

```ts

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

```

## Count transaction with customer id and convert into given format [{cust : x , trans : [x,y]}]

```ts
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

```

```ts

for(let i=0; i<trx.length; i++){
	for(let j=1; j<i; j++){
		if(trx[i].customer == trx[j].customer){
    			console.log(j, " j : ", trx[j])
			}
	}
}

```

### Convert into object of array ['Sonu', 'Vikash','Anshu','Udit', 'Sandeep'] like { 'name': value }

```ts

let name_list = ['Sonu', 'Vikash','Rahul','Anshu','Udit', 'Sandeep']
let obj1 = [];

name_list.forEach(item=>{
	obj1.push({name: item})
})

```

### 
