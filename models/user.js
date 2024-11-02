'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    cards: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Card, {
      foreignKey: 'userID',
      onDelete: 'CASCADE',
    });
    User.hasMany(models.Golfer, {
      foreignKey: 'userID',
      onDelete: 'CASCADE',
    });
  };

  return User;
};
