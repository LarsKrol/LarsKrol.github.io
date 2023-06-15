function start(params) {
    addTextToBody("He");
    showRules();

}
function addTextToBody(params){
    document.body.innerHTML += params
}
function showRules(params){
    const ruleView = document.querySelector(".rules");
    ruleView.innerHTML = "<h1> Dit zijn de regels </h1>";
}

function showRules(params){
    const ruleView = document.querySelector(".rules");
    ruleView.innerHTML = "<p> test </P>";

const welcome="welcome to my game";
alert(welcome)
const regels =`dit zijn de korte regels voor het spel hoger lager
de bank gooit een dobbelstenen 
dan gok je of de volgende gooi hoger of lager is
 als je gelijk hebt krijg je een punt
 als je het fout hebt verlies je een punt
 als het gelijk is verlies je ook een punt
 je begint met 0 punten`;
alert(regels)
const naam = prompt('Wat is je naam', 'naam');
    alert(`Jouw naam is ${naam}`); 
    let punten=0;

    for (let i = 1; i < 10; i++) {
        console.log(i);
        alert(`je hebt nu punten ${punten}`);
    let number=Math.floor(Math.random() * 6 )+1;
    alert("de bank gooit "+ number )
    const result = prompt('denk je dat de volgende gooi hoger of lager is?', 'hoger of lager?');
    let number2=Math.floor(Math.random() * 6 )+1;
    alert("de bank gooit "+ number2)
    if (result== "hoger") {
        if ( number2 > number ) {
            alert('je hebt gewonnen');
            (punten++)
        }else{
            alert('je hebt verloren ');
            (punten--)
        } 
    }
    if (result== "lager") {
        if ( number2 < number) {
            alert ('je hebt gewonnen');
            (punten++)

            
        }else{
            alert ('je hebt verloren ');
            (punten--)
        } 
    }
}
}
