// backtick ba template literal symboll er moddhe jaivabe likhbo seivabe output asebe. mane likhta likhta enter dia nicher line a jele oi vabei output asbe. 

const first = "Md"
const last = "Imran";
const great = "potash potash";
const name = first + " " + last + " " + great;
const names = `My name is : ${first} ${last} . hah ah a haah ahah my gerat is ${great}` ; //template literal ba backtick er moddhe easily likha jai. 
console.log(name)

const challenge = `John sina k cena cena lage. 
toi o cena nakki mair 
dimo procuhr.`
console.log(challenge);
//  ar oporer kajtai single ba double cottation er moddhe korle "\n" dia new line a jaita hoto
console.log("John sina k cena cena lage." + '\n'+ 
"toi o cena nakki mair " + "\n" + 
"dimo procuhr.")


const numbers = [45, 48, 98, 78];
const student = {name: 'john cena', age:  7};

const math = ` The sum of ${numbers[0]} and ${student.age} is ${numbers[0] + student.age}`;
console.log(math)