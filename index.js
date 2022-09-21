const rock = "Rock";
const paper = "Paper";
const scissor = "Scissor";
var playerInput;
var computerInput;
let playerPoints = 0;
let computerPoints = 0;

const gameChoices = [rock, paper, scissor];
let gameChoisesLength = gameChoices.length;

function startGame() {
    game();
}

function assignPlayerInput() {
    playerInput = prompt("Choose one between Rock, Paper and Scissor");
}

function computerSelection(gameChoices) {
    computerInput = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return computerInput;
}

// funzione selezione giocatore:
// FOR gameChoices
// IF playerInput equals array item
// put the playerInput in result variable
// RETURN result

function playerSelection(gameChoices) {
    assignPlayerInput();
    for (let i = 0; i < gameChoices.length; i++) {
        if (playerInput.toUpperCase() === gameChoices[i].toUpperCase()) {
            return playerInput = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
        }
    }

    console.log("Inserire Rock, Paper o Scissor");
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
            playerPoints++;
            console.log("The player wins." + " " + playerInput + " " + "beats" + " " + computerInput);
            return console.log("Player points: " + playerPoints + " - "
                + "Computer points: " + computerPoints);
        } if (computerInput === rock) {
            console.log("Tie!");
            return console.log("Player points: " + playerPoints + " - "
                + "Computer points: " + computerPoints);
        } else
            computerPoints++;
        console.log("The computer wins." + " " + computerInput + " " + "beats" + " " + playerInput);
        return console.log("Player points: " + playerPoints + " - "
            + "Computer points: " + computerPoints);
    }

    if (playerInput === paper) {
        if (computerInput === rock) {
            playerPoints++;
            console.log("The player wins." + " " + playerInput + " " + "beats" + " " + computerInput);
            return console.log("Player points: " + playerPoints + " - "
                + "Computer points: " + computerPoints);
        } if (computerInput === paper) {
            return console.log("Tie!");
        } else
            computerPoints++;
        console.log("The computer wins." + " " + computerInput + " " + "beats" + " " + playerInput);
        return console.log("Player points: " + playerPoints + " - "
            + "Computer points: " + computerPoints);
    }

    if (playerInput === scissor) {
        if (computerInput === paper) {
            playerPoints++;
            console.log("The player wins." + " " + playerInput + " " + "beats" + " " + computerInput);
            return console.log("Player points: " + playerPoints + " - "
                + "Computer points: " + computerPoints);
        } if (computerInput === scissor) {
            return console.log("Tie!");
        } else
            computerPoints++;
        console.log("The computer wins." + " " + computerInput + " " + "beats" + " " + playerInput);
        return console.log("Player points: " + playerPoints + " - "
            + "Computer points: " + computerPoints);
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log("Round: " + (i + 1));
        round(playerInput, computerInput);
    }
    console.log("Game ended. Player score: " + playerPoints + ", " +
        "Computer score " + computerPoints);
    if (playerPoints > computerPoints) {
        return console.log("The player win!");
    }
    else return console.log("You lose!");
}

startGame();