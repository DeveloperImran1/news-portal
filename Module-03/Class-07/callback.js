// function er perameter hisabe object, array , string, ba akta function kew pera meter hisabe dewa jai.

function greeting(myFunc, name){   // perameter a akta function and name nei. than oi function er vitore perameter a newa function er perameter a name k dia call kore dei.
    myFunc(name)
}

function greetingHandler(name){
    console.log("Good morning", name)
};

function greetEvening(name){
    console.log("Good Evening", name)
}

function greetNight(name){
    console.log("Good Night", name)
}


// greeting namer akta function k bivinno perameter dia call kore dissi.
greeting(greetingHandler, "Imran");
greeting(greetingHandler, "Raju");

greeting(greetEvening, "Raju");
greeting(greetEvening, "Taslima");

greeting(greetNight, "Jamila");
greeting(greetNight, "Rajia Apu");


// Uporer ai call back functin amra age use kortam add eventListener a ex.
function submitHandler(){
    console.log("Submit button clicked")
}
// document.getElementById("btn-submit").addEventListener("click", submitHandler);   // aikhane id newa hoiase "btn-submit" . jeita nei. tai error khabe. 