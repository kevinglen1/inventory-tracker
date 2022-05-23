const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const shipmentsCtrl = require('../controllers/shipments');

router.get('/', shipmentsCtrl.index);
router.post('/', shipmentsCtrl.create);
// router.post("/removefromshipment/:id", shipmentsCtrl.removefromshipment)
router.delete("/:id", shipmentsCtrl.delShipment)
router.put("/:id", shipmentsCtrl.update)
router.get("/:id", shipmentsCtrl.show)


module.exports = router;
