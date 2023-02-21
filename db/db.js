const db = require('mongoose');

db.set('strictQuery', false);
db.connect('mongodb://localhost:27017/puzrain', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

db.connection.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = db;