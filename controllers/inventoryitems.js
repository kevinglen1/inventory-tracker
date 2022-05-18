const Inventory = require("../models/inventory")

module.exports = {
    new: newInventoryItem,
    create,
    delItem,
    renderEditPage,
    editItem,
};

function newInventoryItem(req, res) {
    Inventory.find({}, function(err, inventories) {
        res.render('new', { inventories });
      });
}

function create(req, res) {
    Inventory.create(req.body);
    console.log('req.body ----',req.body.itemName);
    console.log('Inventory ->', Inventory);
    res.redirect('new');
}

function delItem(req, res) {
    Inventory.deleteOne({ _id: req.params.id }, function (err) {
        if (err) return handleError(err);
      });
      res.redirect('new');
}

async function editItem(req, res) {
    let filter = { _id: req.params.id};
    let update = { itemName: req.body.itemName};
    await Inventory.findOneAndUpdate(filter, update, {
        returnOriginal: false
    })
    res.redirect("new")
}

function renderEditPage(req, res) {
    Inventory.findById(req.params.id, function (err, item) {
        res.render('edit', { item })
    })
}