const express = require('express')
const app = express();
require('dotenv').config()
const port = process.env.PORT|| 3000;
//console.log(process.env.PORT)



const music = ['One Wish by RayJ', 'No One by Alicia Keys', 'September by Earth, Wind and Fire','Tetris by Derek King']

app.get('/:indexOfMusicArray', (req, res)=>{
    res.send(music[req.params.indexOfMusicArray])
});




app.listen(port,() => {
console.log("Apex Music loading")
})