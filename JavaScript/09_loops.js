// We learn about loops

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// write the program to sum first 10 prime number.

let sum = 0;
let n = prompt("Enter you number :")
for (let i = 0; i < n; i++) {
    sum += i;

    console.log((i), "+");
}
console.log("sum of ", n ," is : ", sum);
