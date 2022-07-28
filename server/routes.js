const express = require('express');
const router = express.Router();
const {
  getShows,
  getMovies,
  saveShow,
  saveMovie
} = require('./controller');

router.route('/shows/:name')
  .get(getShows)

router.route('/shows')
  .post(saveShow)

router.route('/movies')
  .get(getMovies)
  .post(saveMovie)



module.exports = router;