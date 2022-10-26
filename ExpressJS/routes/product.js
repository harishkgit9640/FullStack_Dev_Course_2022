const router = require('express').Router();

router.get('/product', (req, res) => {
    res.render('product', {
        title: 'Product page!'
    })
});



module.exports = router;











