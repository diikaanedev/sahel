const express = require("express");

const router = express.Router();

const recolteCtrl = require('../controllers/recolte-champs');


router.post('/', recolteCtrl.add);

module.exports = router;