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
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
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
    phone: {
        type: Number
    },
    online: {
        type: Boolean
    },
    role: {
        type: Number,
        default: 0
    },
    text: {
        type: String,
        trim: true,
        // required: [true, 'Please add some text']
    },
    isAdmin: {
        type: Boolean
    },
    transactions: {
        type: Array,
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema);