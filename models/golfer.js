'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Golfer = sequelize.define('Golfer', {
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  });

  Golfer.associate = (models) => {
    Golfer.belongsTo(models.User, {
      foreignKey: 'userID',
      onDelete: 'CASCADE',
    });
  };

  return Golfer;
};
