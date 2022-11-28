const express = require('express');
const router = express.Router();

const ctrls = require('../controllers')

router.get('/', ctrls.playlists.index);
router.post('/',ctrls.playlists.create);
router.delete('/:id', ctrls.playlists.destroy)
router.put('/:id', ctrls.playlists.update)

module.exports = router;