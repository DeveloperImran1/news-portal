// Problem 2: filter and find method use kore numbers array theke divisible by 10 er array create korte hobe.
const numbers = [33, 50, 79, 78, 90, 101, 30];

const filter = numbers.filter( number => number % 10 === 0);
console.log(filter);

const find = numbers.find( number => number % 10 === 0);
console.log(find);