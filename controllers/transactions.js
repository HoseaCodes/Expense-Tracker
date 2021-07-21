const Transaction = require("../models/transactions");

const getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find()

        return res.status(200).json({
            success: true,
            result: transactions.length,
            data: transactions
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message
        })
    }
} 

const addTransaction = async (req, res, next) => {
    try {
        const {text, amount } = req.body;
    
        const newTransaction = await Transaction.create(req.body)
        return res.status(201).json({ 
            success: true,
            data: newTransaction,
            msg: "Created a new transaction" 
        })
    } catch (err) {
        console.log(err)
        if(err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.messages);
            return res.status(400).json({
                success: false,
                msg: err.message 
            })
        }
        return res.status(500).json({ 
            success: false,
            msg: 'Server Error'
        })
    }
} 
const deleteTractions = async (req, res, next) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id)

        if(!transaction) {
            return res.status(404).json({
                success: false,
                msg: 'No transaction found' 
            })
        }
        return res.status(200).json({ 
            success: true,
            data: {},
            msg: "Deleted transaction" 
        })
    } catch (err) {
        return res.status(500).json({ 
            success: false,
            msg: 'Server Error'
        })
    }
} 


const transactionCtrl = {
    getTransactions,
    deleteTractions,
    addTransaction
}

module.exports = transactionCtrl;