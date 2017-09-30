var bcrypt = require("bcrypt-nodejs");
module.exports={

    encrypt: function(password, callback){
        bcrypt.genSalt(10, function(err, salt){
            if(err)
                return callback(err)
            bcrypt.hash(password, salt,null, function(err, hash) {
                return callback(err, hash);
            });
        })
    },
    comparePassword: function(plainPass, hashword, callback) {
        bcrypt.compare(plainPass, hashword, function(err, isPasswordMatch) {   
           return err == null ?
               callback(null, isPasswordMatch) :
               callback(err);
        });
    }
}