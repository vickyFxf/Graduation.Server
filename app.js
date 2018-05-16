/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 11:09:46 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-23 09:47:51
 */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');
var mongoose = require('mongoose');
var fs=require('fs');
var multer=require('multer');
//引入路由配置模块
var index = require('./routes/index');
var users = require('./routes/users');
var subject = require('./routes/subject');
var classification = require('./routes/classification');
var upload = require('./routes/upload');
var document = require('./routes/document');
var MyDocument = require('./routes/myDocument');
var app = express();
//连接数据库
mongoose.connect('mongodb://localhost:27017/Graduation', { useMongoClient: true });
// view engine setup
app.set('views', path.join(__dirname, 'views'));//视图引擎路径
app.set('view engine', 'ejs');//视图引擎类型
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
//解决跨域问题
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });
//使用路由模块
app.use('/', index);
app.use('/User-Module', users);
app.use('/Subject-Module', subject);
app.use('/Class-Module', classification);
app.use('/Upload-Module', upload);
app.use('/Document-Module', document);
app.use('/MyDocument-Module', MyDocument);
// catch 404 and forward to error handler

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
