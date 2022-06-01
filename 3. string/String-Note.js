/* String Example with some usefull method */

// 1. length
// 2. indexOf()
// 3. lastIndexOf()
// 4. search()
// 5. slice(start index, end index)
// 6. substring(positive start index, positive end index)
// 7. substr(index, length)
// 8. replace()
// 9. toUpperCase()
// 10. toLowerCase()
// 11. concat()
// 12. trim()
// 13. chartAt(position)
// 14. charCodeAt(position)
// 15. [] -- Property access
// 16. split()

var str = 'Sonu Kumar From Bihar. My name is Sonu Kumar.';
var str_length = str.length;
console.log('str length : ', str_length);


// indexOf()

index = str.indexOf('Kumar');
console.log('index : ', index);

index_with_para = str.indexOf('Kumar', 10);
console.log('index of str : ', index_with_para);

// lastIndexOf()

last_index = str.lastIndexOf('Sonu');
console.log('last index of: ', last_index);

last_index_w_para = str.lastIndexOf('Sonu', 10);
console.log('last index of para : ', last_index_w_para);

// search()
search = str.search('Kumar');
console.log('Search At : ', search);

// extracting string
// slice(start index, end index)
// substring() --> It cant accept negative index
// substr(index, length)
slice = str.slice(5, 11);
console.log('Slice string : ', slice);

substring = str.substring(5, 11);
console.log('Substring : ', substring);

substr = str.substr(5, 5);
console.log('substr method : ', substr);

// replace()
replace = str.replace("Sonu", 'Raj');
console.log('replace method : ', replace);

replace_i =str.replace(/sonu/i, "Raj 2");
console.log("replace with i : ", replace_i)

replace_g = str.replace(/raj/g, "Sonu");
console.log("replace with g : ", replace_g)

// toUpperCase()
console.log("upper case str : ", str.toLocaleUpperCase())

// toLoweCase()
console.log("lower case str : ", str.toLowerCase());

// concat()
let text1 = "sonu"
let text2 = "kumar"
let name = text1.concat(" ", text2)
console.log("concate method : ", name)

// trim()
let text = "     Sonu    Kumar "
console.log("trim method : ", text.trim())

// Extracting String Characters
// charAt(position)
// charCodeAt(position)
// Property access [ ]

console.log("chart at method : ", str.charAt(12));

console.log("chart code at method : ", str.charCodeAt(12));

console.log("Property access : ", str[12]);

// converting string into array
var txt = 'a,b,c,d,e';
console.log(txt.split(','));
