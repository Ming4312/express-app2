var $sql = require("./spendingSqlMapping");
var pool = require("../conf/spending_recordDB");

module.exports = {
    queryAll: function(req, res, next, callback){
        pool.getConnection(function(error, connection){
            connection.query($sql.queryAll,function(err, result){
                connection.release();
                callback(result);
            })
        })
    },
    queryById: function(req, res, next, callback){
        pool.getConnection(function(error, connection){
            connection.query($sql.queryById, [req.query.eventId], function(err, result){
                connection.release();
                callback(result);
            })
        })
    },
    queryByMonth: function(req, res, next, callback){
         pool.getConnection(function(error, connection){
            connection.query($sql.queryByMonth, [req.query.start, req.query.end], function(err, result){
                connection.release();
                callback(result);
            })
        })
    },
    queryEventOption:  function(req, res, next, callback){
         pool.getConnection(function(error, connection){
            connection.query($sql.queryEventOption, function(err, result){
                connection.release();
                callback(result);
            })
        })
    },
    insert: function(req, res, next, callback){
         pool.getConnection(function(error, connection){
            connection.query($sql.insert,[req.body.spending_out, req.body.type, req.body.remark, new Date(req.body.date), new Date(), new Date()], function(err, result){
                connection.release();
                callback(result);
            })
        })
    },
    update: function(req, res, next, callback){
        var date = [req.body.spending_out, req.body.type, req.body.remark, new Date(req.body.date), new Date(), req.body.eventId];
        pool.getConnection(function(error, connection) {
            connection.query($sql.update, date, function(err, result){
                connection.release();
                callback(result);
            })
        })
    },
    delete: function(req, res, next, callback){
        pool.getConnection(function(error, connection){
            connection.query($sql.delete,req.body.eventId, function(err, result){
                connection.release();
                callback(result);
            })
        })
    }
}


