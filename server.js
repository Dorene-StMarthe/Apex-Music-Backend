require('dotenv').config()
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const SpotifyWebApi = require("spotify-web-api-node")
const app = express();
const port = process.env.PORT|| 3001;
//console.log(process.env.PORT)
const routes = require('./routes');
const playlists = require('./models/Playlist.js')

const whitelist = ['http://localhost:3000', 'https://fathomless-sierra-68956.herokuapp.com']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
 
  
//DB connection

require('./config/db.connection')

//Middleware
app.use(cors(corsOptions)) 
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/apex', routes.playlists);

//index route
app.get('/apex', (req, res) => {
    res.send(playlists)
})

//show route
app.get('/apex/:indexOfPlaylistArray', (req, res)=>{
    res.send(playlists[req.params.indexOfPlaylistArray])
});




//*************** */


app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken,
  })

  spotifyApi
    .refreshAccessToken()
    .then(data => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      })
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(400)
    })
})

app.post("/login", (req, res) => {
  const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  })

  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch(err => {
      res.sendStatus(400)
    })
})



app.listen(port,() => {
    console.log("Apex Music loading... running on port " + port)
    })
    