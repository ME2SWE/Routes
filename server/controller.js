require("dotenv").config();
const key = process.env.API_KEY;
const axios = require('axios');
const fetch = require('node-fetch');
const {Show, Movie, addShow, addMovie} = require('./db')

// @desc    Get shows
//@route    GET /shows/:name
exports.getShows = (req, res, next) => {

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