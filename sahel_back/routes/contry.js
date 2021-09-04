const contryCtrl = require('../controllers/contry');

const express = require("express");

const router = express.Router();

router.get('/', contryCtrl.all);
router.get('/:id', contryCtrl.one);

router.post('/', contryCtrl.add);

router.put('/:id', contryCtrl.update);

router.delete('/:id', contryCtrl.delete);

module.exports = router;