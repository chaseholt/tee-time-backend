'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Bookings', [
      {
        teeTimeID: 1,
        golfers: JSON.stringify([{ userId: 1, name: 'John Doe' }]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teeTimeID: 2,
        golfers: JSON.stringify([{ userId: 2, name: 'Jane Smith' }]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Bookings', null, {});
  }
};
