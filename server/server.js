const express = require('express');
const path = require('path');
const app = express();
require("dotenv").config();
const key = process.env.API_KEY;
const axios = require('axios');
const fetch = require('node-fetch');
const routes = require('./routes');

//parses req data
app.use(express.json());
app.use( express.static(path.join(__dirname, '../public/dist')));
app.use(routes);

// app.get('/shows/:name', (req, res) => {
//   let url = ` https://api.tvmaze.com/search/shows?q=${req.params.name}`;
//   fetch(url)
//   .then(results => results.json())
//   .then(results =>  res.send(results))
//   .catch(error => {
//     console.log('ERROR in shows API call', error);
//     res.status(400).json({error: error});
//   });
// })

// app.get('/movies', (req, res) => {
//   let url = `https://api.watchmode.com/v1/search/?apiKey=${key}&search_field=name&search_value=${req.query.name}`;
//   axios(url)
//   .then(results => res.send(results.data))
//   .catch(error => {
//     console.log('ERROR in Movies API call', error);
//     res.status(400).json({error: error});
//   });
// })

// app.post('/shows', (req, res) => {


// })

// app.post('/movies', (req, res) => {

// })

app.listen(8080, console.log('Server listening on 8080'));