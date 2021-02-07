'use strict';
module.exports = (sequelize, DataTypes) => {
  const Infos = sequelize.define('Infos', {
    childId: DataTypes.STRING,
    uuid: DataTypes.STRING
  }, {});
  // Child.associate = function(models) {
  //   models.Child.hasMany(models.Comment)
  // };
  return Infos;
};
