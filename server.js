const express = require('express')
const app = express();
require('dotenv').config()
const port = process.env.PORT|| 3000;
//console.log(process.env.PORT)



const music = [
    {
        song:'One Wish',
        by: 'RayJ',
        played: true
    },
    {
        song:'September',
        by: 'Earth, Wind and Fire',
        played: false
    },
    {
        song:'Tetris',
        by: 'Derek King',
        played: true
    }
]



//index route
app.get('/apex', (req, res) => {
    res.send(music)
})


app.get('/apex/:indexOfMusicArray', (req, res)=>{
    res.send(music[req.params.indexOfMusicArray])
});




app.listen(port,() => {
console.log("Apex Music loading")
})