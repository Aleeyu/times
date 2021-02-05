'use strict';
module.exports = (sequelize, DataTypes) => {
  const Child = sequelize.define('Child', {
    userId: DataTypes.STRING,
    uuid: DataTypes.STRING,
    name:  DataTypes.STRING,
    sex:  DataTypes.STRING,
    birth:  DataTypes.STRING,
    headImg:  DataTypes.STRING,
  }, {});
  // Child.associate = function(models) {
  //   models.Child.hasMany(models.Comment)
  // };
  return Child;
};
