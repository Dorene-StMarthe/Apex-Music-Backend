const db = require('../models')

const index = (req, res) => {
    db.Music.find({}, (error, music) => {
      if(error) return res.status(400).json({ error: error.message });
  
      return res.status(200).json({
        music,
        requestedAt: new Date().toLocaleString()
      });
    });
  };

const create = (req, res) => {
    db.Music.create(req.body, (err, createdMusic)=> {
        if(err) return res.status(404).json({error:err.message})
        return res.status(200).json(createdMusic)
    })
}


const destroy = (req, res) => {
    db.Music.findByIdAndDelete(req.params.id, (error, deletedMusic) => {
      if(error) return res.status(400).json({ error: error.message });
  
      return res.status(200).json({
        message: `Music ${deletedMusic.name} deleted successfully`
      });
    });
  };

module.exports = {
    index,
    create,
    destroy
}