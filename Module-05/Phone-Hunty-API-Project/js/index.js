const loadPhone = async (searchFieldText= 13, showAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchFieldText}`)
    const data = await res.json()
    const phones = data.data;
    displayPhones(phones, showAll)
}

const displayPhones = (phones, showAll) => {
    console.log(phones);


     // handle show more button and Product not found content
     const outOfStock = document.getElementById("outOfStock");
     const showMoreButton = document.getElementById("show-all-phone");
     if(phones.length > 12 && !showAll){
        showMoreButton.classList.remove("hidden");
        outOfStock.classList.add("hidden")
     }
     else if(phones.length === 0){
        showMoreButton.classList.add("hidden");
        outOfStock.classList.remove("hidden")
     }
     else{
        showMoreButton.classList.add("hidden");
        outOfStock.classList.add("hidden")
     }

    // only 1st 12 phones show now.
    if(!showAll){
        phones = phones.slice(0, 12);
    }

   


    const phonesContainer = document.getElementById("phone-container");

    // if research phones,, than clear previous phones
    phonesContainer.textContent = "";

    phones.forEach(phone => {

        const phoneCard = document.createElement("div");


        phoneCard.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-center">
            <button onclick="showDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
          </div>
        </div>
      </div>
        `
        phonesContainer.appendChild(phoneCard)

    })

    loadingSpiner(false);

}

// search button
const handleSearch = (showAll) => {
    const searchField = document.getElementById("search-field");
    const searchFieldText = searchField.value;

    loadingSpiner(true);

    loadPhone(searchFieldText, showAll)
}


// handle loading spiner
const loadingSpiner = (isTrue)=> {
    const loadingSpinerElement = document.getElementById("loading-spinner");

    if(isTrue){
        loadingSpinerElement.classList.remove('hidden')
    }
    else{
        loadingSpinerElement.classList.add("hidden");
    }

}


// handle show more button 
const handleShowAll = () => {

    handleSearch(true)
}

// Show details for modal
const showDetails =async (ip)=> {
    const res = await fetch(` https://openapi.programming-hero.com/api/phone/${ip}`)
    const data = await res.json();
    const phone = data.data;
    showPhoneDetails(phone)
}

// append now modal with phone details
const showPhoneDetails = (phone) => {
    console.log(phone)

    const modal = document.getElementById("show-detail-container");
    modal.innerHTML = `
        <img class="mx-auto mb-3" src="${phone.image}" />
        <h3 id="show-detail-phone-name" class="font-bold text-center text-lg">${phone.name}!</h3>
        <p>Storage: <span> ${phone?.mainFeatures?.storage || "This feature not avilable"} </span> </p>
        <p>chipSet: <span> ${phone?.mainFeatures?.chipSet} </span> </p>
    `

   
    // show the modal
    my_modal_5.showModal()
}


loadPhone();