const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');
//const verifyPasswordStrength = require('../middleware/verifyPasswordStrength')


router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;