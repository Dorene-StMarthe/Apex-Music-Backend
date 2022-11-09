const db = require('../models')

//index
const index = (req, res) => {
    db.Music.find({}, (error, music) => {
      if(error) return res.status(400).json({ error: error.message });
  
      return res.status(200).json({
        music,
        requestedAt: new Date().toLocaleString()
      });
    });
  };

  //create
const create = (req, res) => {
    db.Music.create(req.body, (err, createdMusic)=> {
        if(err) return res.status(404).json({error:err.message})
        return res.status(200).json(createdMusic)
    })
}

//delete
const destroy = (req, res) => {
    db.Music.findByIdAndDelete(req.params.id, (error, deletedMusic) => {
      if(error) return res.status(400).json({ error: error.message });
  
      return res.status(200).json({
        message: `Music ${deletedMusic.name} deleted successfully`
      });
    });
  };

//update
  const update = (req, res) => {
    db.Music.findByIdAndUpdate(
      req.params.id, 
      {
        $set: req.body
      }, 
      { new: true }, 
      (error, updatedMusic) => {
      if(error) return res.status(400).json({ error: error.message });
  
      return res.status(200).json(updatedMusic)
    });
  }; 

module.exports = {
    index,
    create,
    destroy,
    update
}