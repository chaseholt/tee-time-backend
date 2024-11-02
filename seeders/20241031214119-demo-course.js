'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Courses', [
      {
        name: 'Sunnydale Golf Club',
        holes: 18,
        distance: 6500,
        onlineBookingEnabled: true,
        cartMandatory: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pebble Beach Golf Links',
        holes: 18,
        distance: 7000,
        onlineBookingEnabled: true,
        cartMandatory: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Courses', null, {});
  }
};
