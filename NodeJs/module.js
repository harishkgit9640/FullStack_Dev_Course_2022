
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

// #dirname
console.log('folder name:', path.basename(__filename));

// #extension
// console.log('folder name:', path.extname(__filename));

// #parse
// console.log('folder name:', path.parse(__filename));

// #join
// console.log('join path:', path.join(__dirname, 'v2', 'app.js'));


const fs = require('fs');

// make directory
// fs.mkdir(path.join(__dirname, '/demo'), (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('folder created:', path.join(__dirname));
// });

// create a file in the directory

// fs.writeFile(path.join(__dirname, 'demo', 'scripts.js'), '//hello World\n', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('new file created');

//     console.log('file created:', path.join(__dirname, 'demo', 'scripts.js'));
//     fs.appendFile(path.join(__dirname, 'demo', 'scripts.js'), '//Hello Im Javascript', (err) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log('new data loaded');
//     });
// });

// #read file in the directory

// fs.readFile(path.join(__dirname, 'demo', 'scripts.js'), 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
// });

// #os module
// const os = require('os');
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.release());
// console.log(os.type());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.uptime());
// console.log(os.cpus());
// console.log(os.version());


// #emitter module

const Emitter = require('events');

// const emitter = new Emitter();

// emitter.on('test', (data) => {
//    console.log(data);
// });

// emitter.emit('text', { name: 'hello nodejs' });

// # Classes in NodeJs


// class Auth extends Emitter {
//    register(user) {
//       console.log('register success!');
//       this.emit('register', user);
//    }
// }

// const auth = new Auth();
// auth.on('register', (data) => {
//    console.log(`sending email to ${data}`);
// })
// auth.on('register', (data) => {
//    console.log(`sending Welcome email to ${data}`);
// })

// auth.register('Harish Kumar')