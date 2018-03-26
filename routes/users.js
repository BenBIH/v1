var express = require('express');
var router = express.Router();
var Users = require('../models/users');

/* GET users listing. */
router.get('/', function (req, res, next) {
  Users.find({}, function (err, data) {
    if (!err) {
      res.render('users', {
        title: 'Users',
        data: data
      });
    } else {
      throw err;
    }
  });
});

module.exports = router;