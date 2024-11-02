'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    holes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    distance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    onlineBookingEnabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    cartMandatory: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  Course.associate = (models) => {
    Course.hasMany(models.TeeTime, {
      foreignKey: 'courseID',
      onDelete: 'CASCADE',
    });
  };

  return Course;
};
