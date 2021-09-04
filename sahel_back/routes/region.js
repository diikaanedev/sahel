const express = require("express");

const regionCtrl = require('../controllers/region');

const router = express.Router();

router.get('/' , regionCtrl.all);

router.get('/:id' , regionCtrl.one);

router.post('/',regionCtrl.add);

router.put('/:id', regionCtrl.update);

router.delete('/', regionCtrl.delete);




module.exports = router;
