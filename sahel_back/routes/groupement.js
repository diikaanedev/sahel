const express = require("express");

const router = express.Router();

const groupementCtrl = require('../controllers/groupement');

router.post('/', groupementCtrl.add);

router.post('/add-membre', groupementCtrl.addMember);

router.post('/liste-champs-membres', groupementCtrl.listeChampsMember);
router.post('/liste-membres', groupementCtrl.listeMember);

router.get('/', groupementCtrl.all);

router.get('/:id' , groupementCtrl.one);

router.put('/:id', groupementCtrl.update);

router.delete('/:id', groupementCtrl.delete);


module.exports = router;