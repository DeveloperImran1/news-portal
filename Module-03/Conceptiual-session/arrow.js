// nested object theke destucturing korar niom.

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



// map(), forEach(), filter(), find(), reduce() ara sobai every iterate a sudho element ee neina. every iterate a element, index, and full array k perameter hisabe nita pare. 

const numbers = [10, 20, 30, 40];
numbers.map((item, index, arr) => {
    console.log("item", item + "index", index + "array: ", arr )
});




// calback function fun --->>>> Bar Bar exicute hotei thakbe, so ctrl + c chape off korte hobe exicute. 
// function person1(name, callback){
//     console.log(name, "sala toi bod");
//     callback("Borsha", person1)
// }
// function person2(name, callback){
//     console.log(name, "toi sala bisni");
//     callback("Imran", person2)
// }
// person2("Borsha", person1);



// Class
class Animal {
    name;
    color;
    constructor(petName, petColor){
        this.name = petName;
        this.color = petColor;

    };
    // aikhane sudho method ee noi,, function o add kore rakha jai.
    showInfo(){
        console.log(`my pet name is: ${this.name}. Color is ${this.color}` )
    }
};

const cat = new Animal("travels", "white");   // cat name a akta object create hobe. Animal class er maddhome.
const dog = new Animal("tom", "black");   
console.log(cat.color);
console.log(dog.color);
console.log(cat);

cat.showInfo();    // showInfo function k call korte ,, aivabe korte pari.
dog.showInfo();


// class with inheritance
class Owner{
    ownerName;
    ownerAge;
    constructor(name, age){
        this.ownerName = name;
        this.ownerAge = age;
    };
    ownerInfo(){
        console.log(`ownerName: ${this.name}. ownerAge: ${this.ownerAge}`)
    }
};

class Human extends Owner{
    name;
    color;
    constructor(petName, petColor, wName, wAge){
        super(wName, wAge);
        this.name = petName;
        this.color = petColor;
    };
    showInfo(){
        console.log(`My pet name is ${this.name}, color is ${this.age}`)
    }
};

const cats = new Human ("Milon", "gray");
cats.showInfo()


// function er perameter a distructure kora jai.
const man = {
    name: "Imran",
    age: 19
};

// function er vitore distructure korlam. 
// const showInfo = (props) => {
//     const {name, age} = props;
//     console.log(name, age)
// }
// showInfo(man);

// uporer function er vitore distucturing kore object er property k na dhore ,, direct function er perameter ew object er property er value k dhora jai.
const showInfo = ({name, age} ) => console.log(name, age);
showInfo(man);