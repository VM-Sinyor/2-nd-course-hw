
// Task 1
// const arr = [1, 5, 4 , 10, 0, 3];
// for (let i=0; i < arr.length; i++) {
//     console.log(arr[i]);
//     if (arr[i] === 10) {
//         break;
//     }
// }

// Task 2

// const arr = [1, 5, 4, 10, 0, 3];
// const index = arr.indexOf(4);

// console.log(index);

//  Task 3

// const arr = [1, 3, 5, 20];
// const result = arr.join(' ');

// console.log(result);

// Task 4

// const array = [];
// for (let i = 0; i < 3; i++) {
//     const row = [];

//     for (let j =0; j < 3; j++) {
//         row.push(1);
//     }

//     array.push(row);
// }

// console.log(array);

// Task 5

// const arr = [1, 1, 1];
// arr.push(2, 2, 2);
// console.log(arr);

// Task 6

// const arr = [9, 8, 7, 'a', 6, 5];

// arr.sort();

// const index = arr.indexOf('a');

// if (index !== -1) {
//     arr.splice(index, 1);
// }

// console.log(arr);

// Task 7

// const arr = [9, 8, 7, 6, 5];
// const userInput = prompt('Угадайте число');
// const userNumber = Number(userInput);

// if (isNaN(userNumber)) {
//     alert("Введите корректное число!");
// } else {
//     alert(arr.includes(userNumber) ? "Угадал!" : "Не угадал!");
// }

// Task 8

// console.log('abcdef'.split('').reverse().join(''));

//  Task 9

// const arr = [[1, 2, 3], [4, 5, 6]];
// const result = arr.flat();
// console.log(result);

//  Task 10

// const arr = [2, 4, 5, 3, 7];

// for (let i = 0; i < arr.length - 1; i++) {
//     const sum = arr[i] + arr[i + 1];
//     console.log(`Сумма ${arr[i]} +  ${arr[i + 1]} = ${sum}`);
// }

// Task 11

// const squareArray = (arr) => {
//     return arr.map(num => num * num);
// }
// console.log(squareArray([1, 2, 4, 6]));

//  Task 12

// const wordLengths = (arr) => {
//     return arr.map(word => word.length);
// }

// console.log(wordLengths(['яблоко', 'черешня', 'арбуз', 'дыня']));

//  Task 13

// const filterNumber = (arr) => {
//     return arr.filter(num => num < 0);
// }

// console.log(filterNumber([-1, 0, 2, 6, -3]));

//  Task 14

// const randomArray = [];

// for (let i = 0; i < 10; i++) {
//     const randomNumber = Math.floor(Math.random() * 11);
//     randomArray.push(randomNumber);
// }

// const evenNumbers = randomArray.filter(num => num % 2 === 0);

// console.log('Исходный массив', randomArray);
// console.log('Четное значение', evenNumbers);

//  Task 15

// const arr = [];

// for (let i = 0; i < 6; i++) {
//     const randomNumber = Math.floor(Math.random() * 10) + 1;
//     arr.push(randomNumber);
// }

// const sum = arr.reduce((acc, num) => acc + num, 0);

// const average = sum / arr.length;

// console.log('Массив', arr);
// console.log('Среднее арифметическое:' ,average);









 