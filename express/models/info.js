'use strict';
module.exports = (sequelize, DataTypes) => {
  const Info = sequelize.define('Info', {
    childId: DataTypes.STRING,
    uuid: DataTypes.STRING
  }, {});
  // Child.associate = function(models) {
  //   models.Child.hasMany(models.Comment)
  // };
  return Info;
};
