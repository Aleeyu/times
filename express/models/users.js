'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  Users.associate = function(models) {
    models.Users.hasMany(models.Comment)
  };
  return Users;
};
