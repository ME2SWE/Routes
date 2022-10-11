const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoURI = 'mongodb://localhost/watchList';

mongoose.connect(mongoURI);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongo connection error'));

// const baseSchema = {
//   name: {
//     type: String,
//     required: true
//   },
//   year: Number,
//   desc: String
// };

const ShowSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  year: Number
});
const MovieSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  year: Number
});

let Show = mongoose.model('Show', ShowSchema);
let Movie = mongoose.model('Movie', MovieSchema);

const addShow = async(data) => {
  try{
    const {name, year} = data;
    const show = await new Show({name, year}).save();
  } catch (err) {
    console.log('Error saving movie to db', err);
  }
}

const addMovie = async(data) => {
  try{
    const {name, year} = data;
    const movie = await new Movie({name, year}).save();
  } catch (err) {
    console.log('Error saving movie to db', err);
  }
}

module.exports = {Show, Movie, addShow, addMovie};