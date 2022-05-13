var express = require('express');
var router = express.Router();
const inventoryItemsCtrl = require('../controllers/inventoryitems');

/* GET inventoryitems listing. */
router.get('/new', inventoryItemsCtrl.new);
router.post('/', inventoryItemsCtrl.create);

module.exports = router;
