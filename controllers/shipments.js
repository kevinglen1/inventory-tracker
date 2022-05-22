const Shipment = require("../models/shipment")
const Inventory = require("../models/inventory")

module.exports = {
    index,
    create,
    delShipment,
    show,
    update,
};

function index(req, res) {
    Shipment.find({}, function(err, shipments) {
        res.render('shipments', { shipments });
      });
}

function create(req, res) {
    Shipment.create(req.body);
    console.log('req.body ----',req.body.customer);
    console.log('Shipment ->', Shipment);
    res.redirect('/shipments');
}

function delShipment(req, res) {
    Shipment.deleteOne({ _id: req.params.id }, function (err) {
        if (err) return handleError(err);
      });
      res.redirect('/shipments');
}

async function update(req, res) {
    let filter = { _id: req.params.id};
    console.log('filter', filter)
    let update = { itemName: req.body.itemName};
    await Inventory.findOneAndUpdate(filter, update, {
        returnOriginal: false
    })
    res.redirect("/shipments")
}

function show(req, res) {
    // Shipment.find({}).populate({ path: "items", model: "Inventory" })
    Shipment.findById(req.params.id).populate('items').exec(function (err, shipments) {
        
        console.log(shipments)
        console.log(shipments.customer)
        res.render('editShipment', { shipments })
    })
}