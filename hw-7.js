// // Task 1
// const peopleByAge = [
//    { name: 'Глеб', age: 29 },
//    { name: 'Анна', age: 17 },
//    { name: 'Олег', age: 7 },
//    { name: 'Оксана', age: 47 }
// ];


// console.log(peopleByAge.sort((a, b) => a.age - b.age));

// // Task 2

// const isPositive = (num) => {
//   return num > 0;
// }


// const isMale = (person) => {
//   return person.gender === 'male';
// }

// const filter = (array, ruleFunction) => {
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (ruleFunction(array[i])) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// }

// console.log(filter([3, -4, 1, 9], isPositive)); 


// const peopleByGender = [
//    {name: 'Глеб', gender: 'male'},
//    {name: 'Анна', gender: 'female'},
//    {name: 'Олег', gender: 'male'},
//    {name: 'Оксана', gender: 'female'}
// ];

// console.log(filter(peopleByGender, isMale));

// // Task 3

// const interval = 3000;

// const timerId = setInterval(() => {
//   console.log(new Date().toLocaleString());
// }, interval);

// setTimeout(() => {
//   clearInterval(timerId);
//   console.log("30 секунд прошло");
// }, 30000);

// // Task 4

// const delayHello = (callback) => {
//     setTimeout(callback, 1000); 
// };
// delayHello(function () {
//    console.log('Привет, Глеб!');
// });

// // Task 5

// function delayThenCallback(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
//         if(cb) {  cb(); }
//     }, 1000)
// }

// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }

// delayThenCallback(() => sayHi('Глеб'));