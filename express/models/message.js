'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    infoId: DataTypes.STRING,
    userId: DataTypes.STRING,
    uuid: DataTypes.STRING,
    content: DataTypes.TEXT,
  }, {});
  // Child.associate = function(models) {
  //   models.Child.hasMany(models.Comment)
  // };
  return Message;
};
