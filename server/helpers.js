//These functions were used to seed the database

const {Show, Movie, addShow, addMovie} = require('./db')

const populateShows = async(shows, func) => {
  for (let i = 0; i < shows.length; i++) {
    let obj = {
      name: shows[i].show.name,
      year: shows[i].show.premiered.slice(0, 4)
    }
    await func(obj);
  }
}

const populateMovies = async(movies, func) => {
  for (let i = 0; i < shows.length; i++) {
    let {name, year} = shows[i];
    await func({name, year});
  }
}