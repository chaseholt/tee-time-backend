'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const TeeTime = sequelize.define('TeeTime', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    courseID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    startTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    format: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    spotsLeft: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rates: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    startingHole: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  TeeTime.associate = (models) => {
    TeeTime.hasMany(models.Booking, {
      foreignKey: 'teeTimeID',
      onDelete: 'CASCADE',
    });
    TeeTime.belongsTo(models.Course, {
      foreignKey: 'courseID',
      onDelete: 'CASCADE',
    });
  };

  return TeeTime;
};
