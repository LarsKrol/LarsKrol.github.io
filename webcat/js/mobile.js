// Added the html class to js
const resultElement = document.querySelector(".result");
// Fetching data from json 
function fetchData(url) {
    fetch(url)
    .then (myData => myData.json())
    .then (myJsonData => showData (myJsonData));
}

// show the json data in html plage
function showData(myJsonData){
    for (let i = 0; i < myJsonData.length; i++) {
        const element = myJsonData[i];
        const card = createCard(element);
        resultElement.innerHTML += card;
    }
}

// creating card for the json code 
function createCard(element){
    const card = `
    
<div class="col d-flex align-content-stretch">
<div class="card text-start">
  <img class="card-img-top" src="${element.img}" alt="Title">
  <div class="card-body">
    <h4 class="card-title">${element.title}</h4>
    <p class="card-text">${element.description}</p>
  </div>
</div>
</div> `;
return card;
}