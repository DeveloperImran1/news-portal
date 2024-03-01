// Task-1:

const multiply = (x, y, z) => x*y*z;
console.log(multiply(2,4,6));    // Output: 48;

//Task-2:
const threeLines = `I am a web developer. 
I love to code. 
I love to eat biryani.
`
console.log(threeLines)

// Task-3:
const add = (a, b=0) => a+b;
console.log(add(2));

//Task-4:
let newArr = [];
const evenLen = (myArr) => {
    for(const friend of myArr){
        if(friend.length %2 === 0){{
            newArr.push(friend);
        }}
    }
    return newArr;
}
const friends = ["Imran", "Raju", "Taslima", "Jamila", "Rajia"];
console.log(evenLen(friends))


// Task-5:
let sum = 0;
let count = 0;
const average = (myArr) => {

    for(const number of myArr){
        const square = number*number;
        sum += square;
        count++;
    }
    // return sum / myArr.length;
    return sum / count;
}
const numbers = [2, 4, 5, 6, 7, 8];
console.log(average(numbers));


// Task -6: maximum number generate koro,, 2 ta array er moddhe theke
const maxNum = (arr1, arr2) =>{
    const newArr = [...arr1, ...arr2];
    const max = Math.max(...newArr)
    return max
}
const arr1= [2, 3,4,5, 6, 7];
const arr2 = [10, 12, 14, 19];
console.log(maxNum(arr1, arr2));



// ---------------------->>>>>>>>>>>
// Main Difference of arrow function and Regular function
// ES6 far arrow function 
var javascript = {
    name: "Javascript",
    libraries: ["React", "Angular", 'Vue'],
    printLibraries: function(){
        console.log(this);    // aikhane tihs k paoa jabe.
        var self = this;       // regular function a kono buld in function er moddhe this k dhora jaina . so buldIn function er bahira this k arekta variable er moddhe rakha hoisa. jeno regular function ba js build in function er vitor this k pao jai.
        this.libraries.forEach(function (a){ 
            console.log(`${this.name} loves ${a}`);  // aikhane this k mane javascript full object k paoa jabena. Karon forEach() akta js buuld in function. er moddhe this k dhora jaina. Ar aijonnoi arrow function es6 nia asece. jar moddhe this keyword k dhora jai.
        });
    }
}


// ES6 er new vertion a kono bulidin function er vitorew tihs k dhora jai.
var javascripts = {
    name: "Javascript",
    libraries: ["React", "Angular", 'Vue'],
    printLibraries: function(){   
        console.log(this);    // aikhane tihs k paoa jabe.
        this.libraries.forEach( (a) => {      // forEach mehod er maddhome libraries er every element asbe and forEach method er moddher function ra call hobe.
            console.log(`${this.name} loves ${a}`);  // Aikhane this k use kora jabe. karon forEach function k arrow function er moddhe likha hoisa.
        });
    }
}
javascripts.printLibraries();