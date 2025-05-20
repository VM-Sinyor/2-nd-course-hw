// Task 1
// const text = 'js';
// const textUp = text.toUpperCase();
// console.log(textUp);

// Task 2
// const arr = ["Яблоко", "ядро", "каша", "ячмень", "разява"];
// const searchSrt = (arr, strings) => {
//     return arr.filter(item => item.toLowerCase().startsWith(strings.toLowerCase()));
// };

// console.log(searchSrt(arr, "я"));

// Task 3

// const number = 32.58884;
// console.log(
//     Math.floor(number),
//     Math.ceil(number),
//     Math.round(number)
//     );

// Task 4

// const arr = [52, 53, 49, 77, 21, 32];
// const checkNumb = (arr) => {
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);
//     console.log(min, max);
// };
// checkNumb(arr);

// Task 5

// const randomNumb = () => {
//  console.log(Math.floor(Math.random() * 10) + 1); 
// }

// Task 6

// const randomArr = (n) => {
//     const length = Math.floor(n / 2);
//     const result = [];
//     for (let i=0; i < length; i++) {
//         const randomNumb = Math.floor(Math.random() * (n + 1));
//         result.push(randomNumb);
//     };

//     return result;

// }

// Task 7   

// const between = (min, max) => {
//     const randomNumb = Math.floor(Math.random() * (max - min + 1)) + min; 
//     return randomNumb;
// }

// Task 8

// const today = new Date();
// console.log(today.toLocaleDateString());

// Task 9

// const currentDate = new Date();
// const caseDate = new Date(currentDate);
// caseDate.setDate(caseDate.getDate() + 73);
// console.log(caseDate.toLocaleDateString());

// Task 10

// const dataInfo = (date) => {
//     const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
//     const months = ["января", "февраля", "марта", "апреля", "мая", "июня", 
//     "июля", "августа", "сентября", "октября", "ноября", "декабря"]; 

//     const day = date.getDate();
//     const month = months[date.getMonth()];
//     const year = date.getFullYear();
//     const weekDay = days[date.getDay()];

//     const hours = String(date.getHours()).padStart(2, '0');
//     const minutes = String(date.getMinutes()).padStart(2, '0');
//     const seconds = String(date.getSeconds()).padStart(2, '0');

//     console.log(`Дата: ${day} ${month} ${year} — это ${weekDay}.`);
//     console.log(`Время: ${hours}:${minutes}:${seconds}`);

// }

// const newDate = new Date();

// dataInfo(newDate);

