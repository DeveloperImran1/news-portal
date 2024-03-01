// type coercian
// type conversion
//
 // false mane 0 and true mean kore 1 ke.

const first = [2,4];    
// const second = [2,4];  // aikhane first and second === hobena. karon non-primitive value check korar somoi refference match kora hoi. value same holew true hobe na . Jodi second = first; kori tahole 2 ta variable er refferrece same ase. so tara equal hobe.

// But array ba object er value same naki ta check korar jonno 2 ta array er moddhe dia loop kore akta akta kore value nia 2 ta array er value er sathe compare korbo. Than sobjulo value true hole, oi array ba objet 2 ta same.

const second = first;
if(first === second){
    console.log( "values are equal.")
}
else{
    console.log( "values are not equal.")

}