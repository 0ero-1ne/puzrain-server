const db = require('./../db/db');

const productSchema = new db.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 3,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    company: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 2,
        trim: true
    },
    country: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 3,
        trim: true
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 3,
        trim: true
    },
    category: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 3,
        trim: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000,
        minlength: 3,
        trim: true
    },
    created: {
        type: Date,
        default: Date.now()
    }
}, { collection: 'products' });

module.exports = db.model('Product', productSchema);