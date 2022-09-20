const rock = "Rock";
const paper = "Paper";
const scissor = "Scissor";
let playerInput;
let computerInput;

const gameChoices = [rock, paper, scissor];

function startGame() {
    playerInput = prompt("Scegli tra Rock, Paper e Scissor");
    getComputerChoice(gameChoices);
    playerSelection(playerInput, gameChoices);
    game(playerInput, computerInput);
}

function getComputerChoice(gameChoices) {
    computerInput = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    console.log("Scelta computer" + " " + computerInput);
    return computerInput;
}

/* funzione selezione giocatore:
FOR gameChoices
IF playerInput equals array item
put the playerInput in result variable
RETURN result


 */
function playerSelection(playerInput, gameChoices) {
    for (let i = 0; i <= gameChoices.length - 1; i++) {
        if (playerInput.toUpperCase() === gameChoices[i].toUpperCase()) {
            playerInput = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
            return console.log("Scelta giocatore" + " " + playerInput);
        } 
    }    
        console.log("Inserire Rock, Paper o Scissor");
        startGame();
}

/*  Rock > Scissor
    Rock = Rock
    Paper > Rock
    Paper = Paper
    Scissor > Paper
    Scissor = Scissor
 */

function game(playerInput, computerInput){
    if(playerInput === rock){
        if (computerInput === scissor){
            return console.log("The player wins. Rock beats Scissor");
        } if (computerInput === rock){
            return console.log("Tie!");
        } else return console.log("The computer wins. Paper beats Rock");
    }

    if(playerInput === paper){
        if (computerInput === rock){
            return console.log("The player wins. Paper beats Rock");
        } if (computerInput === paper){
            return console.log("Tie!");
        } else console.log("The computer wins. Scissor beats Paper");
    }

    if(playerInput === scissor){
        if (computerInput === paper){
            return console.log("The player wins. Scissor beats Paper");
        } if (computerInput === scissor){
            return console.log("Tie!");
        } else console.log("The computer wins. Rock beats Scissor");
    }
}


startGame();