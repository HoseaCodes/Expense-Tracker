const mongoose = require('mongoose')

const loanSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    interestRate: {
        type: Number
    },
    amountDue: {
        type: Number
    },
    originalAmount: {
        type: Number
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Loan", loanSchema);