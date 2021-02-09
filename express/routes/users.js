var express = require('express');
var router = express.Router();
var models = require('../models');
const account = models.Users;
var md5 = require('md5-node');
const { v4: v4 } = require('uuid');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  if (req.session && req.session.session_id) {  /*获取*/
    let where = {};
    where.uuid = req.session.session_id;
    var result = await models.Users.findOne({
      where: where
    });
    res.json(result);
  } else {
    res.json({
      code:'001',
     data:"未登录"
    });
  }

});
router.post('/register', function (req, res) {
  // 用户注册
  const body = req.body.userinfo
  const { tel, pwd } = req.body.userinfo;

  const data = {
    tel: tel,
    pwd: md5(pwd),
    updateAt: new Date().getTime(),
    createdAt: new Date().getTime(),
    uuid: v4()
  }
  account.create(data).then(doc => {
    const { tel, uuid } = doc
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
