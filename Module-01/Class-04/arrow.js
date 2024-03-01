// function declaretion --> function keyword, function name , perameter thake
function add(a, b){
    return a+b;
}
console.log(add(3,4));

// function expression 
const add2 = function(a, b){    //aikhane add2 function er nam bola jai. Aita anonymus function. jar name nei.
    return a+b;
}
console.log(add2(9, 10))

// arrow function   ===>>>>>> arrow function er name nei, function keyword dewa lagena and second bracket o deoa lagena.
const add3 = (a, b) => a+b;
console.log(add3(5, 7));

const sum = (a, b, c, d, e) => a+b+c+d+e ;
console.log(sum(10, 20, 30, 40, 50))

const add4 = (a,b) => {    // second bracket er moddhe likhla return keyword dita hoi. tasara uporer niom a use kora hoi.
    return a*b ;
}
console.log(add4(3, 5))



// arrow function and regular funciton er moddhe different holo:
// Arrow function dont have their own this. mane this keyword er moaddhome tar nijer keyword k dhorte parena. Ar Regular function this keyword k dhore kaj koorte pare.

let me = {
    name: "Imran", 
    thisInArrow: () => console.log("My name is " + this.name)   // aikhane this keyword me object k dhorte pareni.
}
me.thisInArrow();

let she = {
    name : "Sadia",
    thisIsArrow: function() {
        console.log("Shes name is "+ this.name)   // aikhane this keyword she object k dhorte parbe.
    }
        
}
she.thisIsArrow()