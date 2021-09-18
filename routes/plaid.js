const router = require('express').Router();
const plaidCtrl = require('../controllers/plaid');

router.route('/create_link_token')
    .post(plaidCtrl.createToken)

router.route('/plaid_token_exchange')
    .post(plaidCtrl.tokenExchange)

router.route('/accounts')
    .get(plaidCtrl.getAccounts)

module.exports = router;