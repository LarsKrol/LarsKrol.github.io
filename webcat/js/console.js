console.log("Console game loaded");
// haal de class van html pagina
const restultElement = document.querySelector('.result');
// fetch data van json.data
function fetchData(url){
    fetch(url)
        .then(myData => myData.json())
        .then(myJsonData => showData (myJsonData));
}
// show data van json op mijn pagina
function showData(myJsonData){
    for(let i = 0; i < myJsonData.length; i++){
        const element = myJsonData[i];
        const card = createCard(element);
        restultElement.innerHTML += card;
    }
}
// maakt een card van de json data
function createCard(element){
    const card = `
    <div class="col d-flex align-content-stretch mb-5 p-3 mx-2 mt-5">
        <div class="card">
            <img class="card-img-top"src="${element.img}" alt="Title">
            <div class="card-body">
                <h4 class="card-title">${element.title}</h4>
                <p class="card-text">${element.description}</p>
            </div>
        </div>
    </div>
`;
return card;
}