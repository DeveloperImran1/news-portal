// var : no reason to use var
// let : allow it to reassign 
// const : do not allow it to reassign

const money = 25;
// money = 50;  aita kora jabena.

const rich = money + 25;
console.log(rich)

let count = 0;
count = count +10;
console.log(count)

// Array
const numbers = [23, 4 , 43, 54, 12];
// numbers= [32, 43, 65];  reassign kora jaina.
numbers[1] = 55; // aita kora jabe. but reassign kora jabena. 
numbers.push(8,9, 76);
console.log(numbers)

// Object
const student = {
    name: "moyna pakhi",
    class: 12
}
// student = {name: "kokil konthi"}    // aita kora jabena. mane re assign kora jabena.
student.name = "Moyur konthi";
console.log(student)

// loop 
// const sum = 0;  aita kora jabena. karon sum er man change hobe.
let sum = 0;
for(let i=0; i<10; i++){
    const num = i;      // aikhane num er man change hobe ,, but evety loop a num new vabe assign hoi. so kono problem nai.
    sum = sum + num;
}
console.log(sum);