var express = require('express');
var router = express.Router();
var models = require('../models');
const account = models.Users;
var md5 = require('md5-node');
const utility  = require('utility');
const { v4: uuidv4, v4 } = require('uuid');
/* GET users listing. */
router.get('/', async function (req, res, next) {
  const where={};
  where.uuid === 'sadasdasdasxcxzv';
  var result = await models.Users.findAndCountAll({
    where: where
  });

  res.json(result.rows[0]);
});
router.post('/login',async function(req, res) {
  // 用户注册
  const body = req.body.userinfo
  const {tel, pwd} = req.body.userinfo;

  const data = {
    tel: tel,
    pwd: md5(pwd)
  }
  console.log(data);

  const where={pwd:data.pwd};
  where.uuid === 'sadasdasdasxcxzv';
  var result = await models.Users.findAndCountAll({
    where: where
  });
  console.log('--------------')
  console.log(result)
  if(result.rows.length>0){
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
router.post('/register', function(req, res) {
  // 用户注册
  const body = req.body.userinfo
  const {tel, pwd} = req.body.userinfo;

  const data = {
    tel: tel,
    pwd: md5(pwd),
    updateAt: new Date().getTime(),
    createdAt: new Date().getTime(),
    uuid: v4()
  }
  console.log(data)
  account.create(data).then(doc => {
    const {tel, uuid} = doc
    res.cookie('user_id', uuid)
    return res.json({
      code: 0,
      data: {
        tel: tel,
        uuid: uuid
      }
    })
  })
})
module.exports = router;
