var mysql =require("mysql");
var config = require("./config");
var pool =  mysql.createPool({
        host: config.database.localhost,
        user: config.database.user,
        password: config.database.password,
        database: 'mystock',
        port: 3306
});
module.exports = pool;