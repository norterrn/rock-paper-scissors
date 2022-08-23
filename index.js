let choices = ["rock", "paper", "scissors"];

let rockEl = document.getElementById("rock-el");
let paperEl = document.getElementById("paper-el");
let scissorsEl = document.getElementById("scissors-el");
let resultEl = document.getElementById("result-el");
let playerScoreEl = document.getElementById("playerscore-el");
let computerScoreEl = document.getElementById("computerscore-el");
let resultPlayer = 0;
let resultComputer = 0;
let playAgainButton = document.getElementById("rematch")

playAgainButton.toggleAttribute("hidden");


// Get computer random choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}


function playRound(playerSelection) {
  let computerPick = getComputerChoice();
  console.log(`${playerSelection} vs ${computerPick}`);

  if (playerSelection === "scissors" && computerPick === "paper"){
      resultEl.textContent = "Result: You win. Scissors beat paper"
      resultPlayer += 1
      playerScoreEl.textContent = "Player's score: "+ resultPlayer
  } else if (playerSelection === "paper" && computerPick === "rock"){
      resultEl.textContent = "Result: You win. Paper beats rock"
      resultPlayer += 1;
      playerScoreEl.textContent = "Player's score: " + resultPlayer
  } else if (playerSelection === "rock" && computerPick === "scissors"){
      resultEl.textContent = "Result: You win. Rock beats scissors"
      resultPlayer += 1;
      playerScoreEl.textContent = "Player's score: " + resultPlayer
  } else if (playerSelection === computerPick){
      resultEl.textContent = "Result: Tie"
  } else {
    resultComputer +=1
    computerScoreEl.textContent ="Computer's score: " + resultComputer
    resultEl.textContent = "Lost to a bot lmao"
  }
  }

function checkPoints() {

  if (resultPlayer === 5) {
    resultEl.textContent = "You won!! The score is " + resultPlayer + " to " + resultComputer;
    playAgainButton.toggleAttribute("hidden");
    rockEl.toggleAttribute("hidden");
    paperEl.toggleAttribute("hidden");
    scissorsEl.toggleAttribute("hidden");
    

  } else if(resultComputer === 5){
    resultEl.textContent = "You lost... The score is " + resultPlayer + " to " + resultComputer;
    playAgainButton.toggleAttribute("hidden");
  }
  
}

rockEl.addEventListener("click", function () {
  playRound("rock");
  checkPoints();
});
paperEl.addEventListener("click", function () {
  playRound("paper");
  checkPoints();
});
scissorsEl.addEventListener("click", function () {
  playRound("scissors");
  checkPoints();
});

playAgainButton.addEventListener("click", function () {
 
  resultComputer = 0
  resultPlayer = 0
  playerScoreEl.textContent = "Player's score: ";
  computerScoreEl.textContent = "Computer's score: ";
  resultEl.textContent = "Result: "
  rockEl.toggleAttribute("hidden");
  paperEl.toggleAttribute("hidden");
  scissorsEl.toggleAttribute("hidden");
});

