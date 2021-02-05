'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Message', [
            {
                infoId:'xsadsswsasdassced',
                userId:'sadasdasdasxcxzv',
                uuid: 'xsaddasdassced',
                content:'这是评论',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Message', null, {});
    }
};
