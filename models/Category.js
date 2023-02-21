const db = require('./../db/db');

const categorySchema = new db.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 3,
        trim: true
    },
    created: {
        type: Date,
        default: Date.now()
    }
}, { collection: 'categories' });

module.exports = db.model('Category', categorySchema);