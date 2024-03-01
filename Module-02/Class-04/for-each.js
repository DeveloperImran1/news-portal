/**
 * 1. map() -------->  arrayName.map(function er name ba full function). oi array er every element er jonno function ta call hobe. and pera meter hisabe oi element ta jabe. every operation a return kora result new akta array te push hoia finally return korbe array hisabe.
 * 
 * 2. forEach() -------> map() and forEach() method same kaj kore. but map() method er maddhome function er moddhe kaj kore result k return kora jai. But forEach() method function er moddhe theke result k return kora jaina.
 * 
 * 3. filter() ----> filter selects elements based on a condition and returns an arry with the elements that fulfilled the condition.
 * 
 * 4. find() ---------> arrName.find(function er moddhe condition thakbe.)  condition true hole 1st er matching value k return korbe. Just akta value hisabe. array noi.
 * 
 * 5. reduce()  ----->> // arrayName.reduce( (perameter 2 ta thakbe. akta previous value arekta present value) => 1st a previous value holo inital value. initial value er sathe present value plus hoia previous value hobe. than sum er value er sathe current value plus hobe , initial value)
 * 
 // map(), forEach(), filter(), find(), reduce() ara sobai every iterate a sudho element ee neina. every iterate a element, index, and full array k perameter hisabe nita pare. 
*/









// --------> forEach()
// map() and forEach() method same kaj kore. but map() method er maddhome function er moddhe kaj kore result k return kora jai. But forEach() method function er moddhe theke result k return kora jaina.

const numbers = [2, 3, 5, 7, 4 , 8, 9];
// const result = numbers.forEach( num => num*2);  // result undefined asbe. karon forEach() return korta parena.
// console.log(result)

const result = numbers.forEach( num => console.log(num*2));  





// ------------> filter()   ----> filter selects elements based on a condition and returns an arry with the elements that fulfilled the condition.

// arrName.filter(function er vitore condition check kora hoi. ) condition true hole oi value new akta arrayte add hoi. finally sob value gulo array hoia raturn kore.

const players = [45, 67, 68, 69, 70, 74, 79, 73];
const selected = players.filter(height => height > 65);
// console.log(selected);   //Output: [67, 68, 69, 70, 74, 79, 73];

const odd = players.filter(height => height %2 === 1);
console.log(odd);   // Output: [ 45, 67, 69, 79, 73 ]

const friends = ["Asraful", "Rifaj", "Bayzid", "Alif", "Shakil"];
const oddLen = friends.filter(name => name.length % 2 === 1);
console.log(oddLen)





// ----------->> find() -------->> 
// arrName.find(function er moddhe condition thakbe.)  condition true hole 1st er matching value k return korbe. Just akta value hisabe. array noi. 

// tahole filter() and find() method er moddhe main different holo, filter() jei jei element true hoi tader akta array retrn kore . matchnig na holew empty array return kore. Ar find() method condition true er 1st er akta value return kore. array return korena.

const select = players.find( num => num > 60);
console.log(select)   // Output: 67;

// ai find() method function er perameter a cuurentValue, currentIndex, arr kew pai.
const resul = numbers.find(function(currentValue, currentIndex, arr){
    console.log("current value: " + currentValue)
    console.log("current Index: " + currentIndex)
    console.log("current arr: " + arr)
}, this) ;    //  find er () first bracket er moddhe function , and this 2ta perameter k nita pare. function er vitore this k use kora jaina 2nd perameter a this k na nila.