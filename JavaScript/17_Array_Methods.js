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
// console.log(fruits);
// const spliceMethod = fruits.splice(0,2,'papaya','blackbarry');  // truecete the value into the array
// console.log(spliceMethod);
// console.log(fruits);

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

// #10 method ...copy()
// let fruits = ['Apple','grapes','Orange','Banana'];
// const objCopy = [...fruits]; // using (...) You can copy the Array
// console.log(objCopy);

// # Print the table of n number

// const Table = [];
// for(let i = 1; i<=10; i++){
//     Table.push([
//         2*i, 3*i, 4*i, 5*i, 6*i, 7*i, 8*i, 9*i, 10*i
//     ]);
// }
// console.table(Table);

// #10 method .filter()
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present','1234','123','12345'];

// const result = words.filter(word => word.length > 4 );

// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present','1234','123','12345'];
// console.log(words);

// delete words[0];
// console.log(words);

// let compare = (a,b) =>{
//     return (a - b);
// }
// let Nnum = [1,2,16,4,15,23];
// Nnum.sort(compare);
// console.log(Nnum);

// # method.slice();
// let Nnum = [1,2,16,4,15,23];
// console.log(Nnum.slice(2,4));

//# method.severse();
// let Nnum = [1,2,16,4,15,23];
// console.log(Nnum.reverse());

// LOOPING THROUGH ARRAY

// #1 FOR EACH LOOP()

// let words = [a,b,c,d,e,f,g,h,i,j,k];
// let number = [1,2,3,4,5,6];
/*
let obj = [
    {
        rollNo : 202201,
        stdName : "Harish Kumar",
        Age : 23,
        section : "A+",
        add : "Hyderabad"
    },
    {
        rollNo : 202202,
        stdName : "Dinesh Kumar",
        Age : 19,
        section : "A+",
        add : 'Kurnool'
    },
    {
        rollNo : 202203,
        stdName : "Pranay",
        Age : 24,
        section : "A+",
        add : "Gondia"
    }
]
obj.forEach(Array => {
    console.log(Array);
});
*/

// let words = [1,2,3,4];
// words.map(Array =>{
//     return Array * Array;
// });
// let Details = [
//   {
//     rollNo: 202201,
//     stdName: 'Harish Kumar',
//     Age: 23,
//     section: 'A+',
//     add: 'Hyderabad',
//   },
// ];

// FOR IN LOOP

// for (const key in number) {
//   console.log(key + '  -  ' + number[key]);
// }

// FOR OF LOOP
// let word = [1, 2, 3, 4, 5, 6];
// for (const value of word) {
//   console.log(value);
// }

// We are demostrating map,filter, and reduce Method in Modern JavaScript
