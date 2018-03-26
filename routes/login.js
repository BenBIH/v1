var express = require('express');
var router = express.Router();
var User = require('../models/users.js');


/* GET login page. */
router.get('/', function (req, res, next) {
  res.render('login');

});

/* login from mongo */
router.post('/', function (req, res, next) {
  if (req.body.nickname && req.body.password) {
    User.authenticate(req.body.nickname, req.body.password, function (error, user) {
      if (error || !user) {
        var err = new Error('Korisnicko ime ili sifra nije ok');
        res.send("Korisnicko ime ili sifra nije ok");
        err.status = 401;
        return next(err);
      } else {
        return res.redirect('/users');
      }
    })
  };
});

module.exports = router;

/* login iz v1 zadatka sa fix poacima */
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