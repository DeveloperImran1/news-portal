// set initial id of buttonHandler
let initialId = 1000;

// initial value of sort
let sortedWatch = false;

// sort view value true , if click the sort button
document.getElementById('sort-btn').addEventListener('click', ()=> {
    sortedWatch= true;
    buttonHandler(initialId)
})


// load all data
const loadData = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories")
    const data = await res.json()
    const dataArr = data.data;

    displayData(dataArr, sortedWatch)
}

const displayData = (dataArr) => {
    // get button container element
    const buttonCotainer = document.getElementById('btn-container');

    dataArr.forEach(dataElement => {
        console.log(dataElement["category_id"]);
        const newButton = document.createElement('button');
        newButton.innerHTML = dataElement.category;
        newButton.className = "btn loopingClass btn-ghost bg-slate-700 text-white text-lg";

        newButton.addEventListener('click', () => {
            buttonHandler(dataElement['category_id'])

            // add background color of selected button
            const allButton = document.querySelectorAll('.loopingClass');
            for (let button of allButton){
                button.classList.remove('bg-red-600')
            }
            newButton.classList.add('bg-red-600')

        })
        buttonCotainer.appendChild(newButton)
    })
    console.log(dataArr)
}


// get card container element
const cardContainer = document.getElementById('card-container');



const buttonHandler = async (id) => {
    const cardRes = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const cardData = await cardRes.json()
    const cardDataArr = cardData.data;
    console.log(cardDataArr);

    // sorted arr in watch time
    if(sortedWatch){
        cardDataArr.sort(  (a,b) => {
            let firstElementView= a.others.views;
            let secondElementView= b.others.views;

            let firstElementViewNum = parseFloat(firstElementView.replace('K', "")) || "hii"
            let secondElementViewNum = parseFloat(secondElementView.replace('K', "")) || "hii"

            return  secondElementViewNum - firstElementViewNum ;
           
        })
    }

 
    // clear previous card 
    cardContainer.innerHTML = '';

    // show error element if no card of this category
    const errorElement = document.getElementById('error-element');
    if (cardDataArr.length === 0) {
        errorElement.classList.remove('hidden')
    } else {
        errorElement.classList.add('hidden')
    }




    cardDataArr.forEach(singleCard => {

        // checking verified badge,, and update badge
        let verifiedBadge = '';
        if (singleCard.authors[0].verified) {
            verifiedBadge = `<img class="w-6 h-6" src="./images/verify.png" alt="">`
        }

        // set now time with dynamic
        let videoTime = '';
        if(singleCard.others['posted_date']){
            let miliSecond = singleCard.others['posted_date'];
            let second = parseInt(miliSecond / 1000);
            let minute = parseInt(second / 60);
            let hour = parseInt(minute / 60);

            second = second % 60;
            minute = minute % 60;
            hour = hour % 60;

            videoTime = ` <h6 class="absolute bottom-[40%] right-12">${hour} hr ${minute} min ${second} sec</h6>`
        }
        console.log(singleCard.others['posted_date'])

        // create a div for single card
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
    <div class="card w-full bg-base-100 shadow-xl">
    <figure class="overflow-hidden h-72">
        <img class="w-full" src="${singleCard.thumbnail}" alt="Shoes" />
        ${videoTime}
    </figure>
    <div class="card-body">
        <div class="flex space-x-4 justify-start items-start">
            <div>
                <img class="w-12 h-12 rounded-full" src="${singleCard.authors[0]['profile_picture']}" alt="Shoes" />
            </div>
            <div>
                <h2 class="card-title"> ${singleCard.title}</h2>
                <div class="flex mt-3">
                    <p class="">${singleCard.authors[0]['profile_name']}</p>
                    ${verifiedBadge}
                </div>
                <p class="mt-3">${singleCard.others.views}</p>
            </div>
        </div>
    </div>
    </div>
    `

        cardContainer.appendChild(newDiv)

    })

}


loadData()

// defautl value set buttonHandler
buttonHandler(initialId)