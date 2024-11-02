'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Golfers', [
      {
        userID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userID: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Golfers', null, {});
  }
};
