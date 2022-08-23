let choices = ["rock", "paper", "scissors"]

let rockEl = document.getElementById("rock-el")
let paperEl = document.getElementById("paper-el")
let scissorsEl = document.getElementById("scissors-el")


// Get computer random choice
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*choices.length)
    return choices[computerChoice]
}


