var express = require('express');
var router = express.Router();
const inventoryItemsCtrl = require('../controllers/inventoryitems');

/* GET inventoryitems listing. */
router.get('/new', inventoryItemsCtrl.new);
router.post('/', inventoryItemsCtrl.create);
router.delete("/:id", inventoryItemsCtrl.delItem)
router.put("/:id", inventoryItemsCtrl.editItem)
router.get("/:id", inventoryItemsCtrl.renderEditPage)


module.exports = router;
