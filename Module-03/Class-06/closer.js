// Closer -------->>  kono akta function er vitore arek ta function k kono vinno vinno variable er moddhe store kore rakhle every veriable 1 theke count kora start kore. 

function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}

const wathch1 = stopWatch();
console.log(wathch1());
console.log(wathch1());
console.log(wathch1());
console.log(wathch1());

const watch2 = stopWatch();
console.log(watch2());
console.log(watch2());

console.log(wathch1());

const watch3= stopWatch();
console.log(watch3())