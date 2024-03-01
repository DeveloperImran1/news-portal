const actor = {
    name: "Imran",
    phone: "01311710894",
    money: 1500
}
// const phone = actor.phone;
// const money = actor.money;
// console.log(phone);

// Ouprer kajtai,,, object er value k dhorar easy system holo destucturing. If right side of destucturing will be object as well.
// use property name as a variable. that contains the property value.
const {name} = actor;   // 1st variable keyword than {object er property name} = object er name.
console.log(name);  //Output: Imran    // object er property name k console korlei oi property er value paoa jabe.

// abar akstahe akadhik property value kew access kora jai. and property name ta kew change kora jai.
const {phone, money: taka} =  actor;
// console.log(money);    // money property dia ar access kora jabena.
console.log(taka);   // Output: 1500

// Nested object er khetre
const user = {
    id: 339,
    name: "sakib",
    age: 34,
    education: {
        degree: "Masters"
    }
}
// const {education : {degree}} = user;   // nested er khetre aivabe dhorte hobe.
const {education : {degree} = {} } = user;   // Jodi kono somoi api theke object nia ase
console.log(degree)


const person = {
    name: "Imran",
    id: 34,
    p: [1, 2, 3, 4],
    address: {
        zila: "Rajsahi",
        village: "bolbona"
    }
}

const {address} = person;
const {village} = address;
console.log(village)


// Object er jonno asssign er right site a object tahkle left site a object er jonno {} er moddhe likhte hobe. and  array hole [] er modddhe likhta hobe.
// Array destucturing.
const numbers = [45, 99];
const [first, second] = numbers;

// abar aivabew kora jai.
const [x, y] = [10, 20];

// function
function doubleThem(a,b){
    return [a*2, b*3];   // aikhane return hobe akta array. jar element thakbe 2 ta.
}
const [prothom, ditio] = doubleThem(6,9);    // return pabo akta array. ar oi array k destucturing kora hoiase [prothom, ditio array dia.]
console.log(prothom, ditio);   // Output: 12 27


