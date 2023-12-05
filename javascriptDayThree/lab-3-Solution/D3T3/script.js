function guessNumberGame() {
    // Generate a random number between 0 and 9
    const randomNumber = Math.floor(Math.random() * 10);

    // Get user input for the guessed number
    let userGuess = parseInt(prompt("Guess the number between 0 and 9:"));

    // Check if the guessed number is correct
    if (userGuess >= 0 && userGuess <= 9) {
        if (userGuess === randomNumber) {
            alert("Congratulations! You guessed the correct number.");
        } else {
            alert(`Sorry, the correct number was ${randomNumber}. Try again!`);
        }
    } else {
        alert("Please enter a valid number between 0 and 9.");
    }
}

// Call the function to start the game
guessNumberGame();
