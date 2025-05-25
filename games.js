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

document.getElementById('startUpendText').addEventListener('click', () => {
    const text = prompt("Введите ваш текст");
    if (text === null || text.trim() === '') {
        alert('Вы ничего не ввели!')
    } else {
        const reversed = text.split('').reverse().join('');
    
        alert(`Ваш текст наоборот: ${reversed}`);
    }

});

document.getElementById('startVictorina').addEventListener('click', () => {
    const quiz = [
    {
        question: "Сколько пар обуви понадобится сороконожке?",
        options: ["1. 40", "2. 20", "3. 1"],
        correctAnswer: 2
    },
    {
        question: "Кто проживает на дне океана?",
        options: ["1. Окунь", "2. Спанч Боб", "3. Морской котик"],
        correctAnswer: 2
    },
    {
        question: "В каком году научились превращать свинец в золото?",
        options: ["1. 1987", "2. 2025", "3. 2012"],
        correctAnswer: 2
    }
];

let score = 0;

for (let i = 0; i < quiz.length; i++) {
    const currentQuestion = quiz[i];
    
    const optionsText = currentQuestion.options.join('\n'); 
    const userAnswer = prompt(`${currentQuestion.question}\n\n${optionsText}\n\nВведите номер ответа:`);

    if (userAnswer === null) {
        alert("Игра прервана.");
        break;
    }

    const userAnswerNumber = Number(userAnswer);

    if (userAnswerNumber === currentQuestion.correctAnswer) {
        score++;
    }
}


alert(`Правильных ответов: ${score} из ${quiz.length}`);

});

document.getElementById('startRsp').addEventListener('click', () => {
    
    const userChoice = prompt("Выбери: камень, ножницы или бумага").toLowerCase();

    const choices = ["камень", "ножницы", "бумага"];

    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

   
    alert(`Ты выбрал: ${userChoice}\nКомпьютер выбрал: ${computerChoice}`);

    
    let result = "";

    if (userChoice === computerChoice) {
      result = "Ничья!";
    } else if (
      (userChoice === "камень" && computerChoice === "ножницы") ||
      (userChoice === "ножницы" && computerChoice === "бумага") ||
      (userChoice === "бумага" && computerChoice === "камень")
    ) {
      result = "Ты победил!";
    } else if (choices.includes(userChoice)) {
      result = "Компьютер победил!";
    } else {
      result = "Ты ввёл что-то непонятное...";
    }

    alert(result);

});