'use strict';
module.exports = (sequelize, DataTypes) => {
  const Child = sequelize.define('Child', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  Child.associate = function(models) {
    models.Child.hasMany(models.Comment)
  };
  return Child;
};
