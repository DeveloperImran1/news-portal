// Problem 1:  oddNumbers array er element er sathe 1 plus kore even number create korte. hobe 
const oddNumbers = [1, 3, 5, 7, 9];

// use for of loop 
let evenNumbers = [];
for (let number of oddNumbers) {
    const even = number + 1;
    evenNumbers.push(even);

}
// console.log(evenNumbers)


// use array.map()
const evenNums = oddNumbers.map(num => num + 1);
console.log(evenNums)