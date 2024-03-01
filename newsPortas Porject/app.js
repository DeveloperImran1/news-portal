const loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data = await res.json()
    const dataArr = data.data.news_category

    // get catedory button container 
    const categoryContainer = document.getElementById('category-bar-container');
    dataArr.forEach((item) => {
        // console.log(item)

        const newButton = document.createElement('button');
        newButton.innerHTML = item.category_name;
        newButton.className = 'button-style'

        categoryContainer.appendChild(newButton);
        newButton.addEventListener('click', () => {
            handleButton(item.category_id)
        })
    })
    // console.log(dataArr)
}


const handleButton = async (id) => {

    // loading speaner add 
    document.getElementById('loading-spiner').style.display= 'block' ;

    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    const data = await res.json()
    const dataContent = data.data;

    // get cardContainer element
    const cardContainers = document.getElementById('news-container')
    console.log(dataContent)
    cardContainers.innerHTML = "";

    // loading spiner remove
    document.getElementById('loading-spiner').style.display= 'none' ;

    dataContent.forEach((singleNews) => {
        console.log(singleNews)
        const newDiv = document.createElement('div');
        
        newDiv.innerHTML = `
        <div class="news-photo">
        <img style= "width: 100%; "
          src=${singleNews.image_url}
          alt=""
        />
      </div>
      <div class="news-info">
        <div class="news-header">
          <h4>${singleNews.title.slice(0, 20)}</h4>
          <p class="news-badge">
          ${singleNews.rating.badge} <sup> <h6 class="news-rating"> ${singleNews.rating.number
            }</h6></sup>
          </p>
        </div>
        <p>
        ${singleNews.details.slice(0, 200)}
        </p>

        <div class="news-footer">
          <div class="author">
            <div class="">
              <img
                class="author-img"
                src=${singleNews.author.img}
                alt=""
              />
            </div>
            <div class="author-info">
              <h6> ${singleNews.author.name}</h6>
              <p>Date: ${singleNews.author.published_date}</p>
            </div>
          </div>
          <div class="Views author">
            <img
              class="view-img"
              src="https://uxwing.com/wp-content/themes/uxwing/download/health-sickness-organs/view-icon.png"
              alt=""
            />
            <p>${singleNews.total_view}</p>
          </div>
          <div class="details-btn-container">
            <button onclick="handleDetails(${JSON.stringify({ name: "gias" })})" class="details-btn">Details</button>
          </div>
      </div>
    </div>
        `

        cardContainers.appendChild(newDiv)
    })


}



document.getElementById('search-btn').addEventListener('click', ()=>{
    const inputField = document.getElementById('search-box').value;
    if(inputField){
        handleButton(inputField)
    }else{
        alert ("Please provie a valid id")
    }
})

handleButton('01')

loadData()