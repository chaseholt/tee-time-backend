'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cards', [
      {
        cardName: 'Visa',
        cardNumber: '1234567812345678',
        cardExpir: '12/25',
        userID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardName: 'Mastercard',
        cardNumber: '8765432187654321',
        cardExpir: '06/24',
        userID: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cards', null, {});
  }
};
