var express = require('express');
var router = express.Router();
var app = express()
var path = require('path')
app.use('/static', express.static(path.join(__dirname, 'app/public')))

/* GET home page. */
router.all('/', function(req, res, next) {
    res.sendFile(path.join(__dirname + '../../public/home.html'));
});
router.get('/survey', function(req, res, next) {
    res.sendFile(path.join(__dirname + '../../public/survey.html'));
});





module.exports = router;