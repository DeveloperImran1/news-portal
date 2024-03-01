function loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => displayPosts(data))
}
function displayPosts(data) {
    const postContainer = document.getElementById("post-container");
    for (const post of data) {
   

        const div = document.createElement("div");
        div.classList.add("post")
        div.innerHTML = `
            <h3> User- ${post.id} </h3>
            <h4> Post: ${post.title} </h4>
            <p> Post Description: ${post.body} </p>
        `
        postContainer.appendChild(div)
    }

}
loadPosts()