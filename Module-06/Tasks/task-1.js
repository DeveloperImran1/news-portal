// Task-1
setTimeout( () =>{
    console.log("I am called after 5 second")
} ,5000);


// Task-2
const delayGreeting = (name, miliSec) => {
    
    setTimeout( () => {
        console.log("Hellow", name)
    } ,miliSec)
}
// delayGreeting("imran", 2000);


// using normal function

// const delayGreeting = function(name, miliSec){
//     setTimeout( function() {
//         console.log("Hellow", name)
//     } ,miliSec)
// }
// delayGreeting("imran", 2000);




// task -3:
function tellJoke(count){
    console.log(count + ". "+"Why dont scintists trust atoms")
}

let count = 0;
const jokeInterval = setInterval( () =>{
    count++;
    if(count === 5){
        clearInterval(jokeInterval)
    }
    
    tellJoke(count);

} , 2000)