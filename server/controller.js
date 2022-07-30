require("dotenv").config();
const key = process.env.API_KEY;
const axios = require('axios');
const fetch = require('node-fetch');
const {Show, Movie, addShow, addMovie} = require('./db')

// @desc    Get shows
//@route    GET /shows/:name
exports.getShows = (req, res, next) => {
  axios.get(`https://api.tvmaze.com/search/shows?q=${req.params.name}`)
  .then(data => res.send(data.data))
  .catch(err => res.status(404))
}

// @desc    Get movies
//@route    GET /movies
exports.getMovies = (req, res, next) => {

}

// @desc    Save shows
//@route    POST /shows
exports.saveShow = async(req, res, next) => {

}

// @desc    Save movies
//@route    POST /movies
exports.saveMovie = async(req, res, next) => {

}