var express = require('express');
var router = express.Router();

/* GET success page. */
router.get('/', function(req, res, next) {
  res.sendfile('views/success.html');
});

module.exports = router;
