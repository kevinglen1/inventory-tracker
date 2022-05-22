var express = require('express');
var router = express.Router();
const inventoryItemsCtrl = require('../controllers/inventoryitems');

router.get('/', inventoryItemsCtrl.new);
router.post('/', inventoryItemsCtrl.create);
router.put("/addtoshipment/:id", inventoryItemsCtrl.addToShipment)
router.delete("/:id", inventoryItemsCtrl.delItem)
router.put("/:id", inventoryItemsCtrl.editItem)
router.get("/:id", inventoryItemsCtrl.renderEditPage)



module.exports = router;
