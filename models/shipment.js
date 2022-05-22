const mongoose = require('mongoose');
const Inventory = require('./inventory')

const Schema = mongoose.Schema;

const shipmentSchema = new Schema({
    customer: String,
    items: [{type: Schema.Types.ObjectId, ref: 'Inventory'}]
})

module.exports = mongoose.model('Shipment', shipmentSchema);