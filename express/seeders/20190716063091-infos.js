'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Infos', [
            {
                childId:'xsadsasdassced',
                uuid: 'xsadsswsasdassced',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Infos', null, {});
    }
};
