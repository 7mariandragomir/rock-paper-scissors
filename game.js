// 0. Declare Variables
let playerScore = 0;
let playerScoreDisplay = document.getElementById("user-score");
let computerScore = 0;
let computerScoreDisplay = document.getElementById("computer-score");

let roundCounter = 1;

const playerChoices = document.getElementById("buttons");
const btnRock = document.getElementById("user-rock");
const btnPaper = document.getElementById("user-paper");
const btnScissors = document.getElementById("user-scissors");
const msg = document.getElementById("msg");

// 1. Get computer Choice
// 1.1 Get Random Integer
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

// 1.2 Get Computer Choice
function getComputerChoice() {
    let choiceIndex = getRandomInt(3);

    if (choiceIndex === 0) {
        msg.innerHTML = `Round: ${roundCounter} - The computer played <i>rock</i>`;
        return "rock";
    } else if (choiceIndex === 1) {
        msg.innerHTML = `Round: ${roundCounter} - The computer played <i>paper</i>`;
        return "paper";
    } else if (choiceIndex === 2) {
        msg.innerHTML = `Round: ${roundCounter} - The computer played <i>scissors</i>`;
        return "scissors";
    } else {
        console.log("something went very wrong!")
    }
}

// 2. Get user Choice 
playerChoices.addEventListener("click", btnPlayerChoice, false);

function btnPlayerChoice(e) {
    if (e.target !== e.currentTarget) {
        let playerChoice = e.target.innerText.toLowerCase(); 
        playRound(playerChoice, getComputerChoice());

    }
}
// 3. Play Round
function playRound(player, computer) {
    if (player === computer) {
        alert("This round was a tie!");
        playerScore++;
        playerScoreDisplay.innerHTML = playerScore;
        computerScore++;
        computerScoreDisplay.innerHTML = computerScore;
        gameCheck(roundCounter);
    } else if 
    (player == "rock" && computer == "scissors" ||
    player == "paper" && computer == "rock" || 
    player == "scissors" && computer == "paper") {
        alert("You won this round!");
        playerScore++;
        playerScoreDisplay.innerHTML = playerScore;
        gameCheck(roundCounter);
    } else if
    (player == "rock" && computer == "paper" ||
    player == "paper" && computer == "scissors" ||
    player == "scissors" && computer == "rock") {
        alert("Snap! You lost this round...")
        computerScore++;
        computerScoreDisplay.innerHTML = computerScore;
        gameCheck(roundCounter);
    } else {
        alert("Something happened. It was not good..")
    }
}
// 4. gameCheck 

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

// 4.1 resetGame
function resetGame() {
    playerScore = 0; 
    playerScoreDisplay.innerHTML = playerScore;
    computerScore = 0;
    computerScoreDisplay.innerHTML = computerScore;
    roundCounter = 0;
}