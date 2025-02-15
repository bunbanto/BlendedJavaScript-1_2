// ? Завдання 1--------------------------------------------------------------------------------------------
// let styles = ["jazz", "blues"];
// styles.push("rock-n-roll");

// let index = styles.indexOf("blues");
// if (index !== -1) {
//   styles[index] = "classic";
// }
// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} : ${array[i]}`);
//   }
// }
// logItems(styles);

// *---------------------------------------------------------------------------------------------------------
// ? Завдання 2---------------------------------------------------------------------------------------------
// function checkLogin(array) {
//   const login = prompt("Enter login");
//   if (array.includes(login)) {
//     alert(`Welcome, ${login}!`);
//   } else {
//     alert("User not found");
//   }
// }

// const logins = ["Peter", "John", "Igor", "Sasha"];
// checkLogin(logins);

// *---------------------------------------------------------------------------------------------------------
// ? Завдання 3---------------------------------------------------------------------------------------------
// function calculateAverage() {
//   let sum = 0;
//   let count = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     if (typeof arguments[i] === "number") {
//       sum += arguments[i];
//       count++;
//     }
//   }
//   return sum / count;
// }
// console.log(calculateAverage(1, 2, 3, 4, 5));
// console.log(calculateAverage(1, "a", 3, true, 5));

// *---------------------------------------------------------------------------------------------------------
// ? Завдання 4---------------------------------------------------------------------------------------------
// function sumArgsArray(array) {
//   let newArray = [];
//   for (let i = 0; i < array.length - 1; i++) {
//     newArray.push(array[i] + array[i + 1]);
//   }
//   return newArray;
// }
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// console.log(sumArgsArray(someArr));

// *---------------------------------------------------------------------------------------------------------
// ? Завдання 5---------------------------------------------------------------------------------------------
// function findSmallestNumber(numbers) {
//   if (!Array.isArray(numbers)) {
//     return "Sory, it is not an array!";
//   }
//   let min = numbers[0];

//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//       min = numbers[i];
//     }
//   }

//   return min;
// }

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// console.log(findSmallestNumber(numbers));
// *---------------------------------------------------------------------------------------------------------
// ? Завдання 6---------------------------------------------------------------------------------------------
// function findLongestWord(string) {
//   let words = string.split(" ");
//   let longestWord = words[0];

//   for (let i = 1; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }

//   return longestWord;
// }
// console.log(findLongestWord("London is the capital of Great Britain"));

// *---------------------------------------------------------------------------------------------------------
// ? Завдання 7---------------------------------------------------------------------------------------------

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(`${key} : ${user[key]}`);
// }
// *---------------------------------------------------------------------------------------------------------
// ? Завдання 8---------------------------------------------------------------------------------------------
// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// let sum = 0;
// // const keys = Object.keys(salaries);
// // for (const key of keys) {
// //   sum += salaries[key];
// // }
// for (const key in salaries) {
//   sum += salaries[key];
// }
// console.log(sum);

// *---------------------------------------------------------------------------------------------------------
// ? Завдання 9---------------------------------------------------------------------------------------------
// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   exist() {
//     return this.a !== undefined && this.b !== undefined;
//   },
//   sum() {
//     if (this.exist()) {
//       return this.a + this.b;
//     } else {
//       return "No such properties";
//     }
//   },

//   mult() {
//     if (this.exist()) {
//       return this.a * this.b;
//     } else {
//       return "No such properties";
//     }
//   },
// };

// *---------------------------------------------------------------------------------------------------------
// ? Завдання 10---------------------------------------------------------------------------------------------

// function calcTotalPrice(fruits, fruitName) {
//   let totalPrice = 0;

//   for (const fruit of fruits) {
//     if (fruit.name === fruitName) {
//       totalPrice += fruit.price * fruit.quantity;
//     }
//   }

//   return totalPrice;
// }

// const fruitName = "Банан";
// const fruits = [
//   { name: "Яблуко", price: 45, quantity: 7 },
//   { name: "Апельсин", price: 60, quantity: 4 },
//   { name: "Банан", price: 125, quantity: 8 },
//   { name: "Груша", price: 350, quantity: 2 },
//   { name: "Виноград", price: 440, quantity: 3 },
//   { name: "Банан", price: 125, quantity: 3 },
// ];
// console.log(calcTotalPrice(fruits, fruitName));
