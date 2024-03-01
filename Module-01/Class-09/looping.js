// for of use on array  or string not in object
// for in use on object.

const numbers = [2, 3, 5, 6, 7,8 , 9];
for(const num of numbers){
    console.log(num)
}

// array te jemon for of loop chala jai. temni,, string aw for of loop chala jai. But for loop object a chala jaina. jai tobe akto kahini kore.
const nobab = "Siraj ou doula! hmm...";
for (const letter of nobab){
    console.log(letter)
}


// ----------->.>>>>>>>
const glass = {
    name: "glass",
    price: 12,
    color: "golden"
}
for(const key in glass){
    // console.log(key);    // object er akta akta kore key diba.
    // const value = glass.key;  // Aivabe object er value k paoa jabena. karon key akta variable hisaba ase. so property name jodi variable hisabe thake tahole objectName[key er variable name] dita hoi.
    const value = glass[key]
    console.log(value)
}

// for of use kore korte hole age key gulo k array  te kore nita hobe.
const keys = Object.keys(glass);
for(const key of keys){
    console.log(glass[key])    // glass object er moddhe key gulo k pathia disi.
}