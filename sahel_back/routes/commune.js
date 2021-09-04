const express = require("express");

const router = express.Router();

const communeCtrl = require('../controllers/commune');

router.post('/', communeCtrl.add);

router.get('/', communeCtrl.all);

router.get('/:id' , communeCtrl.one);

router.put('/:id', communeCtrl.update);

router.delete('/:id', communeCtrl.delete);


module.exports = router;