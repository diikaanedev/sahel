const express = require("express");

const router = express.Router();

const membreCtrl = require('../controllers/membre');

router.post('/', membreCtrl.add);

router.get('/', membreCtrl.all);

router.post('/lister-champs-member', membreCtrl.memberChamps);


router.get('/:id' , membreCtrl.one);

router.put('/:id', membreCtrl.update);

router.delete('/:id', membreCtrl.delete);


module.exports = router;