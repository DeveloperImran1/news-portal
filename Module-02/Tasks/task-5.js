// Problem 4: 
const peoples = [
    {name: "Nodi", age: 28},
    {name: "Akil", age: 25},
    {name: "Shobuj", age: 20},
]

// use of for of loop
// let sumOfAge = 0;
// for (people of peoples){
//     const age = people.age;
//     sumOfAge += age;
// }
// console.log(sumOfAge)



// using reduce() method
const totalAge = peoples.reduce( (previousValue, currentValue) => {
   return previousValue + currentValue.age;
} , 0)
console.log(totalAge)