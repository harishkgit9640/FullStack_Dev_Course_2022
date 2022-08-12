// Loops In Array

// #1 Normal For loop
// let num = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 1; i <= num.length; i++) {
//   console.log(i);
// }

// #2 ForEach loop
// let num = [1, 2, 3, 4, 5, 6, 7];
// num.forEach((Element) => {
//   console.log(Element);
// });

// #3 ForOf loop
// let num = [1, 2, 3, 4, 5, 6, 7];
// for (const arr of num) {
//   console.log(arr);
// }

// #4 ForIn loop In Array
// let fruits = ['Apple', 'Banana', 'pineApple', 'Grapes', 'Orange'];
// for (let key in fruits) {
//   console.log(key, fruits[key]);
// }

// #4 ForIn loop In Object
// let obj = {
//   rollNo: 202201,
//   stdName: 'Harish Kumar',
//   Age: 23,
//   section: 'A+',
//   add: 'Hyderabad',
// };

// for (let i in obj) {
//   console.log(i, obj[i]);
// }
// const array = [15, 16, 17, 18, 19];

// function reducer(previous, current, index) {
//   const returns = previous + current;
//   console.log(
//     `previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`
//   );
//   return returns;
// }

// array.reduce(reducer);
let words1 = 'abcdefghijk';
words1 = Array.from(words1);

// # doWhile loop
// let i = 0;
// do {
//   console.log(words1[i]);
//   i++;
// } while (i <= words1.length - 1);

let i = 0;
while (i <= words1.length - 1) {
  console.log(words1[i]);
  i++;
}

// # while loop
// let arr = [1, 2, 4, 5, 6];
// let i = 0;
// while (i <= arr.length - 1) {
//   console.log(arr[i]);
//   i++;
// }

// for (let i in words1) {
//   console.log(words1[i]);
// }

// for (let i = 0; i <= words1.length - 1; i++) {
//   console.log(words1[i]);
// }

// for (const key of words1) {
//   console.log(key);
// }

// words.forEach((element) => {
//   console.log(element);
// });
