var express = require('express');
var router = express.Router();
var Users = require('../models/users.js');


/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('login');

});

/* login from mongo */
  router.post('/', function(req,res,next) {
  Users.findOne({ username: req.body.nickname }, function(err, users) {
    console.log(err);
    if (!users) {
      res.render('login');
    } else {
      if (req.body.sifra === users.psw) {
        res.redirect('/success');
      } else {
          console.log('Ne radi');
          res.redirect('/login');
    }};
  });
});

module.exports = router;

/* Post login data */
/* router.post('/', function(req, res) {

    if (req.body.user == 'ben' && req.body.pass == '123') {
        console.log('Logiram');
        res.redirect('/success');
    }
    
    else {
        console.log('Vracam na pocetak');
        res.render('login');
    }
    });*/

