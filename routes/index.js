var express = require('express');
var app=express();
var router = express.Router();
/*var bodyParser=require('body-parser');*/
var userDao = require('../dao/userDao');
/*var session=require('express-session');
var cookieParser=require('cookie-parser');*/

/*app.use(cookieParser());*/

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });


});
//获取登录注册界面
router.get('/loginRegister', function(req, res, next) {
  res.render('loginRegister',{
    title:"欢迎登录注册"
  });

});

//实现登录接口
router.post('/login', function(req, res, next) {
    /*数据测试成功*/
/*    res.send("手机号"+req.body['phonenum2']+",密码"+req.body['password2']);*/
  userDao.queryLogin(req, res, next);
});
//实现注册接口
router.post('/register', function(req, res, next) {
  /*req.body适用于post req.query适用于get*/
  /*res.send("成功了三分之一");*/
 /* res.send("用户名"+req.body['username']+",手机号"+req.body['phonenum']+"，密码"+req.body['password']);*/
  /*以上代码测试成功*/
   userDao.add(req, res, next);
});
module.exports = router;