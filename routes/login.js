var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  res.sendfile('./views/login.html');


});

/* Post login data */
router.post('/', function(req, res) {

    if (req.body.user == 'ben' && req.body.pass == '123') {
        console.log('Logiram');
        res.redirect('/success');
    }
    
    else {
        console.log('Vracam na pocetak');
        res.sendfile('./views/login.html');
    }
    });

module.exports = router;