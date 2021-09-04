const express = require("express");

const router = express.Router();

const structureFinanciereCtrl = require('../controllers/structure-financiere');

router.post('/', structureFinanciereCtrl.add);

router.get('/', structureFinanciereCtrl.all);


module.exports = router;