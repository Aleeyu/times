'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    uuid: DataTypes.STRING,
    name:  DataTypes.STRING,
    nickName: DataTypes.STRING,
    tel: DataTypes.STRING,
    sex:  DataTypes.STRING,
    birth:  DataTypes.STRING,
    headImg:  DataTypes.STRING,
  }, {});
  // Users.associate = function(models) {
  //   models.Users.hasMany(models.Comment)
  // };
  return Users;
};
