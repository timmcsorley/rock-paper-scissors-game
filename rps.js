//single round rock paper scissors

let computerChoice;

// set function where A.I. chooses rock, paper, or scissors.
function getComputerChoice() {
    //set function that generates a random choice between 1, 2, and 3.
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    // grab a number
    let getInteger = randomIntFromInterval(1, 3);
    //set A.I. choice based on number result
        if (getInteger === 1){
            computerChoice = "rock";
        }
        
        if (getInteger === 2){
            computerChoice = "paper";
        }
        
        if (getInteger === 3){
            computerChoice = "scissors";
        }
        //console.log(getInteger);
        //console.log(computerChoice);
}

//create variable for playerInput

let playerChoice;

//create variable for roundResult

let roundResult;

//create function to run a game of R-P-S

function playRound(playerChoice, computerChoice) {
    //have A.I. choose
    //getComputerChoice();
    //convert playerChoice string to lowercase
    playerChoice = playerChoice.toLowerCase();
    // determine results if A.I. chooses rock
    if (computerChoice === "rock"){
        if (playerChoice === "rock"){
            return "tie";
        }
        if (playerChoice === "paper"){
            return "win";
        }
        if (playerChoice === "scissors"){
            return "lose";
        }
    }
    if (computerChoice === "paper"){
        if (playerChoice === "rock"){
            return "lose";
        }
        if (playerChoice === "paper"){
            return "tie";
        }
        if (playerChoice === "scissors"){
            return "win";
        }
    }
    if (computerChoice === "scissors"){
        if (playerChoice === "rock"){
            return "win";
        }
        if (playerChoice === "paper"){
            return "lose";
        }
        if (playerChoice === "scissors"){
            return "tie";
        }
    }
}

//create function that plays game of five rounds
function game(){
    //declare score variables for players
    let playerScore = 0;
    let computerScore = 0;
    //start a for loop to get game to repeat four times
    for (let i = 0; i < 5; i++) {
        //ask player to type in a choice
        playerChoice = prompt("Choose rock, paper, or scissors.");
        playerChoice = playerChoice.toLowerCase();
        //check if typed string matches rock, paper, or scissors
        if ((playerChoice === "rock") || (playerChoice === "paper") || (playerChoice === "scissors")){
            getComputerChoice();
            //run game function and set result to variable roundResult
            roundResult = playRound(playerChoice, computerChoice);
            //check game result and adjust overall scores accordingly
            if (roundResult === "win"){
                console.log(`The computer chose ${computerChoice}. You won.`);
                playerScore = playerScore + 1;
            }
            if (roundResult === "lose"){
                console.log(`The computer chose ${computerChoice}. You lost.`);
                computerScore = computerScore + 1;
            }
            if (roundResult === "tie"){
                console.log(`The computer chose ${computerChoice}. Draw.`);
            }
        } else {
            //display invalid input message if type string does not match game inputs
            console.log('Invalid input. Try again');
            //reduce i by 1 so the loop will run again?
            i = i - 1;
        }
        //check if score is tracked
        //console.log(computerScore);
        //console.log(playerScore);
    }
    // create if statements for match results
    if (playerScore > computerScore){
        console.log(`You won the match with ${playerScore} points.`);
    }
    if (computerScore > playerScore){
        console.log(`The computer won the match with ${computerScore} points.`);
    }
    if (computerScore === playerScore){
        console.log(`Match draw.`);
    }
    console.log('Game over.');//for debugging
}