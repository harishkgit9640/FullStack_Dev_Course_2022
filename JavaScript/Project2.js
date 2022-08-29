// Snake Water Gun

let user_count = 0;
let comp_count = 0;
let chance = 0;
while (chance <= 5) {
    let user = prompt("Choose snake water and gun!");
    let computer = ["snake", "water", "gun"];
    computer = computer[Math.floor(Math.random() * computer.length)];

    if (computer == "gun" && user == 'snake') {
        alert("You lose!");
        comp_count++;
    }
    else if (computer == "snake" && user == 'gun') {
        alert("You win!");
        user_count++
    }
    else if (computer == "water" && user == 'snake') {
        alert("You win!");
        user_count++;

    }
    else if (computer == "snake" && user == 'water') {
        alert("You lose!");
        comp_count++;

    }
    else if (computer == "water" && user == 'gun') {
        alert("You win!");
        user_count++;

    }
    else if (computer == "gun" && user == 'water') {
        alert("You lose!");
        comp_count++;
    }
    chance++;
}
if (chance === 5) {
    console.log("Try Again!");
}

if (comp_count > user_count) {
    console.log("Computer Win!" + comp_count + " and " + user_count);
    console.log("computer score = " + comp_count + "\n user score = " + user_count);

}
else if (comp_count === user_count) {
    console.log("Game Draw!" + comp_count + " and " + user_count);
    console.log("computer score = " + comp_count + "\n user score = " + user_count);

}
else {
    console.log("User Win!" + comp_count + " and " + user_count);
    console.log("computer score = " + comp_count + "\n user score = " + user_count);


}