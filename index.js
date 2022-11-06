//game
let roundNumber = 0;
let playerChoice;
let computerChoice;
let roundWinner;
let gameWinner;
let playerScore = 0;
let computerScore = 0;
let gameFinish = false;

function assignComputerChoice(){
    let number = Math.floor(Math.random() * 3);
    switch (number){
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissor";
            break;
    }
}


function round(playerChoice, computerChoice){

    switch(playerChoice){
        case "Rock":
        if(computerChoice === "Rock"){
            roundWinner = "TIE";
        }

        if(computerChoice === "Paper"){
            roundWinner = "COMPUTER";
            computerScore++;
        }

        if(computerChoice === "Scissor"){
            roundWinner = "PLAYER";
            playerScore++;
        }
        break;
        case "Paper":
            if(computerChoice === "Rock"){
                roundWinner = "PLAYER";
                playerScore++;
            }
    
            if(computerChoice === "Paper"){
                roundWinner = "TIE";
            }
    
            if(computerChoice === "Scissor"){
                roundWinner = "COMPUTER";
                computerScore++;
            }
        break;
        case "Scissor":
            if(computerChoice === "Rock"){
                roundWinner = "COMPUTER";
                computerScore++;
            }
    
            if(computerChoice === "Paper"){
                roundWinner = "PLAYER";
                playerScore++;
            }
    
            if(computerChoice === "Scissor"){
                roundWinner = "TIE";
            }
        break;
    }
    roundNumber++;

    if (playerScore > computerScore){
        gameWinner = 'PLAYER';
    } 

    if (computerScore > playerScore){
        gameWinner = 'COMPUTER';
    }

    if(playerScore === computerScore){
        gameWinner = 'TIE';
    } 

}

// UI




let input;

let playerSelection = document.getElementById('player-selection');
let computerSelection = document.getElementById('computer-selection');
const rockButton = document.getElementById('rock-btn');
const paperButton = document.getElementById('paper-btn');
const scissorButton = document.getElementById('scissor-btn');
let roundUI = document.getElementById('round-counter');
let boxScoreUI = document.getElementById('box-score');
let playerScoreUI = document.getElementById('player-score');
let computerScoreUI = document.getElementById('computer-score');
let selectionsUI = document.getElementById('selections');
let roundWinnerUI = document.getElementById('round-winner');

function updateRoundWinner(){
    let oldRoundWinnerAnnouncement = document.getElementById('round-winner');
    if(oldRoundWinnerAnnouncement){
        oldRoundWinnerAnnouncement.remove();
    }
    let roundWinnerAnnouncement = document.createElement('div');
    roundWinnerAnnouncement.id = 'round-winner';
    switch (roundWinner){
        case "TIE":
            roundWinnerAnnouncement.textContent = `It's a tie!`;
            break;
        case "COMPUTER":
            roundWinnerAnnouncement.textContent = `${playerChoice} is beaten by ${computerChoice}!`;
            break;
        case "PLAYER":
            roundWinnerAnnouncement.textContent = `${playerChoice} beats ${computerChoice}!`;
            break;
    }
    selectionsUI.after(roundWinnerAnnouncement);
}


function updateGameWinner(){
    let gameWinnerAnnouncement = document.createElement('div');
    gameWinnerAnnouncement.id = 'game-winner';
    gameWinnerAnnouncement.textContent = `The winner is the ${gameWinner}`;
    let oldRoundWinnerAnnouncement = document.getElementById('round-winner');
    oldRoundWinnerAnnouncement.remove();
    selectionsUI.after(gameWinnerAnnouncement);
}

function updatePlayerChoice(input){

    if(roundNumber < 5){
        let questionMark = document.getElementById('player-questionMark');
    //check if there is already a questionMark than delete it
    if(questionMark){
        playerSelection.removeChild(questionMark);   
    }
    let oldImg = document.getElementById('player-selection-img');
    // check if there is already an img, than delete it
    if(oldImg){
        playerSelection.removeChild(oldImg);
    }
    let img = document.createElement('img');
    img.src = `../rock-paper-scissor/img/${input}.png`;
    img.id = 'player-selection-img';
    playerSelection.appendChild(img);
    playerChoice = input;
    startGame();
    } else gameOver();
}

function updateComputerChoice(computerChoice){

    if(roundNumber < 5){
        let questionMark = document.getElementById('computer-questionMark');
        //check if there is already a questionMark than delete it
        if(questionMark){
            computerSelection.removeChild(questionMark);    
        }
        let oldImg = document.getElementById('computer-selection-img');
        // check if there is already an img, than delete it
        if(oldImg){
            computerSelection.removeChild(oldImg);
        }
        let img = document.createElement('img');
        img.src = `../rock-paper-scissor/img/${computerChoice}.png`;
        img.id = 'computer-selection-img';
        computerSelection.appendChild(img);
    }
}

function updateUI(){
    playerScoreUI.textContent = "Player score:" + " " + playerScore;
    computerScoreUI.textContent = "Computer score:" + " " + computerScore;
    roundUI.textContent = "Round" + " " + roundNumber;
    updateRoundWinner();
} 
 
function gameOver(){
    alert("Ricarica per rigiocare, ancora non l'ho implementato e faccio cagare");
}


    rockButton.addEventListener('click', () => updatePlayerChoice("Rock"));
    paperButton.addEventListener('click', () => updatePlayerChoice("Paper"));
    scissorButton.addEventListener('click', () => updatePlayerChoice("Scissor"));
    rockButton.addEventListener('click', () => updateComputerChoice(computerChoice));
    paperButton.addEventListener('click', () => updateComputerChoice(computerChoice));
    scissorButton.addEventListener('click', () => updateComputerChoice(computerChoice));

    

function startGame(){
        assignComputerChoice();
        if (roundNumber <= 5){
            round(playerChoice, computerChoice);
        } else gameOver();
        updateUI();
        if(roundNumber === 5){
            updateGameWinner();
        } 
}
