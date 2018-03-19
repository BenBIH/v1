var express = require('express');
var router = express.Router();
var User = require('../models/users.js');
// var mongoose = require('mongoose');


/* GET register page. */
router.get('/', function(req, res, next) {
  res.render('register');
});


module.exports = router;
