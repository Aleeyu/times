'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Child', [
            {
                userId:'sadasdasdasxcxzv',
                uuid: 'xsadsasdassced',
                name:"小小李",
                sex:"男",
                birth:"2020-04-04",
                headImg:"https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Child', null, {});
    }
};
