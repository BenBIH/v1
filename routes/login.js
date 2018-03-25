var express = require('express');
var router = express.Router();
var User = require('../models/users.js');


/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('login');

});

/* login from mongo */
  router.post('/', function(req,res,next) {
  User.findOne({ username: req.body.nickname }, function(err, user) {
    console.log(err);
    if (!user) {
      res.render('/login');
    } 
    else {
      if (req.body.password === user.password) {
        res.redirect('/users');
      }  
      else {
          console.log('Ne radi');
          res.redirect('/login');
    }};
  });
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

