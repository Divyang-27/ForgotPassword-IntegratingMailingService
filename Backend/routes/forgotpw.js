const express = require('express');
const router = express.Router();

const forgotPwController = require('../controllers/forgotpw');

router.post('/forgotpassword', forgotPwController.forgotpw);

module.exports = router;
