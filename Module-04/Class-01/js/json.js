/**
 *  JS er jekono value ba object k json a convert korte JSON.stringify(value) dita hoi.
 *  Abar JSON er kono string k js a convert korte JSON.parse(jsonString)
 */


const user = {id: 1, name:"Imran", job: "khawa dawa", home: 'nanir bari', 5: "5 ta bia korer chinta ase"};;
const stringified = JSON.stringify(user);   // JSON.stringigy(jekono value). jekono value k string er moto kore .

// console.log(user);
// console.log(stringified);
// Output: {
//   '5': '5 ta bia korer chinta ase',
//   id: 1,
//   name: 'Imran',
//   job: 'khawa dawa',
//   home: 'nanir bari'
// }
// {"5":"5 ta bia korer chinta ase","id":1,"name":"Imran","job":"khawa dawa","home":"nanir bari"}  --->> JSON




const shop = {
    owner: "Alia",
    address: {
        street: "kochukhet voot er goli",
        city: "ranbir",
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
console.log(shop);
console.log(typeof shop);    // Ouput: Object 

// JS er jekono value ba object k json a convert korte JSON.stringify(value) dita hoi.
const shopJSON = JSON.stringify(shop);
console.log(shopJSON)
console.log(typeof shopJSON);    //Output: String


// Abar JSON er kono string k js a convert korte JSON.parse(jsonString)
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);    // ager real js object hoia gese.
