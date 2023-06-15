const resultElement=document.querySelector('.result')

fetch('https://mbo-sd.nl/period3-fetch/games-pc-epic-games')
.then(myData => myData.json())
.then(jsonData => showInConsole(jsonData));



function showInConsole(jsonData) {
    console.log(jsonData);
    for (let i = 0; i < jsonData.length; i++) {
        const element = jsonData[i];
        
        const card =createCard(element);
        resultElement.innerHTML+=card;

    }
}


function createCard(element) {
    const card=`
    <div class="col">
    <div class="card">
      <img class="card-img-top" src="${element.img}" alt="Title">
      <div class="card-body">
        <h4 class="card-title">${element.title}</h4>
        <p class="card-text">${element.price}</p>
        <p class="card-text">${element.description}</p>
      </div>
    </div>
    </div>
    `;

    return card
}
