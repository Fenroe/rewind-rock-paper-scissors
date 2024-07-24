let humanScore = 0;
let computerScore = 0;
let winner = "";

const choices = ["rock", "paper", "scissors"];

// containers
const pregameContainer = document.getElementById("pre-game");
const gameContainer = document.getElementById("game");
const postgameContainer = document.getElementById("post-game");

// buttons
const startButton = document.getElementById("start-game-button");
const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");
const restartButton = document.getElementById("restart-game-button");

// dynamic headings
const roundOutcomeHeading = document.getElementById("round-outcome-heading");
const humanScoreHeading = document.getElementById("human-score-heading");
const computerScoreHeading = document.getElementById("computer-score-heading");
const postGameHeading = document.getElementById("post-game-heading");

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

const checkForMatchWinner = () => {
  if (humanScore < 5 && computerScore < 5) {
    return;
  }
  if (humanScore >= 5) {
    winner = "human";
    postGameHeading.textContent = "The match is over. You win!";
  } else {
    winner = "computer";
    postGameHeading.textContent = "The match is over. You lose!";
  }
  gameContainer.classList.add("hidden");
  postgameContainer.classList.remove("hidden");
};

const playRound = (humanChoice) => {
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
  humanScoreHeading.textContent = `Your score: ${humanScore}`;
  computerScoreHeading.textContent = `Computer score: ${computerScore}`;
  roundOutcomeHeading.textContent = `Computer chose ${computerChoice}. ${message}`;
  checkForMatchWinner();
};

const startGame = () => {
  humanScore = 0;
  computerScore = 0;
  winner = "";
  humanScoreHeading.textContent = "Your score: 0";
  computerScoreHeading.textContent = "Computer score: 0";
  roundOutcomeHeading.textContent = "";
  pregameContainer.classList.add("hidden");
  postgameContainer.classList.add("hidden");
  gameContainer.classList.remove("hidden");
};

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", startGame);
rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));
