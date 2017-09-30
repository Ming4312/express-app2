var express = require('express');
var router = express.Router();
var stockDao = require("../dao/stockDao");
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express'});
});
router.get('/viewAll', function(req,res,next){

    res.render('tradingList')
})
router.get('/calendar', function(req, res, next) {
  
    request.get('http://localhost:8080/api/geteventOptions', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.render('calendar', { title: 'Express', options: JSON.parse(body)});
      }else{
          console.log(error)
      }
    })
});
module.exports = router;
