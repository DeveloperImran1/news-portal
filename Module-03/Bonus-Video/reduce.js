const arr = [
    {name: "somenone 0", sallary: 100},
    {name: "somenone 1", sallary: 500},
    {name: "somenone 2", sallary: 200},
    {name: "somenone 3", sallary: 900},
];
const totalSallary = arr.reduce( (previous, current) => {
    console.log("Previous value "+ previous + " Current value: ", current.sallary)
    return previous + current.sallary;
} , 0);
console.log(totalSallary);


// var dia variable declare korle ,, derlare korar age condole ba use korle erron na dia undefined diba. and let, const er khetre error diba.
console.log(name);
var name = "Imran";
console.log(name);