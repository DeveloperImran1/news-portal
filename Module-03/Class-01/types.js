// strongly typed language.  Onanno programing language a variable name likhar age, data types likha lage. but js a lagena.
// int a= 5;
// string b = "alim halim khai";
// bool c = True;
// object student = {name: "raju" , roll: 1};
// int[] numbers = [12, 23, 43];
// string[] friends = ["abul", "balul"]

// dynamic type language js

// Primitive data type
const a = 5;
const b= "Samsul kopaina akhon ar";
const d = true;
let x = 9;
let y= x;
console.log(x, y);
y = 15;
console.log(x, y);    // non-premetive data type gulor khettre,, x er value y kore, than y ba x er value change korle sudho oi variable er value ee change hobe. 

// non premetive data type
const ages = [23, 54, 76, 54];
let student = {id: 34, class: 6};
let person = student;
console.log(student, person);

person = {place: "khasbatta", class: 10};   // non-premitice er khetre oi variable er value re assign korle, mane fully change korle sudho oi variable er value change hoi. But object ba array er value modified korle, push, pop,delete aigulo korle 2 ta variable er value ee change hoi.
console.log(student, person)
