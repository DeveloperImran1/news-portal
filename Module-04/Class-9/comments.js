const comments = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error("error happened", error))   // uporer kono kaj a error khale ai catch er vitore ase error message and error ta console hobe.
}


// -------------->> uporer kajta async fucntion diaw kora jai.
// asyncronus function likhar jonno,, arrow function er curly bracks er age async ai keyword ta likhta hobe. and fetch er age await likhta hobe. ai await er main karon holo jei line a await likha hoi ,, oi line er kaj fully complete na howa porjonto next line a jaina. But uporer coder khetre ta hotona,, akta line er kaj complete na hoia porer line a jaito.
const loadComments2 = async () => {
    // try er moddhe main code ta likha hoi. ai main code a kono error hole ta catch er perameter jai. than catch er scope er moddhe error ta likha hoi. oi khane console.log() na likha console.error() likha hooi.    

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/comments");
        const data = await res.json();
        console.log(data);
    }
    catch (error) {
        console.error("data load error")
    }

}

