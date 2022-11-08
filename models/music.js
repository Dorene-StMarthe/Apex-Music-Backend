const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
	song: {
    type: String, 
    required: true
  },
	artist: {
    type: String, 
  },
	played: {
    type:Boolean, 
  },
	likes: {
    type: String, 
    default: 0
  },
	tags: [{ type:String }]
});


const Music = mongoose.model('Music', musicSchema)

module.exports = Music;