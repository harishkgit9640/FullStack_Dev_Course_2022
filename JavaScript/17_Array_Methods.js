// All about the JavaScript Mehods

// let fruits = ['Apple','grapes','Orange','Banana'];

// #-2 method .indexof()
// console.log(fruits.indexOf('Orange'));

// #-1 method .indexof()
// const newfruit = fruits.join(' = ');
// console.log(newfruit);

// #0 method .Join()
// const newfruit = fruits.join(' = ');
// console.log(newfruit);

// #1 method .Pop()
// fruits.pop();   // removes from the end
// console.log(fruits);

// // #2 method .push()
// fruits.push('Pineapple'); // Add the value at the end
// console.log(fruits);

// // #3 method .shift()
// fruits.shift();     // removes from the first
// console.log(fruits);

// // #4 method .unshift()
// fruits.unshift("papaya");  // Add the value at the first
// console.log(fruits);

// #5 method .includes()
// let fruits = ['Apple','grapes','Orange','Banana'];
// const incMethod = fruits.includes("Orange");  // check the value into array
// console.log(incMethod);

// #6 method .splice()
// let fruits = ['Apple','grapes','Orange','Banana'];
// const spliceMethod = fruits.splice(0);  // truecete the value into the array
// console.log(spliceMethod);

// #7 method .foreEach()
// let fruits = ['Apple','grapes','Orange','Banana'];
// fruits.forEach(element => {
//     console.log(element);
// });

// #8 method .forOf()
// for (const value of fruits) {
//     console.log(value);
// }

// #9 method .Concate()
// let fruits = ['Apple','grapes','Orange','Banana'];
// const newObj = fruits.concat('papaya','pineapple'); // Adding / merging the new value in existing array
// console.log(newObj);

// #10 method .Concate()
// let fruits = ['Apple','grapes','Orange','Banana'];
// const objCopy = [...fruits]; // using (...) You can copy the Array
// console.log(objCopy);


// # Print the table of n number

const Table = [];
for(let i = 1; i<=10; i++){
    Table.push([
        2*i, 3*i, 4*i, 5*i, 6*i, 7*i, 8*i, 9*i, 10*i
    ]);
}
console.table(Table);