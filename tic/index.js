
let scoreX = 0; //basis score
let scoreO = 0;




const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [//alle winnende combos
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""]; 
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame(){ //kijkt of het spel is begonen 
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !running){
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X"; //kijkt wie der aan de beurt is
    statusText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){ //deze functie checked de winner
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }
    if(roundWon){
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
        if(currentPlayer == "X"){
            scoreX++;//dit geeft x punten als hij wint
            document.querySelector("#scoreX").textContent = scoreX;
        }
        else{
            scoreO++;//dit geeft x punten als hij wint
            document.querySelector("#scoreO").textContent = scoreO;
        }
    }
    else if(!options.includes("")){ //als er geen winnende combo geeft dit aan dat het gelijk spel is
        statusText.textContent = `Draw!`;
        running = false;
    }
    else{
        changePlayer();
    }
}
function restartGame(){ // dit reset het board
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}
const resetScoreBtn = document.querySelector("#resetScoreBtn");//dit reset de score
resetScoreBtn.addEventListener("click", resetScore);
function resetScore() {
    scoreX = 0;
    scoreO = 0;
    document.querySelector("#scoreX").textContent = scoreX;
    document.querySelector("#scoreO").textContent = scoreO;
  }
  