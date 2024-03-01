/**
 * Truthy value: 
 * 
 * true
 * any number (+ve, -ve) will be truthy other than 0. mane 0 bade positive or negative all number truthy
 * any string other than empty string. je kono text ba double cottation er moddhe space thaklew truthy value hobe.
 * "0" or "false" double cottation er moddhe 0 ba false jai likha hok oita string hisabe dhora hobe. ja akta truthy value. 
 * kono akta object ba array truthy value return kore. Seita empty array ba object holew.
 * 
 */

/**
 * Falsy value:
 * 
 * false
 * 0
 * empty string ("") double kottation er moddhe kono space thaka jabena. space thakle truthy value hobe.
 * undefined and null is a falsy value.
 */


const x = {jk: 8}
if(x){
    console.log("This value is truthy.")
}
else{
    console.log("This value is falsy.")
}


// truthy or falsy value naki ta check korar system holo:
if(variableName){
    // variable er value truty hole if block a dhokbe, ar falsy hole else bolck a dhokbe.
}

if(!variableName){
    // variable er value falsy hole if block a dhokba. ar truthy hole else block a jabe.
}

if(!!variableName){
    // variable value truety  hole if a dhokba.
}

// arekta system holo,, 
console.log(!!false);    // double not dia console korle true naki false ta output diba. 