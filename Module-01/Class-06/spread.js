// Math.max(onek gulo number thke jei number biggest take output dei)

const max = Math.max(6, 10, 23, 5, 3, 54, 43, 32);
console.log(max)          // output: 54;

const numbers = [3,5,7,2, 20, 23, 45, 65];
console.log(numbers) // Output: [3,5,7,2, 20, 23, 45, 65]   // aikhane numbers akta array. 
console.log(...numbers) // Putput: 3 5 7 2 20 23 45 65  // 3 ta dot dia numbers array er nam dila sobgulo value single hoia akta akta kore number ba string hole string kore diba.
console.log(...["imran", "raju", 'raslima', 7]) ;    // Output: imran raju raslima 7 ; aikhane sobgulo valuke akta akta kore valute kore disa.

// const arrMax = Math.max(numbers);    // Ouptput : NaN karon array er moddhe thke maximum valu ber korte parena.
const arrMax = Math.max(...numbers)
console.log(arrMax)    // Output: 65

// use spread operator to copy
// const friends = [4,5,6,7,8];
// const dosto = friends;   // main akta reference k dhore ase friends and dosto.
// friends.push(15);
// // friends er moddhe 15 k push koresi. but dosto er moddhew add hoiase. karon friends and dosto akta array kei reffer kore. jekono akta te modify korle 2 tai change hobe.
// console.log(friends);
// console.log(dosto)


const friends = [5,6,7,8,3,10];
const bondhu = friends ;   // main akta reference k dhore ase friends and dosto.
const dosto = [...bondhu]  // but bondhu er age three dot deake bole spread operator.  ja main refrence k dhore rakhena. aita copy kore new akta variable a store kore.
console.log(dosto);   //Output: [ 5, 6, 7, 8, 3, 10 ]

friends.push(100);
console.log(friends);   //[ 5, 6, 7, 8, 3, 10, 100 ]
console.log(dosto); // [ 5, 6, 7, 8, 3, 10 ]


// advanced 
const sonkha = [ ...friends, 999] ; // add extra elements while copy 
console.log(sonkha);  // Output: [  5,  6,   7,   8,3, 10, 100, 999]
  
// array iterats
const nums = [10, 20, 30, 40];
const result = [2, 4, 6,7];
const mainArr = [...nums, ...result];
console.log(mainArr);   // Output: [10, 20, 30, 40, 2,  4,  6,  7]

// Object iterats 
const obj1 = {name: "Imran", age: 19};
const obj2 = {names: "rifat", ages: 15};
const obj = {...obj1, ...obj2};   // 2ta object er key name same hole akta key add hobe. vinnno vinno name dita hobe.
console.log(obj);   // Output: { name: 'Imran', age: 19, names: 'rifat', ages: 15 }


// string convention or iteraton 
const name = "Imran";
console.log(...name)   // Output: I m r a n