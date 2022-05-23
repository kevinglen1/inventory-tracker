const Inventory = require("../models/inventory")
const Shipment = require("../models/shipment")

module.exports = {
    new: newInventoryItem,
    create,
    delItem,
    renderEditPage,
    editItem,
    addToShipment,
};

function newInventoryItem(req, res) {
    let shipments = Shipment.find({}, function(err, shipments) {
        Inventory.find({}, function(err, inventories) {
            res.render('inventoryItems', { inventories, shipments });
        });
})
}


function create(req, res) {
    Inventory.create(req.body);
    res.redirect('/inventoryItems');
}

function delItem(req, res) {
    Inventory.deleteOne({ _id: req.params.id }, function (err) {
        if (err) return handleError(err);
      });
      res.redirect('/inventoryItems');
}

async function editItem(req, res) {
    let filter = { _id: req.params.id};
    let update = { itemName: req.body.itemName};
    await Inventory.findOneAndUpdate(filter, update, {
        returnOriginal: false
    })
    res.redirect("/inventoryItems")
}

async function addToShipment(req, res) {
    Shipment.find({customer: req.body.shipmentSelector}, function(err, shipments) {
        let shipment = shipments[0]
        shipment.items.push(req.params.id)
        shipment.save(function(err) {
            res.redirect("/inventoryItems")
        })
    })
}

function renderEditPage(req, res) {
    Inventory.findById(req.params.id, function (err, item) {
        res.render('edit', { item })
    })
}