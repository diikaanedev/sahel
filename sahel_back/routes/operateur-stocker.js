const express = require("express");

const router = express.Router();

const operateurStockerCtrl = require('../controllers/operateur-stocker');

router.post('/', operateurStockerCtrl.add);

router.get('/', operateurStockerCtrl.all);


module.exports = router;