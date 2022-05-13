module.exports = {
    new: newInventoryItem,
    create,
};

function newInventoryItem(req, res) {
    res.render('new');
}

function create(req, res) {
    console.log(req.body);
    res.render('new');
}