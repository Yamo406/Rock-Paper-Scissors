/*
Console game of Rock paper scissors

Pseudocode of how we are getting this game done.

We need to get a random rock, paper, or scissors from the computer.
and we store it in a variable
THEN we prompt the user for an input
ONCE the user puts in his answer, we compare.
    IF our variable is rock and user puts in rock THEN
        output tie
    ELSEIF our variable is rock and user puts in paper THEN
        output "You Won!"
    ELSEIF our variable is rock and user puts in scissors THEN
        output "You Lose"
    ELSEIF our variable is paper and user puts in rock THEN
        output tie
    ELSEIF our variable is paper and user puts in paper THEN
        output "You Won!"
    ELSEIF our variable is paper and user puts in scissors THEN
        output "You Lose"
    ELSEIF our variable is scissors and user puts in rock THEN
        output tie
    ELSEIF our variable is scissors and user puts in paper THEN
        output "You Won!"
    ELSEIF our variable is scissors and user puts in scissors THEN
        output "You Lose"
    ENDIF
*/

let choices = ["rock", "paper", "scissors"];
let computerSelection;
let humanSelection;

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

    // round start

    // make a counter that keeps playing the game until there is a winner
    // the winner must win BO5
    while (humanScore != 5 && computerScore != 5) {
        computerSelection = getComputerChoice();
        humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
    }
}
playGame();