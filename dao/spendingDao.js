var $sql = require("./spendingSqlMapping");
var pool = require("../conf/spending_recordDB");

module.exports = {
    queryAll: function(req, res, next, callback){
        pool.getConnection(function(error, connection){
            connection.query($sql.queryAll, function(err, result){
                connection.release();
                callback(result);
            })
        })
    },
    queryEventById: function(req, res, next, callback){
        pool.getConnection(function(error, connection){
            connection.query($sql.queryEventById, [req.query.eventId], function(err, result){
                connection.release();
                callback(result);
            })
        })
    },
    queryEventByMonth: function(req, res, next, callback){
         pool.getConnection(function(error, connection){
            connection.query($sql.queryEventByMonth, [req.query.start, req.query.end, req.body.userId], function(err, result){
                connection.release();
                callback(result);
            })
        })
    },
    queryEventOption: function(req, res, next, callback){
         pool.getConnection(function(error, connection){
            connection.query($sql.queryEventOption, function(err, result){
                connection.release();
                callback(result);
            })
        })
    },
    queryUserByName: function(req, res, next, callback){
         pool.getConnection(function(error, connection){
            connection.query($sql.queryUserByName, req.body.username, function(err, result){
                connection.release();
                callback(result);
            })
        })
    },
    insertNewEvent: function(req, res, next, callback){
         pool.getConnection(function(error, connection){
            connection.query($sql.insertNewEvent,[req.body.userId, req.body.spending_out, req.body.type, req.body.remark, new Date(req.body.date), new Date(), new Date()], function(err, result){
                connection.release();
                callback(result);
            })
        })
    },
    insertNewUser: function(req, res, next, callback){
        console.log(req.body.username + " : " + req.body.password)
         pool.getConnection(function(error, connection){
            connection.query($sql.insertNewUser,[req.body.username, req.body.password, 1, null, new Date()], function(err, result){
                connection.release();
                callback(result);
            })
        })
    },
    updateEvent: function(req, res, next, callback){
        var date = [req.body.spending_out, req.body.type, req.body.remark, new Date(req.body.date), new Date(), req.body.eventId];
        pool.getConnection(function(error, connection) {
            connection.query($sql.updateEvent, date, function(err, result){
                connection.release();
                callback(result);
            })
        })
    },
    deleteEventById: function(req, res, next, callback){
        pool.getConnection(function(error, connection){
            connection.query($sql.deleteEventById,req.body.eventId, function(err, result){
                connection.release();
                callback(result);
            })
        })
    }
}


