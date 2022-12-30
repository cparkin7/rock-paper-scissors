function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  // console.log(computerChoice);

  if (computerChoice === 1) {
    computerChoice = "rock";
  } else if (computerChoice === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  // console.log(computerChoice);
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  // Conditions for rock
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    return "It's a draw!";
  } 
  // Conditions for paper
  else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It's a draw!";
  }
  // Conditions for Scissors
  else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    return "It's a draw!";
  } 
}

const playerSelection = "ScISSORS";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


  