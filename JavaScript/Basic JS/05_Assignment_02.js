// Practice set 


//  #_01 solution


// let age = prompt("Enter you age: ");
// if(age>10 && age<20){
//     console.log("your age lies between 10 and 20");
    
// }
// else{
    //     console.log("your age doesn't lies between 10 and 20");
    // }
    

    //  #_02 solution
/*
let color = prompt("Enter Any Color:");
switch (color) {
    case "black":
        console.log("Your favorite colour is", color);
        break;
    case "blue":
        console.log("Your favorite colour is", color);
        break;
    case "green":
        console.log("Your favorite colour is", color);
        break;
    default:
        console.log("Something went wrong! Please Enter the valid color");
        
}
*/

    //  #_03 solution
/*
let number = prompt("Enter Any Number:");
number = Number.parseInt(number);
if(number%2 == 0 && number){
    console.log("This is Even Number");
}
else{
    console.log("This is Odd number");

}
*/

    //  #_04 solution

let number = prompt("Enter Any Number:");
number = Number.parseInt(number);
if(number%2 == 0){
    console.log("The  Number is divisible by 2");
}
else if(number%3 == 0){
    console.log("The  Number is divisible by 3");
}
else{
    console.log("Please Enter the valid number");
}


    //  #_05 solution

let age = prompt("Enter your age:");
age = age>18? "you can drive" : "You can not drive";
console.log(age);


