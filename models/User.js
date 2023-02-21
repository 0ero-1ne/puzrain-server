const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const db = require('./../db/db');

const userSchema = new db.Schema({
    username: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 3,
        trim: true
    },
    email: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 3,
        trim: true
    },
    password: {
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
}, { collection: 'users' });

userSchema.pre('save', function(next) {
    let user = this;

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });

});

module.exports = db.model('User', userSchema);