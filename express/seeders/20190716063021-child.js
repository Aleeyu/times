'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Child', [
            {
                userId:'85735e52-3887-4507-8ba7-87b4fc7921f3',
                uuid: '85735e52-3887-4507-8ba7-87b4fc792122',
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
