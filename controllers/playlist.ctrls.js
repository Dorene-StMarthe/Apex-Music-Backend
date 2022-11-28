const db = require('../models')

//index
const index = (req, res) => {
    db.Playlist.find({}, (error, playlists) => {
      if(error) return res.status(400).json({ error: error.message });
  
      return res.status(200).json({
        playlists,
        requestedAt: new Date().toLocaleString()
      });
    });
  };

  //create
const create = (req, res) => {
    db.Playlist.create(req.body, (err, createdPlaylist)=> {
        if(err) return res.status(404).json({error:err.message})
        return res.status(200).json({
          createdPlaylist,
          createdAt: new Date().toLocaleString(),
        }); //  .json() will send proper headers in response so client knows it's json coming back
      });
    };

//update
  const update = (req, res) => {
    db.Playlist.findByIdAndUpdate(
      req.params.id, 
      {
        $set: req.body
      }, 
      { new: true }, 
      (error, updatedPlaylist) => {
      if(error) return res.status(400).json({ error: error.message });
  
      return res.status(200).json(updatedPlaylist)
    });
  }; 

  //delete
const destroy = (req, res) => {
  db.Playlist.findByIdAndDelete(req.params.id, (error, deletedPlaylist) => {
    if(error) return res.status(400).json({ error: error.message });

    return res.status(200).json({
      message: `${deletedPlaylist.playlistName} deleted successfully`
    });
  });
};

module.exports = {
    index,
    create,
    destroy,
    update
}