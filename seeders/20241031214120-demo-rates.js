'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Rates', [
      {
        greenFee: 50,
        halfCart: 20,
        subtotal: 70,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        greenFee: 100,
        halfCart: 30,
        subtotal: 130,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Rates', null, {});
  }
};
