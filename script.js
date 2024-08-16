function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);

  switch (num) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
  }
}

function getHumanChoice() {
  while (true) {
    let choice = prompt("enter rock, paper, or scissor").toLowerCase();
    if (choice === "rock" || choice === "scissor" || choice === "paper") {
      return choice;
    }

    else {
      alert("invalid choice, please reenter your choice");
    }
  }
}

let humanScore = 0;
let computerScore = 0;

function playround() {
  let c = getComputerChoice();
  let h = getHumanChoice();

  if (h === c) {
    console.log("this round was a draw");
  } else if (
    (h === "rock" && c === "scissor") ||
    (h === "paper" && c === "rock") ||
    (h === "scissor" && c === "paper")
  ) {
    humanScore++;
    console.log("human wins this round");
  } else {
    computerScore++;
    console.log("computer wins this round");
  }

  console.log("human score = " + humanScore);
  console.log("computer score = " + computerScore);
}

function game() {
  let noOfGames = +prompt("how many games do you want to play?");

  for (let i = 0; i < noOfGames; i++) {
    playround();
  }
}

game();
