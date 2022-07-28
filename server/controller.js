require("dotenv").config();
const key = process.env.API_KEY;
const axios = require('axios');
const fetch = require('node-fetch');
const {Show, Movie, addShow, addMovie} = require('./db')

// @desc    Get shows
//@route    GET /shows/:name
exports.getShows = (req, res, next) => {
  let url = ` https://api.tvmaze.com/search/shows?q=${req.params.name}`;
  fetch(url)
  .then(results => results.json())
  .then(results =>  res.send(results))
  .catch(error => {
    console.log('ERROR in shows API call', error);
    res.status(400).json({error: error});
  });
}

// @desc    Get movies
//@route    GET /movies
exports.getMovies = (req, res, next) => {
  let url = `https://api.watchmode.com/v1/search/?apiKey=${key}&search_field=name&search_value=${req.query.name}`;
  axios(url)
  .then(results => res.send(results.data.title_results))
  .catch(error => {
    console.log('ERROR in Movies API call', error);
    res.status(400).json({error: error});
  });
}

// @desc    Save shows
//@route    POST /shows
exports.saveShow = async(req, res, next) => {
  try{
    const {name, year} = req.body;
    const show = await Show.Create({name, year});
  } catch (err) {
    res.status(400).json({ success: false, msg: err.message });
  }
}

// @desc    Save movies
//@route    POST /movies
exports.saveMovie = async(req, res, next) => {
  try{
    const {name, year} = req.body;
    const movie = await Movie.Create({name, year});
  } catch (err) {
    res.status(400).json({ success: false, msg: err.message });
  }
}
