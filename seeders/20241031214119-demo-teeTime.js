'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('TeeTimes', [
      {
        courseID: 1,
        date: '2024-11-05',
        startTime: '08:00',
        format: 'Standard',
        spotsLeft: 4,
        rates: JSON.stringify({ greenFee: 50, halfCart: 20 }),
        startingHole: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        courseID: 2,
        date: '2024-11-06',
        startTime: '10:00',
        format: 'Tournament',
        spotsLeft: 2,
        rates: JSON.stringify({ greenFee: 100, halfCart: 30 }),
        startingHole: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TeeTimes', null, {});
  }
};
