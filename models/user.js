const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    avatar: {
        type: String
    },
    bio: {
        type: String
    },
    address: {
        street1: String,
        street2: String,
        city: String,
        state: String,
        country: String,
        zip: Number
    },
    online: {
        type: Boolean
    },
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    isAdmin: {
        type: Boolean
    },
    createdAt: {
        type : Date,
        default: Date.now
        }
    })

    module.exports = mongoose.model('User', UserSchema);