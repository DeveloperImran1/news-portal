// How to create a promice - pending, resolve, reject
const promise1 = new Promise( (resolve, reject) =>{
    let completedPromice = true;
    if(completedPromice){
        resolve("completed promice 1")
    }
    else{
        reject("not completed promise 1")
    }
} );

// console.log(promise1);   // promise er mddhe catch(), finaly(), then() namer 3ta object ase.

promi