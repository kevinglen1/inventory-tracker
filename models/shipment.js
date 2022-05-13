const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shipmentSchema = new Schema({
    items: [String]
})

module.exports = mongoose.model('Shipment', shipmentSchema);