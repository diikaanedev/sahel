const express = require("express");

const router = express.Router();

const chargerCtrl = require('../controllers/charge');

router.post('/', chargerCtrl.add);

router.post('/liste-charge-exploitant', chargerCtrl.listeChargeExploitant);

router.post('/add-charge-exploitant', chargerCtrl.addChargeExploitant);

router.get('/', chargerCtrl.all);

router.get('/:id' , chargerCtrl.one);

router.put('/:id', chargerCtrl.update);

router.delete('/:id', chargerCtrl.delete);


module.exports = router;