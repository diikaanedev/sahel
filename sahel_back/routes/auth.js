const express = require("express");

const router = express.Router();

const authCrl = require('../controllers/auth');

router.post('/add-admin', authCrl.singIn);

router.post('/login-admin', authCrl.login);

module.exports = router;