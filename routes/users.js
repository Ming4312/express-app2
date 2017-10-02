var express = require('express');
var router = express.Router();
var hashpassword = require("../conf/password_encrypttion");
var spendingDao = require("../dao/spendingDao");
var session = require('express-session');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/login', function(req,res,next){
    /*hashpassword.encrypt('1234', function(err, hash){
        res.send(hash);
    })*/
    res.render('login');
})
router.post('/login', function(req, res, next){
    spendingDao.queryUserByName(req, res, next, function(data){
        if(data[0] != undefined){
            if(data[0].active==0){
                res.status(400).send("Your account is locked");
            }else{
                hashpassword.encrypt(data[0].password, function(err, hash){
                    if(!err){
                        hashpassword.comparePassword(data[0].password, hash, function(err, result){
                            if(result){
                                req.session.loginUser = { userId: data[0].id, username: data[0].username};
                                res.sendStatus(200)
                                
                                //res.redirect('/');
                                
                            }
                        })
                    }
                })
            }
        }else{
            res.status(400).send("Wrong Username or Password");
           // res.redirect('/users/login');
        }
    })
})
router.get('/logout', function(req, res, next) {
    req.session.destroy()
    res.redirect('/')
})
router.get('/register', function(req, res, next) {
    res.render('register');
})
router.post('/register', function(req, res, next){
   
    hashpassword.encrypt(req.body.password, function(err, hash){
        if(!err){
            req.body.password = hash;
            spendingDao.insertNewUser(req, res, next, function(data){
                res.redirect('/');
            })
        }
    })
    
})
router.post('/usernameExists', function(req, res, next){
    spendingDao.queryUserByName(req, res, next, function(data){
        if(data[0] == undefined)
            res.send(true);
        else
            res.send(false);
        
    })
})

module.exports = router;
