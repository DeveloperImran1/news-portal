/**
 * 1. var, let, const  --->> aikhane var global scope and let and const block scope. if, loop , function er moddhe declare korle bahire access kore jaina.
 * default perameter.
 * template string.
 * arrow function
 * destucturing and spread operator
 * Object.keys, Object.values(), Object.entries
 * for of used in array and string.
 * for in used in object.
 */

const a = 56;
const numbers = [56, 7, 8];
const person = {
    name: "Sakib Khan",
    age: 50
}
const message = `Hi, ${person.name} has a: ${a} access to ${numbers[1]}`;
console.log(message)

// >>>>>>>>>>>>>>>>>>>>>>
const square = x => x * x;
const sum = (a, b) => a + b;



// >>>>>>>>>>>>>>>>>>>>>>>
const {x, y, ...others} = {x:2, y:8, z:9, name: "Ovijet", age: 55};    // aikhane x, and y key er value x and y variable er moddhe store hobe. ar baki sobgulo keys and valu others variable er moddhe object hisabe add hobe.

const [first, second, ...remaining] = ['ram', "sam", "jodu", "modu"]