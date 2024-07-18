## Interview Ask Program

#### Calculate total sum of salary

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

#### Store all imgUrl in one array

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


#### Count transaction with customer id and convert into given format [{cust : x , trans : [x,y]}]

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

#### Convert into object of array ['Sonu', 'Vikash','Anshu','Udit', 'Sandeep'] like { 'name': value }

```ts

let name_list = ['Sonu', 'Vikash','Rahul','Anshu','Udit', 'Sandeep']
let obj1 = [];

name_list.forEach(item=>{
	obj1.push({name: item})
})

```

#### Remove duplicate elememt and convert into object of array

```ts

// convert into object of array
// {
// 	'name': value
// }

let name_list = ['Sonu', 'Vikash','Anshu','Udit', 'Sandeep', 'Sonu', 'Anshu'];
let obj = [];
let tmp= new Set(name_list);


tmp.forEach(item=>{
	obj.push({name: item})
})

console.log(obj);

```

#### Convert into object of array { 'label': 'Sonu', 'value': 'Sonu' }

```ts

// convert into object of array
// {
// 	'label': 'Sonu', 'value': 'Sonu'
// }

let name_list = ['Sonu', 'Rahul', 'Vikash','Anshu','Udit', 'Sandeep']
let obj = [];

name_list.forEach(item=>{
	obj.push({label: item, value: item})
})
console.log(obj);

```

#### Get all name value and convert into object of array

```ts

// Get all name value and convert into object of array
// {
// 	'label': 'Sonu', 'value': 'Sonu'
// }

let name_list = [
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

let obj = [];

name_list.forEach(item=>{
	obj.push({label: item.name, value: item.name})
})

console.log(obj);

```

#### Merge two object

```ts

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
   
```

```ts

console.log(Object.assign(obj1, obj2));

```

#### Add some property to objrct

```ts

let obj ={
	'name': 'Sonu Kumar',
	'age': 25
}

obj.roll_no = "12345"
console.log(obj);

output: {
  age: 25,
  name: "Sonu Kumar",
  roll_no: "12345"
}

```

#### Delete some property to objrct

```ts

let obj ={
	'name': 'Kumar',
	'age': 25,
	'roll_no': 12345
}

delete obj.name;
console.log(obj);

output: {
  age: 25,
  roll_no: 12345
}

```

#### String print '5'-5

```ts

console.log('5'-5);

output: 0

```

#### Transform object of array

```ts

let kvArray = [{key: 1, value: 10},
               {key: 2, value: 20},
               {key: 3, value: 30}]

Output : // [{"1":10},{"2":20},{"3":30}]

Solution : let result = kvArray.map(item => ({ [item.key]: item.value }));

```

#### remove blank, null, nan, undefined object from array and count the valid and invalid objects 

```ts

let arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: undefined }
]

```

```ts

let filteredArray = arr.filter(item => Number.isFinite(item.id));

console.log(filteredArray);

Output :
[{ id: 15 },
 { id: -1 },
 { id: 0 },
 { id: 3 },
 { id: 12.2 }
]

```

```ts

// count the valid and invalid objects

let counts = arr.reduce((result, item) => {
  if (Number.isFinite(item.id)) {
    result.validCount++;
  } else {
    result.invalidCount++;
  }
  return result;
}, { validCount: 0, invalidCount: 0 });

console.log("Valid Objects:", counts.validCount);
console.log("Invalid Objects:", counts.invalidCount);

```

#### What will be output

```ts

setTimeout(() => {
  console.log('test');
  setTimeout(() => {
	console.log('dummy');
	}, 100);
}, 10);

console.log('testing');

Output :

"testing"
"test"
"dummy"

```

#### What will be output

```ts

setTimeout(() => {
  console.log('test');
  setTimeout(() => {
	console.log('dummy');
	}, 10);
}, 1000);

console.log('testing');

Output :

"testing"
"test"
"dummy"

```

#### What will be output

```ts

var x = 21;
var xyz = function () {
     console.log(x);
     var x = 20;
};
xyz();

Output : undefined

```

#### What will be output

```js

var x = 21;
var xyz = function () {
     console.log(this.x);
     var x = 20;
};
xyz();

Output : 21

```

#### What will be output

```ts

var x = 21;
var xyz = function () {
     var x = 20;
     console.log(x);
};
xyz();

Output : 20

```

#### What will be output

```ts

var x = 21;
var xyz = function () {
     var x = 20;
     console.log(this.x);
};
xyz();

Output : 21

```
