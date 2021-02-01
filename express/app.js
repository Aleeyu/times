var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();
//设置跨域

var  cors = require( 'cors' ); 
app.use(cors()); 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var bodyParser = require('body-parser');/*post方法*/
app.use(bodyParser.urlencoded({
  extended:true
}));
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

var WebSocketServer = require('ws').Server,
wss = new WebSocketServer({ port: 8002});//服务端口8181
wss.on('connection', function (ws) {
    console.log('服务端：客户端已连接');
    ws.on('message', function (message) {
        //打印客户端监听的消息
        console.log(message);
    });
    setTimeout(()=>{
      ws.send('服务端发送的信息')
    },5000)
    
});
module.exports = app;
