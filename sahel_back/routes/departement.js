const express = require("express");

const router = express.Router();

const departementCtrl = require('../controllers/departement');

router.post('/', departementCtrl.add);

router.get('/', departementCtrl.all);

router.get('/:id' , departementCtrl.one);

router.put('/:id', departementCtrl.update);

router.delete('/:id', departementCtrl.delete);


module.exports = router;