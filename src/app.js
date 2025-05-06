const express = require('express');
const app = express();

const authRoutes = require('./routes/authRoutes');
const tableRoutes = require('./routes/tableRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

app.use(express.json());

app.use('/users', authRoutes);
app.use('/tables', tableRoutes);
app.use('/reservations', reservationRoutes);

module.exports = app;
