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
let computerChoice = getComputerChoice();

let userChoice = prompt("Rock, Paper, Scissors?");
console.log(userChoice);
