let randomNumber = parseInt(Math.random() * 100 +1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const LowOrHi = document.querySelector('.LowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

// player available to play 
if(playGame){
    submit.addEventListener('click', function(e){ // to submit val
        e.preventDefault(); // val wont reach to server / db
        const guess = parseInt(userInput.value); // get val from user & convert into int
        validatGuess(guess); // pass to next fun
    });
}

// validate the given value in range 1 - 100
function validatGuess(guess) {
    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if(guess < 1){
        alert('Please enter a number greter than 1')
    } else if(guess > 100){
        alert('Please enter a number less than 100')
    }else {
        prevGuess.push(guess) // to display previous guess
        if(numGuess === 11){ // if user attempt end
            displayGuess(guess) // show what user guessed
            displayMessage(`Game Over, Random number was ${randomNumber}`); // end msg &randomNo
            endGame(); // ternimate game
        }
        // if the user in 1 - 10 attempt
        else {
            displayGuess(guess);
            checkGuess(guess); // check the guess right or not
        }
    }
    
}
// check the val is equal to random no if its equal use displayMessage fun & declare win or if low say low or high say high  
function checkGuess(guess) {
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame() // terminate
    } else if(guess < randomNumber){
        displayMessage(`You guessed too low`)
    } else if(guess > randomNumber){
        displayMessage(`You guessed too high`)
    }
    
}
// to clean the previous val to add new val & update guess array & update guess remaining 
// or Clean up fun where u can add new val 
function displayGuess(guess) {
    userInput.value = ''; // clear first no & update the user val
    guessSlot.innerHTML += `${guess}, ` // show val & add the guessed val in previous guess slot
    numGuess++; // increase val of attempt
    remaining.innerHTML = `${11 - numGuess}` // calculate remaing attempts
}
// use lowOrHi var & display as it is 
function displayMessage(message) {
    LowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''; // clear field
    userInput.setAttribute('disabled', ''); // not allowed to add val
    p.classList.add('button'); // to add button
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

// reset all the variable to start new game 
function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 +1);
        prevGuess= []
        numGuess = 1
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
    })
}
