'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    teeTimeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TeeTimes',
        key: 'id',
      },
    },
    golfers: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  });

  Booking.associate = (models) => {
    Booking.belongsTo(models.TeeTime, {
      foreignKey: 'teeTimeID',
      onDelete: 'CASCADE',
    });
  };

  return Booking;
};
