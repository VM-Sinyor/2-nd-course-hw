// const randomNumber = () => {
//     let random = Math.floor(Math.random() * 100) + 1; 
//     let answer = prompt("Введите число от 1 до 100");
    
//     answer = parseInt(answer);
    
//     if (answer === random) {
//         alert("Вы угадали!");
//     } else {
//         alert(`Вы не угадали. Загаданное число было: ${random}`);
//     }
// }

document.getElementById('startGuesNumber').addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let guess;
    
    function makeGuess() {
        guess = prompt("Введите число от 1 до 100:");
        
        if (guess === null) {
            document.getElementById('result').textContent = "Игра прервана. Загаданное число было: " + randomNumber;
            return;
        }
        
        guess = parseInt(guess);
        attempts++;
        
        if (isNaN(guess)) {
            alert("Пожалуйста, введите число!");
            makeGuess();
        } else if (guess < 1 || guess > 100) {
            alert("Число должно быть от 1 до 100!");
            makeGuess();
        } else if (guess === randomNumber) {
            document.getElementById('result').textContent = `Поздравляем! Вы угадали число ${randomNumber} за ${attempts} попыток.`;
        } else if (guess < randomNumber) {
            alert("Загаданное число больше. Попробуйте еще раз!");
            makeGuess();
        } else {
            alert("Загаданное число меньше. Попробуйте еще раз!");
            makeGuess();
        }
    }
    
    makeGuess();
});