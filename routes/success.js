var express = require('express');
var router = express.Router();

/* GET success page after login. */
router.get('/', function(req, res, next) {
  res.sendfile('views/success.html');
});

module.exports = router;
