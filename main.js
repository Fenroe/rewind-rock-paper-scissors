let humanScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
};

const getHumanChoice = () => {
  const humanChoice = prompt("What is your choice?").toLowerCase();
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
      return "player";
    } else {
      return "computer";
    }
  }
  if (computerChoice === "paper") {
    if (humanChoice === "scissors") {
      return "player";
    } else {
      return "computer";
    }
  }
  if (computerChoice === "scissors") {
    if (humanChoice === "rock") {
      return "player";
    } else {
      return "computer";
    }
  }
};
