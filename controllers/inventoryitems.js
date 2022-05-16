const Inventory = require("../models/inventory")

module.exports = {
    new: newInventoryItem,
    create,
    delItem,
};

function newInventoryItem(req, res) {
    res.render('new');
}

function create(req, res) {
    console.log(req.body);
    Inventory.create(req.body);
    console.log(req.body.itemName);
    console.log('Inventory ->', Inventory);
    console.log(Inventory.find());
    res.redirect('new');
}

function delItem(req, res) {
    let inventory = req.body;
    inventory.deleteOne({ itemName: item }, function (err) {
        if (err) return handleError(err);
        // deleted at most one tank document
      });
      res.redirect('new');
}

