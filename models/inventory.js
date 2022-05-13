const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    itemName: String
});

module.exports = mongoose.model('Inventory', inventorySchema);