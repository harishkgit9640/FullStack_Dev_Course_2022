

// server creation
const express = require('express');

const app = express();

app.get('/', (req, res) => {

    console.log('hello world, I M form server');
});

// app.listen(3000, (req, res) => {
//     console.log('server listening on port 3000');
// });