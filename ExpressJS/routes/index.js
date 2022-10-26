const router = require('express').Router();

const apiMiddleWares = require('../middlewares/apiKey.js')

// router.use(apiMiddleWares);
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home page'
    })
});
router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About page'
    })
});
router.get('/download', (req, res) => {
    res.download(path.resolve(__dirname) + '/about.html');
});

router.get('/api/download', apiMiddleWares, (req, res) => {

    res.json([
        {
            id: 01,
            name: 'Harish',
            age: 22
        },
        {
            id: 02,
            name: 'Ramraj',
            age: 21
        }, ,
        {
            id: 03,
            name: 'Dinesh',
            age: 20
        }
    ])

});

module.exports = router;
