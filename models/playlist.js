const mongoose = require('mongoose');


const playlistSchema = new mongoose.Schema({
  playlistName: {
    type: String, 
    required: true
  },
  finished: {
    type: Boolean,
    default: false
  },
	description: {
    type: String,
    default: 'Music speaks when words fail.'
  },
});

const Playlist = mongoose.model('Playlist', playlistSchema)

module.exports = Playlist