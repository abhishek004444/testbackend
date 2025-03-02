const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item.controller.js');
const { authenticate } = require('../middleware/authMiddleware');

router.get('/',authenticate, itemController.getItems);
router.post('/create',authenticate, itemController.createItem);
router.put('/:id', itemController.updateItem);
router.delete('/:id', itemController.deleteItem);


module.exports = router;
