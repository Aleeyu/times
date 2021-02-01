var express = require('express');
var router = express.Router();
var q = require('../config/sqlpool');
/* GET users listing. */
router.get('/', function (req, res, next) {
  //2.发送请求(查询)
  q.query("SELECT * FROM Persons", function (err, data) {
    if (err) {
      console.log("数据库访问出错", err);
    } else {
      res.send(data);
    }
  })

});
router.post('/', function (req, res, next) {
  let sql = `INSERT INTO Persons VALUES ("${req.body.id}","${req.body.LastName}","${req.body.FirstName}","${req.body.Address}","${req.body.City}")`;
  //2.发送请求
  q.query(sql, function (err, data) {
    if (err) {
      console.log("数据库访问出错", err);
    } else {
      res.send(data);
    }
  })

});
router.post('/del', function (req, res, next) {
  let sql = `delete from Persons where PersonID="s${req.body.id}"`
  //2.发送请求
  q.query(sql, function (err, data) {
    if (err) {
      console.log("数据库访问出错", err);
    } else {
      res.send(data);
    }
  })

});
module.exports = router;
