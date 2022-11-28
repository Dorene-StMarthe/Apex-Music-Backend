const express = require('express')
const app = express();
require('dotenv').config()
const port = process.env.PORT|| 3000;
//console.log(process.env.PORT)
const routes = require('./routes');
const music = require('./models/Playlist.js')

//DB connection

require('./config/db.connection')

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/apex', routes.playlist);

//index route
app.get('/apex', (req, res) => {
    res.send(playlist)
})

//show route
app.get('/apex/:indexOfPlaylistArray', (req, res)=>{
    res.send(playlist[req.params.indexOfPlaylistArray])
});


app.listen(port,() => {
console.log("Apex Music loading...")
})