const express = require('express')
const app = express();
require('dotenv').config()
const port = process.env.PORT|| 3000;
//console.log(process.env.PORT)

const music = require('./models/music.js')

//DB connection



//Middleware




//Routes

//index route
app.get('/apex', (req, res) => {
    res.send(music)
})

//show route
app.get('/apex/:indexOfMusicArray', (req, res)=>{
    res.send(music[req.params.indexOfMusicArray])
});




app.listen(port,() => {
console.log("Apex Music loading")
})