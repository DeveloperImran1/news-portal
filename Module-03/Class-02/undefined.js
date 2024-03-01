/**
 * 8 way to get undefined:
 * variable that not initialized will give undefined.
 * function with no return 
 * perameter that is not passed will be undefined.
 * if return has nothing on the right side will return undefined.
 * property that dosent exist on an object will give you undefined.
 * accessing array elements outside of the index range.
 * deleting an element inside an array .
 * set a value directly to undefined
 * 
 */

// 1st way 
let first;
// console.log(first);



// 2nd way 
function total(x, y){
    const total = x+y;
}
const result = total(4, 7)
// console.log(result);



// 3rd way 
function third(a, b, c, d){
    console.log(a, b, c, d)
}
third(2, 4)


// 4th way
function noNegative(a, b){
    if(a<0 || b<0){
        return;
    }
    else{
        return a+b;
    }
}
// console.log(noNegative(3, -9))


// 5th way
const fifth = {
    id: 3,
    name: "rifat",
    age: 15
}
delete fifth.id;
console.log(fifth.id)
// console.log(fifth.class);


// 6th way
const sixth = [4, 89, 65, 76];
// console.log(sixth[2], sixth[7], sixth[9])


// 7th way
const seventh = [4, 89, 65, 76];
// you should not use delete keyword. You insted use splice.
delete seventh[2]
// console.log(seventh[2])


// 8th way
const eighth = undefined;
console.log(typeof eighth);
// console.log(typeof null) ;    // null akta object type.
const data = {results: [], update: null};   // jodi kono element er value na pai,, tahole tahole tar initial value null dewa jabe. karon null akta object data type value.