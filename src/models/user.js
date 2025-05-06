// DataTypes: usado para definir os tipos de dados das colunas (ex: STRING, INTEGER, BOOLEAN, etc.).
// sequelize: conexão já configurada com o banco de dados (importada de config/database.js).

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Cria o model User, que será mapeado para uma tabela no banco.
const User = sequelize.define('User', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: { isEmail: true },
  },
  senhaHash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
});

module.exports = User;