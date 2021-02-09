var express = require('express');
var router = express.Router();
var models = require('../models');
var pathLib = require('path');
const fs = require('fs');
const { v4 } = require('uuid');
const config = require("../config/config");
var md5 = require('md5-node');
var moment = require('moment');
router.post('/login', async function (req, res) {
  const { tel, pwd } = req.body.userinfo;

  const data = {
    tel: tel,
    pwd: md5(pwd)
  }

  const where = {tel:tel, pwd: data.pwd };
  var result = await models.Users.findAndCountAll({
    where: where
  });
  let session_id = result.rows[0].uuid
  req.session.session_id = session_id;
  //登录成功后，在cookie中添加isLogin，过期时间为10秒、、30*60*1000
  res.cookie('session_id', session_id, { maxAge: config.timeout })
  console.log('登录将sessid写入cookie--------------', req.session.session_id);
  if (result.rows.length > 0) {
    res.json({
      code: 0,
      data: result.rows[0]
    })
  } else {
    res.json({
      code: 0,
      data: 'error'
    })
  }

})

router.post('/logout', async function (req, res) {
  req.session.destroy(function (err) {
    console.log(err);
  })
  res.json({
    code: '001',
    data: '退出登录'
  })

})
/* GET users listing. */
router.get('/', async function (req, res, next) {
  console.log('index_get=======')
  console.log(req.session&&req.session.session_id)
  if(req.session&&req.session.session_id){  /*获取*/
    const where={};
  where.uuid === 'sadasdasdasxcxzv';
  var result = await models.Users.findAndCountAll({
    where: where
  });

  res.json(result.rows[0]);
}else{
  res.json({
    code:'001',
    data:"未登录"
  });
}
});
// 文件上传接口


function check(path,dir,callback){
  let flag = false;
  fs.readdir(path,function(err,files){
    console.log(files)

    const index = files.findIndex((i)=>{
      return i === dir
    })
    if(index==-1){
      flag = false;
    } else {
      flag = true
    }
    callback(flag)
  })

}
function addImg(req,filename,res){
  fs.rename(req.files[0].path, filename, function(err){
    if(err){
      res.send(err)
    }else{
     res.send({
       code:'003',
       data:"success"
     })
    }
  })
}
router.post('/fileUpload', function(req, res){
  // 上传的文件在req.files中  
  // 用childid查找children目录中是否有文件夹chilid，没有就先创建
  let childId = req.body.childId;
  const mydate = moment(new Date()).format().split('T')[0];
  const filename = 'public/images/children/'+childId+'/'+mydate+'/'+v4()+pathLib.parse(req.files[0].originalname).ext
  // 查看是否有某个小孩id的文件夹
  check('public/images/children',childId,(falg)=>{
    if(falg){
      // 查询到某个文件夹了，继续查找有没有当前日期的文件夹
      check('public/images/children/'+childId,mydate,(f)=>{
          if(f){
            // 找到了文件夹
            addImg(req,filename,res)
          } else {
            // 没找到当天文件夹
            // 创建文件夹
            fs.mkdir('public/images/children/'+childId+'/'+mydate, {recursive: true}, (err) => {
              addImg(req,filename,res)
          });
          }
      })
    } else {
      // 创建文件夹
      fs.mkdir('public/images/children/'+childId+'/'+mydate, {recursive: true}, (err) => {
        addImg(req,filename,res)
    });
    }
  })

})
module.exports = router;
