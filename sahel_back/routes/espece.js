const express = require("express");

const router = express.Router();

const especeCtrl = require('../controllers/espece');

router.post('/', especeCtrl.add);

router.get('/', especeCtrl.all);

router.post('/animaux-trait', especeCtrl.addAnimauxTrait);

router.post('/lister-animaux-trait-member', especeCtrl.listerAnimauxTraitMember);

//router.post('/add-equipement-exploitant', especeCtrl.addEquipementExploitant);


//router.get('/:id' , equipementCtrl.one);

//router.put('/:id', equipementCtrl.update);

//router.delete('/:id', equipementCtrl.delete);


module.exports = router;