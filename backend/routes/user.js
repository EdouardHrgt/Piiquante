const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const pwd = require('../middleware/password');
const rateLimit = require('../middleware/rate-limit');

router.post('/signup', rateLimit, pwd, userCtrl.signUp);
router.post('/login', rateLimit, userCtrl.logIn);

module.exports = router;
