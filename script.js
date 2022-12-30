function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  // console.log(computerChoice);

  if (computerChoice === 1) {
    computerChoice = "Rock";
  } else if (computerChoice === 2) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  // console.log(computerChoice);
  return computerChoice;
}

console.log(getComputerChoice());
