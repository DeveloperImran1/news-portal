const products = [
    {id: 1, name: "lenevo", price: 65000},
    {id: 2, name: "dell", price: 45000},
    {id: 3, name: "hp", price: 40000},
    {id: 4, name: "mac", price: 15000}
];

// class--> class name er first letter capital letter dia likha hoi. class er moddhe propery and method thakte pare. ai class er moddhe variable ba function likhle function ba var, const , let ai keyword likhta hoina. and call korar somi new keyword ta dita hoi.
class Product{

    country = "Bangladesh";
    speak(talk){
        console.log(`Talking about ${talk}`)
    };
    constructor(name){
        this.name = name;  // name namer akta property create hobe. jar value hobe new Product("er moddhe jei argument dibo.");
        // Output: Product { country: 'Bangladesh', name: 'le le lenovo' }
    }
}
const lenevo = new Product("le le lenovo");
console.log(lenevo);
lenevo.speak("oba kita kow!");   // speak function k call kore dilam "oba kita kow" ai perameter dia.




// ---------->>> same kajta arekta example dia kori.
class Teacher{
    constructor(name, subject){  // aikhane coustructor keyword ta fixed. banan vul hole hobena. er moddhe jei jei perameter nibo. ta new Teacher(arguments) k call korer somoi pathia dita hobe.
        this.name = name;
        this.subject = subject;    // subject name akta property create hobe Teacher class er jar value hobe perameter a asa name, subject. ai property and name dia akta object create hoi.

    }
    lecture(){
        console.log("sir is teaching Math.")
    }
}
const tapan = new Teacher("Tapon sir", "Physics");
console.log(tapan);    // Output: Teacher { name: 'Tapon sir', subject: 'Physics' }

const rahid = new Teacher("Rashid", "Engligh");
console.log(rahid);    // Output: Teacher { name: 'Rashid', subject: 'Engligh' }