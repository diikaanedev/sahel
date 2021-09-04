const express = require('express');

const router = express.Router();

const cultureCtrl = require('../controllers/culture');

router.post('/', cultureCtrl.add);

router.get('/', cultureCtrl.all);

router.post('/create-culture-champs', cultureCtrl.addCultureChamps);


module.exports = router; 