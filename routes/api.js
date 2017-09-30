var express = require('express');
var router = express.Router();
var stockDao = require("../dao/stockDao");
var spendingDao = require("../dao/spendingDao");
router.get('/getAllTradingHistory', function(req, res, next) {
    
    stockDao.queryAll(req,res,next,function(data){
        res.send({data: data});
    });
});
router.get('/getEventsByMonth', function(req, res, next){
   
    spendingDao.queryByMonth(req,res,next,function(data){
        res.send({data: data});
    })
})
router.get('/geteventOptions', function(req, res, next) {
    
    spendingDao.queryEventOption(req, res, next, function(data){
        res.send({data: data})
    })
})
router.post('/addNewEvent', function(req, res, next){
    var eventTime = req.body.eventTime.split(':');
    var d = new Date(req.body.date).setHours(eventTime[0],eventTime[1]);
    req.body.date = d;
    spendingDao.insert(req, res, next, function(data){
        res.redirect('/calendar');
    })
})
router.get('/getEventById', function(req, res, next) {
    spendingDao.queryById(req, res, next, function(data){
        res.send({data: data})
    })
})
router.post('/updateEvent', function(req, res, next) {
    var eventTime = req.body.eventTime.split(':');
    var d = new Date(req.body.date).setHours(eventTime[0],eventTime[1]);
    req.body.date = d;
    spendingDao.update(req, res, next, function(data){
        res.redirect('/calendar');
    })
})
router.post('/deleteById', function(req, res, next) {
    spendingDao.delete(req,res,next,function(data){
        res.send({data:data});
    })
})
module.exports = router;