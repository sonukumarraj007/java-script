
// Count transaction with customer id and convert into given format 
// [{cust : x , trans : [x,y]}]


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

for(let i=0; i<trx.length; i++){
for(let j=1; j<i; j++){
if(trx[i].customer == trx[j].customer){
    console.log(j," j : ", trx[j])
}
}
}
console.log("---------------------------------------");


