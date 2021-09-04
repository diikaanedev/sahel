const express = require('express');

const router = express.Router();

const agricultureCtrl = require('../controllers/agriculture');
router.post('/', agricultureCtrl.add);
router.post('/member-create', agricultureCtrl.addMember);

router.get('/', agricultureCtrl.all);

module.exports = router;