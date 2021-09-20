const auth = require('../utils/auth');
const router = require('express').Router();
const userCtrl = require('../controllers/user');

router.post('/register', userCtrl.register);

router.post('/login', userCtrl.login);

router.route('/:id').put(userCtrl.updateProfile)

router.get('/refresh_token', userCtrl.refreshToken);

router.get('/info', auth, userCtrl.getUser);


module.exports = router