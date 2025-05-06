const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Table = sequelize.define('Table', {
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  capacidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('disponível', 'ocupada', 'reservada'),
    defaultValue: 'disponível',
  }
});

module.exports = Table;
