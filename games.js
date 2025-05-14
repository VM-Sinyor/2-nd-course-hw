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

document.getElementById('startJustSum').addEventListener('click', () => {
    const getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const generateTask = () => {
        const operators = ['+', '-', '/', '*'];
        const operator = operators[getRandomInt(0, 3)];

        let num1, num2;

        if (operator === '/') {
            num2 = getRandomInt(1, 10);
            num1 = num2 * getRandomInt(1,10);
        } else {
            num1 = getRandomInt(1, 20);
            num2 = getRandomInt(1, 20);
        }
        return { num1, num2, operator };
    }

    const playRound = () => {
        const { num1, num2, operator } = generateTask();
        const question = `Сколько будет ${num1} ${operator} ${num2}?`;
        const userAnswer = prompt(question);

        if (userAnswer === null) {
            alert("Игра прервана!");
            return false;
        }

        const userNumber = Number(userAnswer);


        const correctAnswer = eval(`${num1} ${operator} ${num2}`);

        if (isNaN(userNumber)) {
            alert ("Пожалуйста, введите число!");
            return true;
        } else if (userNumber === correctAnswer) {
            alert("Правильно!");
        } else {
            alert(`Неверно! Правильный ответ ${correctAnswer}`);
        }

        return true;
    }

    const startGames = () => {
        alert("Игра началась!")
        
        while(true) {
            const nextGame = playRound();
            if (!nextGame) break;
        }
    }

    startGames();
});


