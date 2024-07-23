alert("Hello world");

const choices = ["rock", "paper", "scissors"];
const getComputerChoice = () => {
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
};

