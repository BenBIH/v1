var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res) {
    res.render('login');
});

/* Post login data */
router.post('/', function(req, res) {

    if (req.body.user == 'ben' && req.body.pass == '123') {
        console.log('Logiram');
        res.redirect('/success');
    }
    
    else {
        console.log('Vracam na pocetak');
        res.render('login');
    }
    });

module.exports = router;