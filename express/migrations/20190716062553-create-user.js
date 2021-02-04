//npx sequelize-cli db:migrate
//npx sequelize-cli migration:create --name User-AddUpdatedAt
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      nickName: {
        type: Sequelize.STRING
      },
      tel: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.STRING
      },
      birth: {
        type: Sequelize.STRING
      },
      headImg: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};