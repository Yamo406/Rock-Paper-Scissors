let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const gameButtons = document.querySelector('.game-buttons');
const playerScoreContent = document.querySelector('#player-score');
const computerScoreContent = document.querySelector('#computer-score');

function updateplayerScore() {
    playerScoreContent.innerText = playerScore;
}

function updateComputerScore() {
    computerScoreContent.innerText = computerScore;
}

let ComputerChoice = getComputerChoice();

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function getPlayerChoice(){
    gameButtons.addEventListener('click', function (event) {
        const target = event.target;
        if (target.closest('#rock')) {
            return "rock";
        } else if (target.closest("#paper")) {
            return "paper";
        } else if (target.closest("#scissors")) {
            return "scissors";
        }
    });
}

function playGame()
{
    alert('Welcome to the Rock, Paper, Scissors game.');
    alert('This is a BO5, whoever gets to 5 points first wins.');

    // async function waits for the player's click to begin the gam;
    let playerChoice = getPlayerChoice();

        if (playerChoice === "rock" && computerChoice === "scissors"){
            alert("It's a TIE!");
        }
        else if (playerChoice === "rock" && computerChoice === "scissors")
        {
            alert("You Win! Rock beats Scissors");
            playerScore++;
            updateplayerScore();
        }
        else if (playerChoice === "rock" && computerChoice === "paper")
        {
            alert("You Lose! Paper beats Rock");
            computerScore++;
            updateComputerScore();
        }
        else if (playerChoice === "paper" && computerChoice === "paper")
        {
            alert("It's a TIE!");
        }
        else if (playerChoice === "paper" && computerChoice === "scissors")
        {
            alert("You Lose! Scissors beats Paper");
            computerScore++;
            updateComputerScore();
        }
        else if (playerChoice === "paper" && computerChoice === "rock")
        {
            alert("You Win! Paper beats Rock");
            playerScore++;
            updateplayerScore();
        }
        else if (playerChoice === "scissors" && computerChoice === "scissors")
        {
            alert("It's a TIE!");
        }
        else if (playerChoice === "scissors" && computerChoice === "rock")
        {
            alert("You Lose! Rock beats Scissors");
            computerScore++;
            updateComputerScore();
        }
        else if (playerChoice === "scissors" && computerChoice === "paper")
        {
            alert("You Win! Scissors beats Paper");
            playerScore++;
            updateplayerScore();
        }

}
playGame();
