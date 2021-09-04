const express = require("express");

const pretCtrl = require('../controllers/pret');

const router = express.Router();

router.get('/' , pretCtrl.all);

router.post('/',pretCtrl.add);

router.post('/membre' , pretCtrl.membre);

router.post('/structure' , pretCtrl.structure);



module.exports = router;
