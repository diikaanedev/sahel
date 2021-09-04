const express = require("express");

const router = express.Router();

const equipementCtrl = require('../controllers/equipement');

router.post('/', equipementCtrl.add);

router.get('/', equipementCtrl.all);

router.post('/liste-equipement-exploitant', equipementCtrl.listeEquipementExploitant);

router.post('/add-equipement-exploitant', equipementCtrl.addEquipementExploitant);


//router.get('/:id' , equipementCtrl.one);

//router.put('/:id', equipementCtrl.update);

//router.delete('/:id', equipementCtrl.delete);


module.exports = router;