const glass = {
    name: "glass",
    color: "golden",
    price: 12,
    isCleaned: true
};

const keys = Object.keys(glass);
console.log(keys);  //Output: [ 'name', 'color', 'price', 'isCleaned' ]    akta array output dei.

const values = Object.values(glass);
console.log(values);    //Output: [ 'glass', 'golden', 12, true ]

// array of array , tow dimentional array.
const entries = Object.entries(glass);
console.log(entries);   // Akta array er moddhe object er key and value 2 ta element nia arakta array create korese.
// Output: [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
//   ]


// delete glass.isCleaned;   // delete main object k change kore.
// console.log(glass)     //Output : { name: 'glass', color: 'golden', price: 12 }

const {isCleaned,price, ...shortGlass} = glass;   // {er moddhe 1st a jei koita property name dibo seigulo bade , baki property and value dia new akta object cerate hobe. three dot dia jei nam dibo new object er name oita hobe.}
console.log(shortGlass);    // Output: { name: 'glass', color: 'golden' }


// freze ----> kono object k freze korle oi object a new property add kora , property value change , ba delete kora jabena.
// Object.freeze(glass);
// glass.price = 5000;
// delete glass.name;
// console.log(glass); //output : main object ee thakbe. karon oi object k freeze kora rakha hoiase.



// seal ---->  // property value change kora jabe. But new property create ba delete kora jabena.
Object.seal(glass);
glass.price = 5000;   // Aita kaj  korbe.
delete glass.name;
glass.source = "Bangladesh";
console.log(glass);   // Output: { name: 'glass', color: 'golden', price: 5000, isCleaned: true }