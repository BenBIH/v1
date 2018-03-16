var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');


/* GET contact page. */
router.get('/', function(req, res) {
    res.render('contact');
});

/* POST contact page info */
router.post('/', function(req, res) {
    
    var now = new Date(); 

    fs.appendFile( 'Temp/kontakt-' + now.getFullYear() + "-" + parseInt(now.getMonth()+1) + "-" + now.getDate() + "-" + now.getHours()  + '.json', JSON.stringify(req.body), function() {
//        console.log('file writter');
    res.render('hvala');

    }); 

})

module.exports = router;