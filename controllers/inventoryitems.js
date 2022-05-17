const Inventory = require("../models/inventory")

module.exports = {
    new: newInventoryItem,
    create,
    delItem,
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
    let inventory = req.body;
    console.log(req.body);
    inventory.deleteOne({ itemName: item }, function (err) {
        if (err) return handleError(err);
        // deleted at most one tank document
      });
      res.redirect('new');
}

