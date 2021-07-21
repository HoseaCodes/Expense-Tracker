const router = require('express').Router();
const transactionCtrl = require('../controllers/transactions');

router.route('/')
.get(transactionCtrl.getTransactions)
.post(transactionCtrl.addTransaction)

router.route('/:id') 
.delete(transactionCtrl.deleteTractions)

module.exports = router;