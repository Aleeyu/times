var express = require('express');
var router = express.Router();
var models = require('../models');
var pathLib = require('path');
const fs = require('fs');
const { v4: uuidv4, v4 } = require('uuid');
/* GET users listing. */
router.get('/', async function (req, res, next) {
  const where={};
  // where.uuid === 'sadasdasdasxcxzv';
  var result = await models.Infos.findAndCountAll({
    where: where
  });

  res.json(result.rows[0]);
});
// 文件上传接口


function check(dir,callback){
  let flag = false;
  fs.readdir('public/images/children',function(err,files){
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
       info:"success"
     })
    }
  })
}
router.post('/fileUpload', function(req, res){
  // 上传的文件在req.files中
  // 用childid查找children目录中是否有文件夹chilid，没有就先创建
  let childId = req.body.childId;
  const filename = 'public/images/children/'+childId+'/'+v4()+pathLib.parse(req.files[0].originalname).ext
  console.log(filename);
  check(childId,(falg)=>{
    if(falg){
      addImg(req,filename,res)
    } else {
      // 创建文件夹
      fs.mkdir('public/images/children/'+childId, {recursive: true}, (err) => {
        addImg(req,filename,res)
    });
    }
  })

})
module.exports = router;
