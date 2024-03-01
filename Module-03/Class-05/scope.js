function add(a, b) {
    const total = a + b;
    if (b > 5) {
        const sum = 25 + a + b;

    }
    else {
        const sum = 5 + a + b;
        var current = sum;
    }
    console.log(current);    // current k paoa jabe.
    // console.log(sum);   // aikhane sum k access kora jabena. karon if , else block er bahira access kora jabena. karon const dia desclare kora hoisa.
    return total;
}
add(14, 3);
// console.log(a, b);


// var keyword dia kono value assign korle ,, oi value k sobar upore nia jai. and take jekono jaiga theke access kora jai. same way te var, let, const ai keyword sara sudho akta function declare kora hole, oi function k hoisting kore sobar upore nia jai. so function likhar upore call korlew somossa nai.

prints5()   // function er oporew call kora jasse. kinto const ba let dia declare korle upor theke call kora jetona.
function prints5(){
    console.log("inside prints", 5)
}
