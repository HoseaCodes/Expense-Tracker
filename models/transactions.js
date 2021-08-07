const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    transaction_id: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    amount: {
        type: Number,
        required: [true, 'Please add a positive or negative number']
    },
    category: {
        type: String,
        required: true
    },
    createdAt: {
        type : Date,
        default: Date.now
        }
    })

    module.exports = mongoose.model('Transaction', transactionSchema);