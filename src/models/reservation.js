const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Table = require('./table');

const Reservation = sequelize.define('Reservation', {
  dataHora: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('ativa', 'cancelada'),
    defaultValue: 'ativa',
  }
});

// Relacionamentos
User.hasMany(Reservation);
Reservation.belongsTo(User);

Table.hasMany(Reservation);
Reservation.belongsTo(Table);

module.exports = Reservation;