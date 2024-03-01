// normaly kono code a error khale oi line er porer line ar exicute hoina. So, try{} block er moddhe main code rakhle jodi kono error khai. ta carch(error) {} carch er peramater a dhore oi error take handle korte pari. Tahole errror aslew porer line er code gulo exicutoin stop thakbena.

// sobar last a thake finaly{} ai block er moddhe ja korbo seita hobeii,, try er moddhe code error khalew ai block exicute hobe, ar na khalew exicute hobee.

function checkAge() {
    const ageField = document.getElementById("ageInput");
    const ageText = ageField.value;
    const errorTag =  document.getElementById("error");
    
    try{
        // console.log(ageTexdt);  // false variable

        // coding a kono vul hole automaticaly catch er moddhe oi error ta jabe.  Abar amra kono condition diaw custom vabe ,, oi condition match na korle throw keyword er maddhome catch er moddhe oi error message k pathate pari. ex:
        
        const age = parseInt(ageText);
        if(isNaN(age)){
            throw "Please enter a number";  // ai throw keyword er porer mesage ta catch er perameter hisabe dynamicaly jabe.
        }
        else if(age < 18){
            throw "batcha kassa not alow"
        }
        errorTag.innerHTML = ""

    }
    catch(err){
        console.log(err)
        errorTag.innerHTML = "ERROR: "+ err;
    }
    finally{
        console.log("All done inside try catch")
    }

   
}