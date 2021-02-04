//npx sequelize-cli db:migrate
//npx sequelize-cli migration:create --name User-AddUpdatedAt
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Child', {
      userId: {
        type: Sequelize.STRING
      },
      uuid: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      roleId: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.STRING
      },
      birth: {
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
    return queryInterface.dropTable('Child');
  }
};