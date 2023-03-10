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

function playRound() {
  computerSelection = getComputerChoice();
  playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
  console.log(`New Round! You choose ${playerSelection}`);  // SEE PLAYER SELECTION
  let result;

  // Conditions for rock
  if (playerSelection === "rock" && computerSelection === "paper") {
    result = "You lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    result = "You win! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    result = "It's a draw!";
  } 
  // Conditions for paper
  else if (playerSelection === "paper" && computerSelection === "scissors") {
    result = "You lose! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result = "You win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    result = "It's a draw!";
  }
  // Conditions for Scissors
  else if (playerSelection === "scissors" && computerSelection === "rock") {
    result = "You lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    result = "You win! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    result = "It's a draw!";
  } 
  // Conditions for null
  else {
    result = "Please enter a correct value!";
  }

  console.log("Computer choice is " + computerSelection); // SEE COMPUTER SELECTION
  
  return result;
}

// console.log(playRound(playerSelection, computerSelection));

function game() {
  let playerPoint = 0;
  let computerPoint = 0;

  for (let i = 0; i < 5; i++) {
    let roundResult = playRound();
    console.log(`ROUND ${i + 1}: ${roundResult}`);
    if (roundResult.slice(0,7) === "You win") {
      playerPoint++;
    }
    else if (roundResult.slice(0,8) === "You lose") {
      computerPoint++;
    }
    else if (roundResult === "It's a draw!") {
      // do nothing
    }
    
    if (i < 4) {
      console.log(`The score so far is - PLAYER: ${playerPoint} ${isPoint(playerPoint)} COMPUTER: ${computerPoint} ${isPoint(computerPoint)}`);
    } else {
      console.log(`Final Score - PLAYER: ${playerPoint} ${isPoint(playerPoint)} COMPUTER: ${computerPoint} ${isPoint(computerPoint)}`);
    }
  }

  if (playerPoint > computerPoint) {
    console.log("RESULT: YOU WIN!!!");
  } else if (computerPoint > playerPoint) {
    console.log("RESULT: You lose! Try again!");
  } else if (playerPoint === computerPoint) {
    console.log("RESULT: It's a tie! Try again!");
  }
}

function isPoint(point) {
  if (point === 1) {
    return "point";
  } else {
    return "points";
  }
}

game();


  