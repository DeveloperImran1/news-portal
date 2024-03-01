function loadUsers2() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => displayUser2(data))
}
function displayUser2(data) {
    // perameter a asa data akta array,, jar every element akta kore object, loop chalia every element ba object k dhore name, phone, email etc data collect korte pari.
    // for(let user of data){
    //     console.log(user);
    //     console.log(user.name);
    //     console.log(user.phone);
    //     console.log(user.username);
    //     console.log(user.address);
    // }


    const ul = document.getElementById("usersUl");

    for (let user of data) {
        const li = document.createElement("li");
        li.innerText = user.name;
        ul.appendChild(li)
    }
}




// --------------------->>> Delete method
function deletePost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });

}
// ----------------------->>> Patching post
function patchAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'foo',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}


// ------------------>>  Crate a post
function createAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}