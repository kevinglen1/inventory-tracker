const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Kevin:blanket99@cluster0.lt2j6.mongodb.net/?retryWrites=true&w=majority');

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});