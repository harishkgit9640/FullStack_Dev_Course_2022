let LogIn = (userName) => {
    console.log(`Mr. __${userName} is your username`);
}
let Password = (user, pass = "1234") => {
    console.log(`${user} and ${pass}`);
}

module.exports = { Password, LogIn }