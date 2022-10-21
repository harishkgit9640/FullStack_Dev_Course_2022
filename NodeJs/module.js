
// (function (exports, module, __dirname, __filename, require) {
// })()

// npm Module
// const color = require('cli-color');
// console.log(color.green('harishkumar'));


// Local Module
// const register = require('./Auth');
// register.LogIn("harish_kumar");
// register.Password("harish", "password");

// core module
const path = require('path');
// console.log('folder name:', path.dirname(__filename));
// console.log('folder name:', path.basename(__filename));
// console.log('folder name:', path.extname(__filename));

console.log('folder name:', path.parse(__filename));

// const fs = require('fs');