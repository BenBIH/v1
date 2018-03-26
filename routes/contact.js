var express = require('express');
var router = express.Router();
var path = require('path');
// var fs = require('fs');
var Message = require('../models/messages.js');

/* GET contact page. */
router.get('/', function (req, res) {
    res.render('contact');
});

router.post('/', function (req, res, next) {
    if (req.body.name != "" && req.body.email != "" &&
        req.body.tel != "" && req.body.message != "") {
        Message.create({
            name: req.body.name,
            usremail: req.body.email,
            number: req.body.tel,
            message: req.body.message
        }, function (err, instance) {
            if (err) console.log(err);

            res.render('kontakts');

        });
    } else {
        res.redirect('/contact');
    }

});

/* POST contact page info 
router.post('/', function(req, res) {
    
    var now = new Date(); 

    fs.appendFile( 'Temp/kontakt-' + now.getFullYear() + "-" + parseInt(now.getMonth()+1) + "-" + now.getDate() + "-" + now.getHours()  + '.json', JSON.stringify(req.body), function() {
//        console.log('file writter');
    res.render('hvala');

    }); 

})*/

module.exports = router;