//npx sequelize-cli db:migrate
//npx sequelize-cli migration:create --name User-AddUpdatedAt
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Info', {
      childId: {
        type: Sequelize.STRING
      },
      uuid: {
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
    return queryInterface.dropTable('Info');
  }
};