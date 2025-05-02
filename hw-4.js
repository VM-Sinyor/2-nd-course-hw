// Tast 1

// const lessNumber = (min, max) => alert(min <= max ? min : max);

// Task 2

// const numberCheck = (num) => num % 2 === 0 ? 'Число четное' : 'Число нечетное';

// console.log(numberCheck(2));

// Task 3

// const printSquare = (number) => {
//     const square = number ** 2;
//     console.log(square);
// }

// const getSquare = (number) => number ** 2; 

// Task 4

// const checkUserAge = () => {
//     let age = Number(prompt('Введите ваш возраст'));
//     if (isNaN(age) || age < 0) {
//         alert('Вы ввели неправильное значение')
//     } else if (age <= 12) {
//         alert('Привет, друг!');
//     } else {
//         alert('Добро пожаловать!');
//     }
// }

//  Task 5

// const checkNumber = (a, b) => isNaN(Number(a)) || isNaN(Number(b)) ? 'Одно или оба значения не являются числом' : Number(a) * Number(b);

// const numberCheck = (a, b) => {
//     const num1 = Number(a);
//     const num2 = Number(b);
//     return isNaN(num1) || isNaN(num2) ? 'Одно или оба значения не являются числом' : num1 * num2;
// }

// Task 6

// const calculateCube = (num) => {
//     const number = Number(num);
//     const numberCub = number ** 3;

//     return (isNaN(number)) ? 'Переданный параметр не является числом' : `${number} в кубе равняется ${numberCub}`;
// };

// for (let i=0; i <= 10; i++) {
//     console.log(calculateCube(i));
// }

// let userNumber = prompt('Ведите число');
// console.log(calculateCube(userNumber));

//  Task 7

// const circle1 = {
//     radius: 5,
  
//     getArea() {
//       return Math.PI * this.radius ** 2;
//     },
  
//     getPerimeter() {
//       return 2 * Math.PI * this.radius;
//     }
//   };
  
//   const circle2 = {
//     radius: 10,
  
//     getArea() {
//       return Math.PI * this.radius ** 2;
//     },
  
//     getPerimeter() {
//       return 2 * Math.PI * this.radius;
//     }
//   };