var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require("express-session");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var articlesRouter = require('./routes/articles');
var cookieParser = require('cookie-parser');
var multer = require('multer');
var cors = require('cors');
var app = express();
const config = require("./config/config");
// app.use(cors()); 
app.use(cors({
  origin: ['http://localhost:3000'],//允许该域名下的请求
  methods: ["GET", "POST"],　　　　　　//　　允许接受的 请求类型
  alloweHeaders: ['Conten-Type', 'Authorization', 'Accept', 'Origin'],　　//请求头
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  credentials: true, // 发送cookie
}));
//设置跨域
app.use(session({
  secret: 'this is string key',   // 可以随便写。 一个 String 类型的字符串，作为服务器端生成 session 的签名


  name: 'session_id',/*保存在本地cookie的一个名字 默认connect.sid  可以不设置*/
  resave: false,   /*强制保存 session 即使它并没有变化,。默认为 true。建议设置成 false。*/
  saveUninitialized: true,   //强制将未初始化的 session 存储。  默认值是true  建议设置成true
  cookie: {
    maxAge: config.timeout    /*过期时间*/

  },   /*secure https这样的情况才可以访问cookie*/

  //设置过期时间比如是30分钟，只要游览页面，30分钟没有操作的话在过期

  rolling: true //在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false）


}))
app.use(cookieParser());
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
  extended: true
}));



app.use(multer({ dest: './public/images' }).any())
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/articles', articlesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// var WebSocketServer = require('ws').Server,
// wss = new WebSocketServer({ port: 8002});//服务端口8181
// wss.on('connection', function (ws) {
//     console.log('服务端：客户端已连接');
//     ws.on('message', function (message) {
//         //打印客户端监听的消息
//         console.log(message);
//     });
//     setTimeout(()=>{
//       ws.send('服务端发送的信息')
//     },5000)

// });


module.exports = app;
