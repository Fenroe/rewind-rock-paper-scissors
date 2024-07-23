let humanScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
};

const getHumanChoice = () => {
  const humanChoice = prompt(
    `Current score: you ${humanScore} - ${computerScore} computer. What is your choice?`
  ).toLowerCase();
  if (!choices.includes(humanChoice)) {
    return alert("You must choice rock, paper or scissors");
  } else {
    return humanChoice;
  }
};

const determineWinner = (computerChoice, humanChoice) => {
  if (computerChoice === humanChoice) {
    return "draw";
  }
  if (computerChoice === "rock") {
    if (humanChoice === "paper") {
      return "human";
    } else {
      return "computer";
    }
  }
  if (computerChoice === "paper") {
    if (humanChoice === "scissors") {
      return "human";
    } else {
      return "computer";
    }
  }
  if (computerChoice === "scissors") {
    if (humanChoice === "rock") {
      return "human";
    } else {
      return "computer";
    }
  }
};

const playRound = () => {
  const humanChoice = getHumanChoice();
  if (!humanChoice) {
    return;
  }
  const computerChoice = getComputerChoice();
  const winner = determineWinner(computerChoice, humanChoice);
  let message = "It's a draw";
  if (winner === "human") {
    message = "You win the round";
    humanScore += 1;
  }
  if (winner === "computer") {
    message = "You lose the round";
    computerScore += 1;
  }
  alert(`Computer chose ${computerChoice}. ${message}`);
};

const playGame = () => {
  let winnerFound = false;
  while (!winnerFound) {
    playRound();
    if (computerScore === 5) {
      alert("Computer wins the game");
      winnerFound = true;
    }
    if (humanScore === 5) {
      alert("You win the game");
      winnerFound = true;
    }
  }
};

playGame();
