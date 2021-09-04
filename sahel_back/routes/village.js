const express = require("express");

const router = express.Router();

const villageCtrl = require('../controllers/village');

router.get('/', villageCtrl.all);

router.get('/:id', villageCtrl.one);

router.post('/', villageCtrl.add);

router.post('/commune', villageCtrl.allVillage);

router.put('/:id', villageCtrl.update);

router.delete('/:id', villageCtrl.delete);


module.exports = router;