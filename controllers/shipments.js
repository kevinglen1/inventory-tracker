const Shipment = require("../models/shipment")
const Inventory = require("../models/inventory")

module.exports = {
    index,
    create,
    delShipment,
    show,
    update,
    // removeFromShipment
};

function index(req, res) {
    Shipment.find({}, function(err, shipments) {
        res.render('shipments', { shipments });
      });
}

function create(req, res) {
    Shipment.create(req.body);
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
    let update = { customer: req.body.customer};
    await Shipment.findOneAndUpdate(filter, update, {
        returnOriginal: false
    })
    res.redirect("/shipments")
}

function show(req, res) {
    Shipment.findById(req.params.id).populate('items').exec(function (err, shipments) {
        res.render('editShipment', { shipments })
    })
}

// async function removeFromShipment(req, res) {
//     Shipment.find({customer: req.body.shipmentSelector}, function(err, shipments) {
//         let shipment = shipments[0]
//         shipment.items.push(req.params.id)
//         shipment.save(function(err) {
//             res.redirect(`/shipments/${shipment.id}`)
//         })
//     })
// }