var mysql =require("mysql");
var pool =  mysql.createPool({
        host: '127.0.0.1',
        user: 'root',
        password: 'P@ssw0rd',
        database: 'spending_record',
        port: 3306
});
module.exports = pool;