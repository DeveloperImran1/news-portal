// arrayName.map(function er name ba full function). oi array er every element er jonno function ta call hobe. and pera meter hisabe oi element ta jabe. every operation a return kora result new akta array te push hoia finally return korbe array hisabe.

const numbers = [4, 5, 6, 8, 9];

// const doubled = [];
// for(let number of numbers){
//     const double = number * 2;
//     doubled.push(double)
// }
// console.log(doubled)

// uporer same kaj ta map method er maddhome kora jai. 

// map() ===> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array.

function doubleIt(num) {
    // console.log("The num is: " + num);
    return num * 2;
}
const result = numbers.map(doubleIt);

// uprer kajta arrow function er maddhome kora jai.
const double2 = n => n * 2;
const result2 = numbers.map(double2);
// console.log(result2);

// uporer kajta akbare kora jai.
const result3 = numbers.map(n => n * 2);
// console.log(result3); 

const fiveBonuce = numbers.map( num => num+5);
console.log(fiveBonuce);

const hulf = numbers.map( num => num/2);
console.log(hulf)

const friends = ["Imran", "raju", "Taslima", "Tanjila"];
const len = friends.map( name => name.length);
console.log(len);

const firstLetter = friends.map( friend => friend[0]);
console.log(firstLetter);



