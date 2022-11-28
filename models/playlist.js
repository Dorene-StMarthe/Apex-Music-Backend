const mongoose = require('mongoose');


const playlistSchema = new mongoose.Schema({
  playlistName: {
    type: String, 
    required: true
  },
	description: {
    type: String, 
    required: true
  },
});

const Playlist = mongoose.model('Playlist', playlistSchema)

module.exports = Playlist