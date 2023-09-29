function checkGuess() {
    const userGuess = document.getElementById("userGuess").value;
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let message;

    if (userGuess == randomNumber) {
        message = `Congratulations! You guessed the number ${randomNumber} correctly!`;
    } else if (userGuess < randomNumber) {
        message = `Too low! The number was ${randomNumber}. Try again!`;
    } else {
        message = `Too high! The number was ${randomNumber}. Try again!`;
    }

    document.getElementById("message").textContent = message;
}
