// function k call korar somoi perameter er besi arguments pathia dila,,, tader k function er vitore console.log(arguments) ai keyword dia access kora jai.

function sum(a, b, c){
    // console.log(arguments); // arguments gulo ke array like object akare pabo. array er bivinno method use kora jabena. but for of loop chala jabe.

    // console.log(arguments["5"]);
    // console.log(arguments[5]);   // aivabew access kora jai.

    const argsArr = [...arguments];   // arguments gulo k akta array te convert kore nilam.
    // console.log(argsArr);     // Output: [2, 4, 5, 7, 5, 9, 7, 10]

    const total = a + b + c;
    return total;
}
const result = sum(2, 4, 5, 7, 5, 9, 7, 10);
// console.log(result);  

// console.log(sum.length);    // function er name.length ; dila output a oi function er perameter koita ase ta ouput a diba.






//  ------------------------->> Primitive type er value k argument hisabe pass kore function er vitiore oi variable er value k reassign korle function er vitorei change hoi. But oi variable er value k function er bahira access korle value kono change hobena.....karon Primitive types are pass by value.
let num1 = 5;
let num2 = 7;

function multiply(a, b){
    a= 27;
    const result = a * b;
    return result;
}
console.log(num1);      // output: 5;
console.log(multiply(num1, num2));   // Output: 189 ; 
console.log(num1);      // output: 5;



//  ------------------------->> Non-Primitive type er value k argument hisabe pass kore function er vitiore oi variable er value k reassign korle function er vitore and bahirao change hoi. But primitive type er value er khetre change hoina.... Non-Primitive types are pass by refference.

let student1 = {name: "Jalil", partner: "Borsha"};
let student2 = {name: "raj", partner: "anika"};

function makeMovie(couple1, couple2){
    couple1.name = "Raju";
    couple2.partner = "sumaia";
}
console.log(student1);   // aikhane change hoini. karon makeMovie() function akhono call kora hoini.
makeMovie(student1, student2);
console.log(student1, student2);    // Output: { name: 'Raju', partner: 'Borsha' } { name: 'raj', partner: 'Borsha' }