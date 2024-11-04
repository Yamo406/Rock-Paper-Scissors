let choices = ["rock", "paper", "scissors"];
let computerSelection;
let humanSelection;

const gameButtons = document.querySelector('.game-buttons');
const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');

document.addEventListener('click', () => {

});
function getComputerChoice()
{
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber)
    {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "error in the randomNumber";
    }
}

function getHumanChoice()
{
    return prompt("Rock, Paper, Scissors?").toLowerCase();
}



function playGame()
{
    let humanScore = 0, computerScore = 0;

    function playRound(humanChoice, computerChoice)
    {
        if (humanChoice === "rock" && computerChoice === "rock")
        {
            console.log("It's a TIE!");
        }
        else if (humanChoice === "rock" && computerChoice === "scissors")
        {
            console.log("You Win! Rock beats Scissors");
            humanScore++;
        }
        else if (humanChoice === "rock" && computerChoice === "paper")
        {
            console.log("You Lose! Paper beats Rock");
            computerScore++;
        }
        else if (humanChoice === "paper" && computerChoice === "paper")
        {
            console.log("It's a TIE!");
        }
        else if (humanChoice === "paper" && computerChoice === "scissors")
        {
            console.log("You Lose! Scissors beats Paper");
            computerScore++;
        }
        else if (humanChoice === "paper" && computerChoice === "rock")
        {
            console.log("You Win! Paper beats Rock");
            humanScore++;
        }
        else if (humanChoice === "scissors" && computerChoice === "scissors")
        {
            console.log("It's a TIE!");
        }
        else if (humanChoice === "scissors" && computerChoice === "rock")
        {
            console.log("You Lose! Rock beats Scissors");
            computerScore++;
        }
        else if (humanChoice === "scissors" && computerChoice === "paper")
        {
            console.log("You Win! Scissors beats Paper");
            humanScore++;
        }
        console.log(`Your Score: "${humanScore}" - Computer's Score: "${computerScore}"`);
    }
    while ()
    {
        computerSelection = getComputerChoice();
        humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
    }
}
playGame();