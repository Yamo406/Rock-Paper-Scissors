let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const gameButtons = document.querySelector('.game-buttons');
const playerScoreContent = document.querySelector('#player-score');
const computerScoreContent = document.querySelector('#computer-score');

function updateScores() {
    playerScoreContent.innerText = playerScore;
    computerScoreContent.innerText = computerScore;
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a TIE!";
    }
    const winCondition = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (winCondition[playerChoice] === computerChoice) {
        playerScore++;
        return `You Win! ${playerChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You Lose! ${computerChoice} beats ${playerChoice}`;
    }
}

function checkGameEnd() {
    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore === 5 ? "You" : "Computer";
        alert(`Game Over! ${winner} won the game!`);

        playerScore = 0;
        computerScore = 0;
        updateScores();
        return true;
    }
    return false;
}

function playGame()
{
    alert('Welcome to the Rock, Paper, Scissors game.');
    alert('This is a BO5, whoever gets to 5 points first wins.');

    const newGameButtons = gameButtons.cloneNode(true);
    gameButtons.parentNode.replaceChild(newGameButtons, gameButtons);

    newGameButtons.addEventListener('click', function (event) {
        const target = event.target;

        let playerChoice;

        if (target.closest('#rock')) {
            playerChoice = "rock";
        } else if (target.closest("#paper")) {
            playerChoice = "paper";
        } else if (target.closest("#scissors")) {
            playerChoice = "scissors";
        } else {
            return;
        }
        const computerChoice = getComputerChoice();

        const result = playRound(playerChoice, computerChoice);
        alert(result);
        updateScores();

        if (checkGameEnd()) {
            playGame();
        }
    });
}
playGame();
