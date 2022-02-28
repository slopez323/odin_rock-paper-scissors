// const prompt = require("prompt-sync")()

let comp
let player
let playerScore = 0
let computerScore = 0
let resultText = ""

function computerPlay() {
    let num = Math.ceil(Math.random() * 3)
    if (num === 1) {
        comp = "rock"
    } else if (num === 2) {
        comp = "paper"
    } else {
        comp = "scissors"
    }
    return comp
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "scissors")) {
        playerScore += 0
        computerScore += 0
        resultText = (`It's a tie.  You both played ${playerSelection.toUpperCase()}.`)
        displayResult()
    } else if ((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore += 1
        computerScore += 0
        resultText = (`You win.  ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`)
        displayResult()
    } else {
        playerScore += 0
        computerScore += 1
        resultText = (`You lose.  ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`)
        displayResult()
    }
}

// function playerPlay (){
//     player = prompt(`Choose rock, paper or scissors. >> `).toLowerCase()
//     return player
// }

// const playerSelection = "rock"
// const computerSelection = computerPlay()

// function game(){
//     for (let i = 1; i <=5; i++){
//         console.log(playRound(playerPlay(), computerPlay()))
//     }
//     if (playerScore > computerScore){
//         return `You won the game with a score of ${playerScore} vs ${computerScore}.`
//     } else if (computerScore > playerScore){
//         return `You lost the game with a score of ${playerScore} vs ${computerScore}.`
//     } else {
//         return `The game ended at a tie with each scoring ${playerScore}.`
//     }
// }

// console.log(game())


document.getElementById('rock').addEventListener('click', function () { playRound('rock', computerPlay()) });
document.getElementById('paper').addEventListener('click', function () { playRound('paper', computerPlay()) });
document.getElementById('scissors').addEventListener('click', function () { playRound('scissors', computerPlay()) });


const container = document.querySelector(".container");
let result = document.createElement("div");
container.appendChild(result);

function displayResult() {
    result.innerText = `
${resultText}
Your score: ${playerScore}
Computer's score: ${computerScore}`
}

function raceToFive() {

}