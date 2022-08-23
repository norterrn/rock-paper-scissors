let choices = ["rock", "paper", "scissors"];

let rockEl = document.getElementById("rock-el");
let paperEl = document.getElementById("paper-el");
let scissorsEl = document.getElementById("scissors-el");
let resultEl = document.getElementById("result-el");
let playerScoreEl = document.getElementById("playerscore-el")
let computerScoreEl = document.getElementById("computerscore-el")
let resultPlayer = 0
let resultComputer = 0

// Get computer random choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}


function main() {

  rockEl.addEventListener("click", function () {
    let computerPick = getComputerChoice()
    console.log("rock vs " + computerPick)
    if (computerPick === "paper"){
        resultEl.textContent = "Result: You lose. Paper beats rock"
        resultComputer += 1
        computerScoreEl.textContent ="Computer's score: " + resultComputer
    } else if (computerPick === "scissors"){
        resultEl.textContent = "Result: You win. Rock beats scissors";
        resultPlayer += 1
        playerScoreEl.textContent = "Player's score: " + resultPlayer;
    } else {
      resultEl.textContent = "Result: Tie."
    }
  });

  paperEl.addEventListener("click", function () {
    let computerPick = getComputerChoice();
    console.log("paper vs " + computerPick);
    if (computerPick === "scissors") {
      resultEl.textContent = "Result: You lose. Scissors beat paper";
      resultComputer += 1;
      computerScoreEl.textContent = "Computer's score: " + resultComputer;
    } else if (computerPick === "rock") {
      resultEl.textContent = "Result: You win. Paper beats rock";
      resultPlayer += 1;
      playerScoreEl.textContent = "Player's score: " + resultPlayer;
    } else {
      resultEl.textContent = "Result: Tie.";
    }
  });

  scissorsEl.addEventListener("click", function () {
    let computerPick = getComputerChoice();
    console.log("scissors vs " + computerPick);
    if (computerPick === "rock") {
      resultEl.textContent = "Result: You lose. Rock beats scissors";
      resultComputer += 1;
      computerScoreEl.textContent = "Computer's score: " + resultComputer;
    } else if (computerPick === "paper") {
      resultEl.textContent = "Result: You win. Scissors beat paper";
      resultPlayer += 1;
      playerScoreEl.textContent = "Player's score: " + resultPlayer;
    } else {
      resultEl.textContent = "Result: Tie.";
    }
  });
}

main()

