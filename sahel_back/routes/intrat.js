const express = require("express");

const router = express.Router();

const intratCtrl = require('../controllers/intrat');

router.post('/', intratCtrl.add);

router.get('/', intratCtrl.all);

router.post('/liste-intrat-exploitant', intratCtrl.listeIntratExploitant);

router.post('/add-intrat-exploitant', intratCtrl.addIntratChamps);


//router.get('/:id' , intratCtrl.one);

//router.put('/:id', intratCtrl.update);

//router.delete('/:id', intratCtrl.delete);


module.exports = router;