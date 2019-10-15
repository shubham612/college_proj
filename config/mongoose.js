const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/miniproject_db');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error occcur'));

db.once('open',function(){
    console.log('Successfully Connected to database :: MongoDb');
});

module.exports = db;