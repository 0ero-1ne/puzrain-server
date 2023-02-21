const db = require('./../db/db');

const reviewSchema = new db.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 3,
        trim: true
    },
    city: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 3,
        trim: true
    },
    comment: {
        type: String,
        required: true,
        maxlength: 100,
        minlength: 3,
        trim: true
    },
    productImg: {
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
}, { collection: 'reviews' });

module.exports = db.model('Review', reviewSchema);