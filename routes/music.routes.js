const express = require('express');
const router = express.Router();

const ctrls = require('../controllers')

router.get('/', ctrls.music.index);
router.post('/',ctrls.music.create);
router.delete('/:id', ctrls.music.destroy)

module.exports = router;