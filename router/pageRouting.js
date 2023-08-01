const express = require('express')
const router = express.Router()


router.get('/', function (req, res) {
    // if (req.session.user) {
        res.render('pages/index');
    // } else if(req.session.admin) {
    //     res.redirect('/about')
    // } else {
    //     res.redirect('/login')
    // }
});
router.get('/about', function (req, res) {
    res.render('pages/about');
});

router.get('/contact', function (req, res) {
    res.render('pages/contact');
});

router.get('/portfolio', function (req, res) {
    res.render('pages/portfolio');
});

router.get('/we_do', function (req, res) {
    res.render('pages/we_do');
});

module.exports = router
