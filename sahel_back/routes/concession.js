const express = require("express");

const router = express.Router();

const concessionCtrl = require('../controllers/concession');

router.post('/', concessionCtrl.add);

router.post('/village', concessionCtrl.allConcessionByVillage);

router.get('/', concessionCtrl.all);

router.get('/fontaine', concessionCtrl.allConcessionWithFontaine);
router.get('/electrique', concessionCtrl.allConcessionWithElectrik);

router.get('/:id', concessionCtrl.one);

router.put('/:id', concessionCtrl.upadte);

router.delete('/:id', concessionCtrl.delete);

module.exports = router;