const sequelize = require('./config/database');
const User = require('./models/user');
const Table = require('./models/table');
const Reservation = require('./models/reservation');

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Tabelas sincronizadas com sucesso!');
    process.exit(); // encerra o script
  })
  .catch((err) => {
    console.error('Erro ao sincronizar tabelas:', err);
    process.exit(1);
  });