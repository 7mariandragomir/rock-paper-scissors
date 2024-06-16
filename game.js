//Useful variables
let playerScore = 0;
let computerScore = 0;
let playerScoreDisplay = document.getElementById("player-score");
let computerScoreDisplay = document.getElementById("computer-score");

let roundCounter = 1;

const playerChoices = document.getElementById("buttons");
const btnRock = document.getElementById("player-rock");
const btnPaper = document.getElementById("player-paper");
const btnScissors = document.getElementById("player-scissors");

const msg = document.getElementById("msg");


// Game logic
function getComputerChoice() {
    let choiceIndex = getRandomInt(3);

    if (choiceIndex === 0) {
        msg.innerHTML = `Round ${roundCounter}: Computer played <i>rock</i>`;
        return "rock";
    } else if (choiceIndex === 1) {
        msg.innerHTML = `Round ${roundCounter}: Computer played <i>paper</i>`;
        return "paper";
    } else if (choiceIndex === 2) {
        msg.innerHTML = `Round ${roundCounter}: Computer played <i>scissors</i>`;
        return "scissors";
    } else {
        console.log("something went very wrong!")
    }
}

playerChoices.addEventListener("click", btnPlayerChoice, false);

function btnPlayerChoice(e) {
    if (e.target !== e.currentTarget) {
        let playerChoice = e.target.innerText.toLowerCase(); 
        playRound(playerChoice, getComputerChoice());

    }
}

function playRound(player, computer) {
    if (player === computer) 
    {
        alert("This round was a tie!");
        gameCheck();
    } else if 
    (player == "rock" && computer == "scissors" ||
    player == "paper" && computer == "rock" || 
    player == "scissors" && computer == "paper") 
    {
        alert("You won this round!");
        playerScore++;
        playerScoreDisplay.innerHTML = playerScore;
        gameCheck();
    } else if
    (player == "rock" && computer == "paper" ||
    player == "paper" && computer == "scissors" ||
    player == "scissors" && computer == "rock") 
    {
        alert("Snap! You lost this round...")
        computerScore++;
        computerScoreDisplay.innerHTML = computerScore;
        gameCheck();
    } else {
        alert("Something happened. It was not good...")
    }
}


// Helping functions 
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function gameCheck() {
    roundCounter++;
    console.log(roundCounter);

    if (roundCounter == 6 && playerScore > computerScore) {
        alert("Game's done. Good job, you won!");
        resetGame();
    } else if (roundCounter == 6 && playerScore < computerScore) {
        alert("Game's done. You lost. Damn...");
        resetGame();
    } else if (roundCounter ==  6 && playerScore === computerScore) {
        alert("Game's done. It was a tie, what were the odds?!");
        resetGame();
    } 
}

function resetGame() {
    playerScore = 0; 
    playerScoreDisplay.innerHTML = playerScore;
    computerScore = 0;
    computerScoreDisplay.innerHTML = computerScore;
    roundCounter = 0;
}