const express = require("express");

const router = express.Router();

const commercialiationCtrl = require('../controllers/commercialisation');

router.post('/', commercialiationCtrl.add);
router.get('/', commercialiationCtrl.all);
router.post('/circuit', commercialiationCtrl.etatGeneralVenteCircuit);
router.post('/produit', commercialiationCtrl.etatGeneralVenteProduit);



module.exports = router;