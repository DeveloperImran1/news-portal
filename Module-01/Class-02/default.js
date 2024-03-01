// default ---> if value is not provided , take this as a default.
// jodi  augument hisabe man patha dei kinto perameter a case na kori or pera meter a man nei but argument a na pathia dei kono problem hobena, jodi function er moddhe oi perameter k use na kori.

function add(num1 = 10, num2 = 0){
    const result = num1 + num2;
    console.log(num1, num2, result)
}
add(10, 4);
add(4);  // kono argument bad dila , ta undefined dekahbe. and kono number and undefined er sum NaN hoi.
add() ;
add(5, 7, 8)     

// string er default man hisabe cotation dewa hoi. " "
function fullName(first, last = ""){
    const full= first + " " + last;
    return full;
}

// Array er default man hisabe dewa hoi [] aita.
function friends(names = []){
    return names;
}

// abar Object er default value hisabe empty obj nea hoi.
function student(roll = {}){
    
}