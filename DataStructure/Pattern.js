
/*
let show = "";
for (i = 1; i <= 5; i++) {
    for (j = 0; j < i; j++) {
        show += " * ";
    }
    show += "\n";
}
console.log(show);
*/

// output of the above code
/*
 *
 *  *
 *  *  *
 *  *  *  *
 *  *  *  *  *
*/


// ==============================|||============================


let row = 5;
let show = "";
for (i = 1; i <= row; i++) {

    for (s = 0; s > row - i; s++) {
        show = "";
    }

    for (j = 0; j < (2 * i - row); j++) {
        show += " * ";
    }
    show += "\n";
}
console.log(show);

// output of the above code

/*
 *  *  *  *  *
 *  *  *  *
 *  *  *
 *  *
 *

*/

// ==============================|||============================


// let show = "";
// for (i = 5; i >= 1; i--) {
//     for (j = 0; j < i; j++) {
//         show += " * ";
//     }
//     show += "\n";
// }
// console.log(show);

// output of the above code