const express = require('express');
const router = express.Router();

const ctrls = require('../controllers')

router.get('/', ctrls.music.index);

module.exports = router;