// google theke json placeholder likha search dila akta website theke ai code ta paoa jabe.

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => console.log(response))       // .json is not similar but close to JSON.parse() in about similar.
//     //   .then(json => console.log(json));




// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


// uporer code k aivabew likha jai.
// const url = 'https://jsonplaceholder.typicode.com/todos/1' ;
// fetch(url)
// .then(response => response.json())
// .then(json => console.log(json))


// uporer kajta function er maddhome likha html a button a oncilck a call call kore diasi.
function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}