'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Rates = sequelize.define('Rates', {
    greenFee: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    halfCart: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    subtotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  return Rates;
};
