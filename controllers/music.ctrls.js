const db = require('../models')

const index = (req, res) => {
    res.send('Get route is working')
}

const create = (req, res) => {
    db.Music.create(req.body, (err, createdMusic)=> {
        if(err) return res.status(404).json({error:err.message})
        return res.status(200).json(createdMusic)
    })
}

module.exports = {
    index,
    create,
}