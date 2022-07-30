const express = require('express');
const path = require('path');
const app = express();
require("dotenv").config();
const key = process.env.API_KEY;
const axios = require('axios');
const fetch = require('node-fetch');
const routes = require('./routes');
const {getShows} = require('./controller');


//parses req data
app.use(express.json());
app.use( express.static(path.join(__dirname, '../public/dist')));
// app.use(routes);

app.get('/shows/:name', (req, res) => {
  // getShows();
  axios.get(`https://api.tvmaze.com/search/shows?q=${req.params.name}`)
  .then(data =>{
    console.log(data.data)
    res.send(data.data)})
  .catch(err => res.status(404))
})

// app.get('/movies', (req, res) => {

// })

// app.post('/shows', (req, res) => {

// })

// app.post('/movies', (req, res) => {

// })

app.listen(8080, console.log('Server listening on 8080'));