var express = require('express');
var router = express.Router();
var models = require('../models');
/* GET users listing. */
router.get('/', async function (req, res, next) {
  const where={};
  where.uuid === 'sadasdasdasxcxzv';
  var result = await models.Users.findAndCountAll({
    where: where
  });

  res.json(result.rows[0]);
});

module.exports = router;
