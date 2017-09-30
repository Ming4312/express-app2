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
    req.body.userId = req.session.loginUser.userId
    spendingDao.queryEventByMonth(req,res,next,function(data){
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
    req.body.userId = req.session.loginUser.userId;
    spendingDao.insertNewEvent(req, res, next, function(data){
        res.redirect('/calendar');
    })
})
router.get('/getEventById', function(req, res, next) {
    spendingDao.queryEventById(req, res, next, function(data){
        res.send({data: data})
    })
})
router.post('/updateEvent', function(req, res, next) {
    var eventTime = req.body.eventTime.split(':');
    var d = new Date(req.body.date).setHours(eventTime[0],eventTime[1]);
    req.body.date = d;
    spendingDao.updateEvent(req, res, next, function(data){
        res.redirect('/calendar');
    })
})
router.post('/deleteById', function(req, res, next) {
    spendingDao.deleteEventById(req,res,next,function(data){
        res.send({data:data});
    })
})
module.exports = router;