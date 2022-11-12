//game

let roundNumber = 0;
let playerChoice;
let computerChoice;
let roundWinner;
let gameWinner;
let playerScore = 0;
let computerScore = 0;


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
let gameOverModal = document.getElementById('modal');
let modalReplayBtn = document.getElementById('replay-btn');
let modalText = document.getElementById('winner-announcement');

function updateRoundWinnerUI(){
    removeUpdateRoundWinnerUI();
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

function removeUpdateRoundWinnerUI(){
    let oldRoundWinnerAnnouncement = document.getElementById('round-winner');
    if(oldRoundWinnerAnnouncement){
        oldRoundWinnerAnnouncement.remove();
    }
}


function updateGameWinnerUI(){
    removeUpdateGameWinnerUI();
    let gameWinnerAnnouncement = document.createElement('div');
    gameWinnerAnnouncement.id = 'game-winner';
    gameWinnerAnnouncement.textContent = `The winner is the ${gameWinner}`;
    let oldRoundWinnerAnnouncement = document.getElementById('round-winner');
    oldRoundWinnerAnnouncement.remove();
    selectionsUI.after(gameWinnerAnnouncement);
}

function removeUpdateGameWinnerUI(){
    let oldGameWinnerAnnouncement = document.getElementById('game-winner');
    if(oldGameWinnerAnnouncement){
        oldGameWinnerAnnouncement.remove();
    }
}

function updatePlayerChoiceUI(input){

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

function updateComputerChoiceUI(computerChoice){

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
    updateRoundWinnerUI();
} 
 
function resetGame(){
    roundNumber = 0;
    playerScore = 0;
    computerScore = 0;
}

function gameOver(){
    resetGame();
    removeUpdateGameWinnerUI();
    gameOverModal.style.display = 'flex';
    if(gameWinner === 'PLAYER' || gameWinner === 'COMPUTER'){
        modalText.textContent = `The winner is the ${gameWinner}`; 
    } else modalText.textContent = `It's a tie!`;
    
    modalReplayBtn.addEventListener('click', () => refreshPage());
}

function refreshPage(){
    window.location.reload();
}

    rockButton.addEventListener('click', () => updatePlayerChoiceUI("Rock"));
    paperButton.addEventListener('click', () => updatePlayerChoiceUI("Paper"));
    scissorButton.addEventListener('click', () => updatePlayerChoiceUI("Scissor"));
    rockButton.addEventListener('click', () => updateComputerChoiceUI(computerChoice));
    paperButton.addEventListener('click', () => updateComputerChoiceUI(computerChoice));
    scissorButton.addEventListener('click', () => updateComputerChoiceUI(computerChoice)); 

   

function startGame(){
        gameOverModal.style.display = 'none';
        updateUI();
        
        assignComputerChoice();
        if (roundNumber <= 5){
            round(playerChoice, computerChoice);
        } else gameOver();
        updateUI();
        if(roundNumber === 5){
            //updateGameWinnerUI();
            gameOver();
        } 
}

