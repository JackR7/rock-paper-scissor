const rock = "Rock";
const paper = "Paper";
const scissor = "Scissor";
var playerInput;
var computerInput;
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

const gameChoices = [rock, paper, scissor];

function startGame() {
    game();
}

// assign prompt input to playerInput
function assignPlayerInput() {
    playerInput = prompt("Choose one between Rock, Paper and Scissor");
}

// assign a random pick from gameChoises array to computerInput
// return computerInput
function computerSelection(gameChoices) {
    computerInput = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return computerInput;
}

// call assignPlayerInput function
// FOR gameChoisesArray to check IF playerInput is inside gameChoise array
// return playerInput with first character capitalize
// in case the program does not enter in the FOR cycle log a message and call function startGame
function playerSelection(gameChoices) {
    assignPlayerInput();
    for (let i = 0; i < gameChoices.length; i++) {
        if (playerInput.toUpperCase() === gameChoices[i].toUpperCase()) {
            return playerInput = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
        }
    }

    console.log("Insert Rock, Paper or Scissor");
    startGame();
}



// Rock > Scissor
// Rock = Rock
// Paper > Rock
// Paper = Paper
// Scissor > Paper
// Scissor = Scissor


function round() {
    console.log("Player choose: " + playerSelection(gameChoices));
    console.log("Computer choose: " + computerSelection(gameChoices));
    if (playerInput === rock) {
        if (computerInput === scissor) {
            playerScore++;
            console.log("The player wins." + " " + playerInput + " " + "beats" + " " + computerInput);
            return console.log("Player points: " + playerScore + " - "
                + "Computer points: " + computerScore);
        } if (computerInput === rock) {
            console.log("Tie!");
            return console.log("Player points: " + playerScore + " - "
                + "Computer points: " + computerScore);
        } else
            computerScore++;
        console.log("The computer wins." + " " + computerInput + " " + "beats" + " " + playerInput);
        return console.log("Player points: " + playerScore + " - "
            + "Computer points: " + computerScore);
    }

    if (playerInput === paper) {
        if (computerInput === rock) {
            playerScore++;
            console.log("The player wins." + " " + playerInput + " " + "beats" + " " + computerInput);
            return console.log("Player points: " + playerScore + " - "
                + "Computer points: " + computerScore);
        } if (computerInput === paper) {
            return console.log("Tie!");
        } else
            computerScore++;
        console.log("The computer wins." + " " + computerInput + " " + "beats" + " " + playerInput);
        return console.log("Player points: " + playerScore + " - "
            + "Computer points: " + computerScore);
    }

    if (playerInput === scissor) {
        if (computerInput === paper) {
            playerScore++;
            console.log("The player wins." + " " + playerInput + " " + "beats" + " " + computerInput);
            return console.log("Player points: " + playerScore + " - "
                + "Computer points: " + computerScore);
        } if (computerInput === scissor) {
            return console.log("Tie!");
        } else
            computerScore++;
        console.log("The computer wins." + " " + computerInput + " " + "beats" + " " + playerInput);
        return console.log("Player points: " + playerScore + " - "
            + "Computer points: " + computerScore);
    }
}

function game() {
    for (let i = 0; i < 1; i++) {
        roundNumber = (i + 1);
        round(playerInput, computerInput);
    }
    console.log("Game ended. Player score: " + playerScore + ", " +
        "Computer score " + computerScore);
    if (playerScore > computerScore) {
        return console.log("The player win!");
    }
    else return console.log("You lose!");
}

/*startGame();
*/

let playerCard = document.querySelector('.player-selection');
let playerCardSelection;
playerCard.addEventListener('click', changePlayerSelection);

function changePlayerSelection(){
    playerCard = playerInput;
}