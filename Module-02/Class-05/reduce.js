// -------------->> reduce() ------------------->
// arrayName.reduce( (perameter 2 ta thakbe. akta previous value arekta present value) => 1st a previous value holo inital value. initial value er sathe present value plus hoia previous value hobe. than sum er value er sathe current value plus hobe , initial value)
const numbers = [2, 4, 6, 7, 9, 15];
const total = numbers.reduce( (previous, current) => previous+current , 0);   // aikhane 0 holo initial value.
console.log(total);


/**
 * Kono akta array er moddhe dia loop korar 6 way we know.
 * 1. for loop
 * 2. do....while
 * 3. for....of
 * 4. while loop
 * 5. map() method
 * 6. forEach()
 */


// Summary of previous method

const products = [
    {id: 1, name: "lenevo", price: 65000},
    {id: 2, name: "dell", price: 45000},
    {id: 3, name: "hp", price: 40000},
    {id: 4, name: "mac", price: 15000}
]

// map()
const price = products.map( product => product.price);
// console.log(price);   // Output: [ 65000, 45000, 40000, 15000 ]


// forEach()
 products.forEach(product => console.log(product.name));   // forEach() result return korena.


 // filter()
 const filter = products.filter(product => product.price < 60000);
console.log(filter)


// find()
 const find = products.find(product => product.price < 60000);
console.log(find)


// reduce()
const sum = products.reduce( (acumolas, current) => acumolas + current.price , 0);
console.log(sum)