//game

let playerChoice;
let computerChoice;
let roundWinner;
let playerScore = 0;
let computerScore = 0;

function round(playerChoice, computerChoice){

    switch(playerChoice){
        case "ROCK":
        if(computerChoice = "ROCK"){
            roundWinner = "TIE";
        }

        if(computerChoice = "PAPER"){
            roundWinner = "COMPUTER";
            computerScore++;
        }

        if(computerChoice = "SCISSOR"){
            roundWinner = "PLAYER";
            playerScore++;
        }
        break;
        case "PAPER":
            if(computerChoice = "ROCK"){
                roundWinner = "PLAYER";
                playerScore++;
            }
    
            if(computerChoice = "PAPER"){
                roundWinner = "TIE";
            }
    
            if(computerChoice = "SCISSOR"){
                roundWinner = "COMPUTER";
                computerScore++;
            }
        break;
        case "SCISSOR":
            if(computerChoice = "ROCK"){
                roundWinner = "COMPUTER";
                computerScore++;
            }
    
            if(computerChoice = "PAPER"){
                roundWinner = "PLAYER";
                playerScore++;
            }
    
            if(computerChoice = "SCISSOR"){
                roundWinner = "TIE";
            }
        break;
    }
}

// UI



let roundNumver = 0;
let input;

let playerSelection = document.getElementById('player-selection');
let computerSelection = document.getElementsByClassName('computer-selection');
const rockButton = document.getElementById('rock-btn');
const paperButton = document.getElementById('paper-btn');
const scissorButton = document.getElementById('scissor-btn');


rockButton.addEventListener('click', () => updatePlayerChoice("Rock"));
paperButton.addEventListener('click', () => updatePlayerChoice("Paper"));
scissorButton.addEventListener('click', () => updatePlayerChoice("Scissor"));

function updatePlayerChoice(input){    
    let img = document.createElement('img');
    img.src = `../rock-paper-scissor/img/${input}.png`;
    img.style.width = "100px";
    img.style.height = "100px";
    playerSelection.appendChild(img);
}
