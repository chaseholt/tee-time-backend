'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cardName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cardNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cardExpir: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  });

  Card.associate = (models) => {
    Card.belongsTo(models.User, {
      foreignKey: 'userID',
      onDelete: 'CASCADE',
    });
  };

  return Card;
};
