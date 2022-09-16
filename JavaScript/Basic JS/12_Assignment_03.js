// write the program for print the table of any number
let num = 2;
for (let i = 1; i <= 12; i++) {
    for (let j = 1; j <= 5; j++) {
        let table = i * j;
        console.log(table);
    }
    console.log();

}



const mark = {
    Harish: 50,
    Pranay: 60,
    Ramraj: 41,
    Anmol: 48
}

// #1 Ways of use looping 
// for(let i = 0; i<Object.keys(mark).length; i++){
//     console.log(Object.keys(mark)[i] , " = " , mark[Object.keys(mark)[i]]);
// }

// #2 Ways of use looping 

// for (let hk in mark){
//     console.log(hk , " = " , mark[hk]);
// }

// #3 Solution
// How to print Try again untill the user print currect number.

// let cNum = 5;
// let i;
// while(i != cNum){
//     console.log("Try Again");
//     i = prompt("Enter The Currect Number :");
//     console.log("You have Entered Currect Number, Good :)");
// }


// #4 Solution
const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4;
}
console.log(mean(2, 3, 4, 5));


