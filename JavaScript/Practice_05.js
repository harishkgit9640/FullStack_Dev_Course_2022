// Hacker man program

const HackerMan = async () => {
    const pro1 = new Promise((resolve, reject) => {

        console.log("Fetching the User_name...");
        setTimeout(() => {
            resolve('completed1');
        }, 3000);
    });

    const pro2 = new Promise((resolve, reject) => {
        console.log("Fetching the password....");
        setTimeout(() => {
            resolve('completed2');
        }, 4000);
    });

    try {
        console.log('User_name has Fetched');
        let p1 = await pro1;
        console.log('password has Fetched');
        let p2 = await pro2;
        console.log("You Are Hacked 🤪🤪🤪");
        return [p1, p2];
    } catch (e) {
        console.log("the error is " + e);
    }

}
let result = HackerMan();
result.then((val) => console.log(val))

console.log(result);

