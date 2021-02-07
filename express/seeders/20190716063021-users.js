'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                uuid: 'sadasdasdasxcxzv',
                name:"李与",
                nickName:"小小李",
                tel:"18980026312",
                sex:"男",
                birth:"1990-01-01",
                headImg:"",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
