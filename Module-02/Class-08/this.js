/// More explain now this keyword:
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sleep(){
        console.log(`Sleeping now ${this.name}`);
    }

    activity(){
        this.sleep()
    }
}
const kodom = new Person("Imran", 28);
console.log(kodom)
kodom.activity();


// dot notation and bracket notation
const person={
    name: "Kodom Ali",
    job: "badam khai",
    3: "third",
    "ad-drees": "kochu khet"        // object er key name 2 ba tar besi hole cottation moddhe likhta hoi.
}
// console.log(person.name);
// console.log(person["name"]);
// console.log(person.3);   // aita kora jabena. karon property name akta number
console.log(person["3"]);
console.log(person[3]);  // cottation er moddhe dilw hobe. ba na dilew hobe. karon 3 akta number.

// console.log(person.ad-drees);   // aita kora jabena. karon key name 2 ba tar besi word er .
console.log(person["ad-drees"]);  // tokhon bracket notation use korte hobe.





/**
 * Accessing their property using dot notation:
 * obj.123; --> syntax error
 * obj.123name; --> syntax error
 * obj.name123; --> dose not start with digit. so right
 * obj.name-123; --> syntax erron
 * obj."name-123"; --> syntax error.
 * obj.$name; -->  so right
 * obj.name; -->  so right
 * obj.Name; -->  so right
 * 
 * But uporer sobgulo case ee bracket notation er moddhe use kore access kora jai.
 */