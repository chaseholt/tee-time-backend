'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        userName: 'JohnDoe',
        password: 'securepassword123',
        email: 'johndoe@example.com',
        cards: JSON.stringify([{ cardId: 1, cardName: 'Visa' }]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'JaneSmith',
        password: 'anothersecurepassword',
        email: 'janesmith@example.com',
        cards: JSON.stringify([{ cardId: 2, cardName: 'Mastercard' }]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
