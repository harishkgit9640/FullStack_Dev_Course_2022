// All About method of Strings

let Name = "Anuska";
let Name1 = "       Harish sir          ";
let Name2 = "Raj";
// // console.log(Name.length);
// // console.log(Name.toUpperCase());
// // console.log(Name.toLocaleLowerCase());
// // console.log(Name.slice(2,4));
// // console.log(Name.replace("Ha","Ma"));
// console.log(Name1.concat(" , I\'m one of the Student of Master Spoken Class"));
// console.log(Name1.trim());


// let arr = [1, 2, 3, 4, 5, 6, 7];
let arr = [];
let num = parseInt(prompt("Enter The number:"));
while (num > 0) {
    let num = parseInt(prompt("Enter The number:"));
    arr.push(num);
    if (num == 0) {
        break;
    }
}
console.log(arr);
// console.log(arr.reverse());