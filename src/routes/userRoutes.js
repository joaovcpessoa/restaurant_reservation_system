const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');
const { authenticate } = require('../middlewares/authMiddleware');

router.post('/', authenticate, reservationController.createReservation);
router.get('/', authenticate, reservationController.listUserReservations);
router.patch('/:id/cancelar', authenticate, reservationController.cancelReservation);

module.exports = router;