var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');


/* GET contact page. */
router.get('/', function(req, res) {
  res.sendfile('./views/contact.html');
});

/* POST contact page info */
router.post('/', function(req, res) {
    
    var now = new Date(); 
    
    fs.appendFile( 'kontakt-' + now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + "-" + now.getHours()  + '.json', JSON.stringify(req.body), function() {
//        console.log('file writter');
     res.sendfile('./views/hvala.html');

    }); 

})


module.exports = router;