//# 1 map()
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let a = arr.map((value, index, Array) => {
//   console.log(value);
//   return value + 1;
// });
// console.log(a);

// # 2 filter()
// let arr = [1, '2', 3, '4', 5, '6', 7];
// let a2 = arr.filter((value) => {
//   return value < 5;
// });
// console.log(a2);

//#3 Reduce()
// let arr = [1, '2', 3, '4', 5, '6', 7];
let arr = [1, 2, 3, 4, 5, 6];

// const reduceArr = (h1, h2) => {
//   return h1 + h2;
// };

let a3 = arr.reduce((h1, h2) => {
  return h1 + h2;
});

console.log(a3);
