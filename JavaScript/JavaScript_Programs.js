
// Question no.1 - JavaScript Program to Print Hello World.
// we have there are three ways to print hello world.

// First ways- Console.log()
// console.log("Hello World");

// Second way- Alert()
// alert("hello world");

// thirth way- document.write()
// document.write("hello world");

//===================//========================//===================

// Question No.02 - JavaScript program to Add To number

// let a = 10;
// let b = 40;
// let sum = a + b;
// console.log(`The sum of ${a} and ${b} is: = ${sum}`);

// Add To number Entered by User
// const a = parseInt(prompt("Enter The First Value"));
// const b = parseInt(prompt("Enter The second Value"));
// let sum = a + b;
// alert(`The sum of ${a} and ${b} is: = ${sum}`);

//===================//========================//===================
// Question No.03 - JavaScript program to print the squre of the given number.

// const number1 = parseInt(prompt("Enter the value"));
// const result1 = Math.sqrt(number1);

// const number2 = -8;
// const result2 = Math.sqrt(number2);

// const number3 = "49a";
// const result3 = Math.sqrt(number3);

// alert(`The square root of ${number1} is ${result1}`);
// alert(`The square root of ${number2} is ${result2}`);
// alert(`The square root of ${number3} is ${result3}`);

//===================//========================//===================
// Question No.04 - JavaScript program to calculate the  area of a Rectangle.

// let base = parseInt(prompt("Enter the Base of a Triangle : "));
// let height = parseInt(prompt("Enter the Base of a Height : "));
// let Area = (base * height) / 2;
// alert(`The Area of Triangle is: = ${Area}`);



//===================//========================//===================
//Question No.05 JavaScript program to swap two variables

// let a = parseInt(prompt("Enter The value of a:"))
// let b = parseInt(prompt("Enter The value of b:"))
// let swap;

// swap = a;
// a = b;
// b = swap;

// alert(`Swaped value a is: ${a}`);
// alert(`Swaped value b is: ${b}`);

//===================//========================//===================
//Question No.06 - JavaScript Program to Convert Kilometers to Miles
// let kilometers = 5;

// let miles = (0.621371 * kilometers);
// console.log(miles);  // 3.106855 miles

//===================//========================//===================
//Question No.07 -Javascript Program to Convert Celsius to Fahrenheit

// let celsius = parseInt(prompt("Enter The value Celsius:"))
// let Fehrenheit = celsius * 1.8 + 32;

// let Fehrenheit = parseInt(prompt("Enter The Fehrenheit value :"))
// let Celsius = (Fehrenheit - 32) * 5 / 9
// alert(Celsius);

//===================//========================//===================
//Question No.08 -JavaScript Program To Work With Constants

/*
// program to include constants

const a = 5;
console.log(a);

// constants are block-scoped
{
    const a = 50;
    console.log(a);
}
console.log(a);

const arr = ['work', 'exercise', 'eat'];
console.log(arr);

// add elements to arr array
arr[3] = 'hello';
console.log(arr);

// the following code gives error
// changing the value of a throws an error
// uncomment to verify
// a = 8;
// console.log(a);

// throws an error
// const x;
*/

//===================//========================//===================
//Question No.09 - Javascript Program to Generate a Random Number

// let arr = [];
// let num;
// num = Math.random() * (10 - 1) + 1;
// let num1 = Math.floor(num);
// arr.push(num1);

// console.log(`The Array is After Storing Randam Number : ${arr}`);

//===================//========================//===================
//Question No.10 - Javascript Program to Check if a number is Positive, Negative, or Zero

// let number = parseInt(prompt("Enter The Number"));
// // let number = 10;
// if (number == 0) {
//     console.log("Enterd number is Zero", number);
// }
// if (number > 0) {
//     console.log("Enterd number is Pasitive +ve: ", number);
// } else {
//     console.log("Enterd number is Negetive -ve :", number);
// }

//===================//========================//===================
//Question No.11 - Javascript Program to Check if a Number is Odd or Even

// let num = parseInt(prompt("Enter The Number"));
// if (num % 2 == 0) {
//     console.log(`${num} is Even Number`);
// } else {
//     console.log(`${num} is Odd Number`);
// }

//===================//========================//===================
//Question No.12 - JavaScript Program to Find the Largest Among Three Numbers
// let num1 = parseInt(prompt("Enter The Number1"));
// let num2 = parseInt(prompt("Enter The Number2"));
// let num3 = parseInt(prompt("Enter The Number3"));

// if (num1 > num2 && num1 > num3) {
//     console.log(`${num1} is Largest number`);

// } else if (num2 > num1 && num2 > num3) {
//     console.log(`${num2} is Largest number`);
// }
// else {
//     console.log(`${num3} is Largest number`);
// }

//===================//========================//===================
//Question No.13 - JavaScript Program to Check Prime Number
// let num = parseInt(prompt("Enter The Number"));
// // let num = 5;
// let count = 0;
// if (num <= 0) {
//     console.log(num, "Please Enter the positive number");
// }
// else if (num == 1) {
//     console.log("1 is nieghter prime number nor composite number");
// } else {
//     for (let i = 1; i <= num; i++) {
//         let rem = num % i;
//         if (rem == 0) {
//             count++;
//         }
//     }
//     if (count == 2) {
//         console.log(num, " is Prime Number");
//     }
//     else {
//         console.log(num, " is not Prime Number");
//     }
// }
//===================//========================//===================
//Question No.14 - JavaScript Program to Print All Prime Numbers in an Interval
// let minNum = 1;
// let maxNum = 20;

// console.log(`the prime number between ${minNum} and ${maxNum} are: `);
// for (let i = minNum; i <= maxNum; i++) {
//     let round = 0;
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             round = 1;
//             break;
//         }
//     }

//     // if number greater than 1 and not divisible by other numbers
//     if (i > 1 && round == 0) {
//         console.log(i);
//     }
// }


//===================//========================//===================
//Question No.15 - JavaScript Program to Find the Factorial of a Number
let useInput = 5;
let fact = 1;
if (useInput === 0 || useInput === 1) {
    console.log("The factorial of", useInput, "is 1");
} else {
    for (let i = 1; i <= useInput; i++) {
        fact = fact * i; // 1x2x3x4x5 = 120
        console.log(fact);
    }
}


