const express = require('express');
const router = express.Router();

const ctrls = require('../controllers')

router.get('/', ctrls.music.index);
router.post('/',ctrls.music.create);
router.delete('/:id', ctrls.music.destroy)
router.put('/:id', ctrls.music.update)

module.exports = router;