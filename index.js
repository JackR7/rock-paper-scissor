const rock = "Rock";
const paper = "Paper";
const scissor = "Scissor";
let input;



const gameArray = [rock, paper, scissor];

function startGame() {
    input = prompt("Scegli tra Rock, Paper e Scissor");
    console.log("Scelta computer" + " " + getComputerChoice(gameArray));
    console.log("Scelta giocatore" + " " + playerSelection(input, gameArray));
}

function getComputerChoice(gameArray) {
    /* ritornare numero random tra 0 e 2 */
    let result = gameArray[Math.floor(Math.random() * gameArray.length)];
    return result;
}

function playerSelection(input, gameArray) {
    let result;
    for (let i = 0; i <= gameArray.length - 1; i++) {
        /* check if input string is inside the array */
        if (input.toUpperCase() === gameArray[i].toUpperCase()) {
            result = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
        } 
    } 
    return result;
}




startGame();


