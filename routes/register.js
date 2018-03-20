var express = require('express');
var router = express.Router();
var User = require('../models/users.js');
// var mongoose = require('mongoose');


/* GET register page. */
router.get('/', function(req, res, next) {
  res.render('register');
});

router.post('/', function(req,res,next) {
  if  (req.body.email != "" && req.body.username != "" && req.body.real_name != "" && req.body.birth_date != "")

  if ( req.body.psw == req.body.pswrepeat) {
    
    User.create({
    
      email: req.body.email,
      username: req.body.username,
      real_name: req.body.realusername,
      birth_date: req.body.birth_date,
      psw: req.body.psw,
      pswrepeat: req.body.pswrepeat

    }, function() {
   
       res.redirect('users');

    });
  

  }

else {
  var err = new Error("Sifre se ne poklapaju");
  err.status = 400;
  return next(err);
    }
  });

module.exports = router;
