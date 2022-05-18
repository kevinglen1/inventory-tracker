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

function editItem(req, res) {
    let filter = { _id: req.params.id};
    let update = { _id: req.params.itemName};

    Inventory.findOneAndUpdate(filter, update, {
        returnOriginal: false
    })
}

function renderEditPage(req, res) {
    Inventory.findById(req.params.id, function (err, item) {
        res.render('edit', { item })
    })

    // console.log('req.inventories =',req.inventories);
    // console.log('req.params.id =',req.params.id);
    // res.render('edit', { item: req.inventories(req.params.id)})
}