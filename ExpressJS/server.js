const { log } = require('console');
const express = require('express');
const path = require('path');
// const apiMiddleWares = require('./middlewares/apiKey.js')


const app = express();
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');

// app.use(express.static('public'))

const mainRouter = require('./routes/index.js');
const product = require('./routes/product.js');
// app.use(apiMiddleWares);
app.use(product);
app.use(mainRouter);
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
