/*
let arr = [-5, -4, -3, -2, 0, 2, 4, 6];

let zeroSum = (arr) => {
    for (const number of arr) {
        for (i = 1; i < arr.length; i++) {
            if (number + arr[i] === 0) {
                return [number, arr[i]];
            }
        }
    }
}
console.log(zeroSum(arr));
*/


// find the even number of elements and then make double each number and print the length of the array.

/*

let arr = [1, 2, 4, 5, 6, 8, 9, 10, 12, 13];
let newArr = [];
let counter = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        counter++;
        newArr.push(arr[i] * 2);
    }
}
console.log(newArr);  //[ 4, 8, 12, 16, 20, 24 ]
console.log(counter); // 6

*/

// SORTING A ARRAY

/* 
let arr = [34, 23, 5, 23, 56, 33, 75, 36, 2, 1];

for (i = 0; i < arr.length; i++) {
    console.log(arr);
    for (j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);
*/


// DELETE A ELEMENT WITHIN A ARRAY

let arr = [45, 32, 41, 23, 64, 21, 5, 73, 4];
let pos = 1;
for (i = pos; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
}
arr.length = arr.length - 1;
console.log(arr);
7
