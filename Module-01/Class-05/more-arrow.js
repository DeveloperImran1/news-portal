// double or more perameter
// arrow function er khetre 2 ta ba tar besi pera meter thakle oi perameter k first bracket er moddhe likha hoi.
const multipl= (x) => x*x;
const difference = (x,y) => x-y;
const multiply = (a,b,c,d) => a*b*c*d;
console.log(multipl(5))



// single perameter
// But arrow function a akta pera meter thakle take first bracket er moddhe na likhlew hoi.
const getAge = person => person.age;
const student = {
    name: "Taslima", 
    age: 9
}
console.log(getAge(student));

const getThird = numbers => numbers[2];
const myArr = [4, 5, 7, 8];
console.log(getThird(myArr));



// No perameter 
const getPi = () => Math.PI ;
console.log(getPi())

// large arrow function . if you want to get anything returnd from this function . then you have to use the return keyword.
const doMath = (x, y, z) => {
    const sum = x+y+z;
    const mult = x*y*z;
    const result = sum + mult;
    return result;
}
console.log(doMath(10, 12, 20))