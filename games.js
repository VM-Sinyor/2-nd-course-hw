document.getElementById('startGuesNumber').addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    let attempts = 0;

    const makeGuess = () => {
        let guess = prompt("Введите число от 1 до 100:");

        guess = parseInt(guess);
        attempts++;

        if (isNaN(guess)) {
            alert("Пожалуйста, введите число!");
            makeGuess();
        } else if (guess < 1 || guess > 100) {
            alert("Число должно быть от 1 до 100!");
            makeGuess();
        } else if (guess === randomNumber) {
            alert(`🎉 Поздравляем! Вы угадали число ${randomNumber} за ${attempts} попыток.`);
        } else {
            alert(`Загаданное число ${guess < randomNumber ? 'больше' : 'меньше'}. Попробуйте ещё раз!`);
            makeGuess();
        }
    };

    makeGuess();
});