require("dotenv").config();
const key = process.env.API_KEY;
const axios = require('axios');
const fetch = require('node-fetch');
const {Show, Movie, addShow, addMovie} = require('./db')

// @desc    Get shows
//@route    GET /shows/:name
//@API url     `https://api.tvmaze.com/search/shows?q=${}`;
exports.getShows = (req, res, next) => {

}

// @desc    Get movies
//@route    GET /movies
//@API url  `https://api.watchmode.com/v1/search/?apiKey=${key}&search_field=name&search_value=${}`;
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