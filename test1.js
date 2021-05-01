
// 1.


let data = {
    data: [
      {
        name: 'name1',
        imgUrl: 'https://img1.png',
      },
      {
        name: 'name2',
        imgUrl: 'https://img2.png',
        children: [
          {
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
        children: [
          {
            name: 'name41',
            imgUrl: 'https://img41.png',
          },
          {
            name: 'name42',
            imgUrl: 'https://img42.png',
            children: [
              {
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

  let imgeUrl = [];

  data.data.forEach(item =>{
      imgeUrl.push(item.imgUrl)
      {
          if(item.children){
             item.children.forEach(item => {
                imgeUrl.push(item.imgUrl)
             })
          }
      }
  })

  console.log(imgeUrl)



--------------------------

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
}];


// [{cust : x , trans : [x,y]}]


console.log("2" - 2);


const mySet1 = new Set()

mySet1.add(1)           // Set [ 1 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add('some text') // Set [ 1, 5, 'some text' ]
const o = {a: 1, b: 2}
mySet1.add(o)

mySet1.add({a: 1, b: 2})   // o is referencing a different object, so this is okay

mySet1.has(1)              // true
mySet1.has(3)              // false, since 3 has not been added to the set
mySet1.has(5)              // true
mySet1.has(Math.sqrt(25))  // true
mySet1.has('Some Text'.toLowerCase()) // true
mySet1.has(o)       // true