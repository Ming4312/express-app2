var $sql = require("./stockSqlMapping");
var pool = require("../conf/db");

module.exports = {
    queryAll: function(req, res, next, callback){
        pool.getConnection(function(error, connection){
            connection.query($sql.queryAll,function(err, result){
                connection.release();
                callback(result);
            })
        })
    }
}


