let userName = prompt('Please, enter your name');

const createUserName = () => {
  if (!userName) {
    return 'User';
  } else {
    return userName;
  }
}

const getUserChoise = () => {
  userChoice = prompt('Rock, Scissors, Paper... Please make your move');

  if (userChoice === null) {
    alert('You aborted this game. To start new game just refresh the page.');
  }

  const modifyUserChoice = userChoice
    .trim()
    .toLowerCase();

  if (modifyUserChoice === 'rock' || modifyUserChoice === 'scissors'|| modifyUserChoice === 'paper') {
    return modifyUserChoice;
  }

  if (userChoice !== 'rock' || userChoice !== 'scissors'|| userChoice !== 'paper') {
    getUserChoise();
  } 
}

const getComputerChoise = () => {
  const computerChoise = Math.floor(Math.random() * 3 + 1);
  if (computerChoise === 1) {
    alert('Computer move is: rock');
    return 'rock';
  } else if (computerChoise === 2) {
    alert('Computer move is: scissors');
    return 'scissors';
  } else if (computerChoise === 3) {
    alert('Computer move is: paper');
    return 'paper';
  }
}

let userScore = 0;
let computerScore = 0;

const playGame = (playerName, playerSelection, computerSelection) => {
  const name = playerName();
  const player = playerSelection();
  const computer = computerSelection();

  if (player === computer) {
    return;
  } 
  else 
  if ((player === 'rock' && computer === 'scissors') || 
      (player === 'paper' && computer === 'rock') || 
      (player === 'scissors' && computer === 'paper')) {
    userScore += 1;
    alert (`You won this round: Current count is ${name}: ${userScore}: Computer ${computerScore}`);
    return userScore;
  } 
  else {
    computerScore += 1;
    alert (`Computer won this round: Current count is ${name}: ${userScore}: Computer ${computerScore}`);
    return computerScore;
  }
};

const rounds = (play) => {
  while (userScore < 3 || computerScore < 3) {
    play(createUserName, getUserChoise, getComputerChoise);
  
    if (userScore === 3) {
      alert (`Congratulations. You won this game. Count - You: ${userScore} : Computer ${computerScore}`);
      return 'Stop playing';
    } else if (computerScore === 3) {
      alert (`Sorry. You lost this game. Count - You: ${userScore} : Computer ${computerScore}`);
      return 'Stop playing';
    }
  }
}

const start = rounds(playGame);

do {
  if (start === 'Stop playing') {
    const newStart = confirm('Do you want to start new game?');
    
    if (newStart === true) {
      userScore = 0;
      computerScore = 0;

      userName = prompt('Please, enter your name');
      createUserName();
      rounds(playGame);
    } else {
      break;
    }
  }
} while (start === 'Stop playing');