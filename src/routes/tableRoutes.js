const express = require('express');
const router = express.Router();
const tableController = require('../controllers/tableController');
const { authenticate, isAdmin } = require('../middlewares/authMiddleware');

router.get('/', authenticate, tableController.listTables);
router.post('/', authenticate, isAdmin, tableController.createTable);
router.patch('/:id', authenticate, isAdmin, tableController.updateTable);
router.delete('/:id', authenticate, isAdmin, tableController.removeTable);

module.exports = router;