const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChances = document.querySelectorAll('button');
let userchoice;
let computerChoice;
let result;

possibleChances.forEach(possibleChances => possibleChances.addEventListener('click', (e) => {
    userchoice = e.target.id;
    userChoiceDisplay.innerHTML = userchoice;
    generateComputerChoice();
    setTimeout(() => {
        computerChoiceDisplay.innerHTML = computerChoice;
        decideWinner();
        setTimeout(() => {
            computerChoiceDisplay.innerHTML = "";
            userChoiceDisplay.innerHTML = "";
            resultDisplay.innerHTML = "";
        }, 2000); // 2000 milliseconds = 2 seconds delay to clear the output
    }, 2000); // 5000 milliseconds = 5 seconds delay
}));

function generateComputerChoice() {
    const randomNumber = Math.ceil(Math.random() * possibleChances.length);

    if (randomNumber === 1)
        computerChoice = 'rock';
    if (randomNumber === 2)
        computerChoice = 'paper';
    if (randomNumber === 3)
        computerChoice = 'scissor';
}

function decideWinner() {
    if (computerChoice === 'rock' && userchoice === 'paper')
        result = "Hurray! You Win";
    else if (computerChoice === 'paper' && userchoice === 'scissor')
        result = "Hurray! You Win";
    else if (computerChoice === 'scissor' && userchoice === 'rock')
        result = "Hurray! You Win";
    else if (computerChoice === userchoice)
        result = "It's a draw!";
    else {
        result = "You lost! Try Again...";
    }
    resultDisplay.innerHTML = result;
}
