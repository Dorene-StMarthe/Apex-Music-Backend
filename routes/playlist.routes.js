const express = require('express');
const router = express.Router();

const ctrls = require('../controllers')

router.get('/', ctrls.playlist.index);
router.post('/',ctrls.playlist.create);
router.delete('/:id', ctrls.playlist.destroy)
router.put('/:id', ctrls.playlist.update)

module.exports = router;