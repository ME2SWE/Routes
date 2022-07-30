import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ResultsList from './ResultsList.jsx';
import Search from './Search.jsx';

const App = () => {
  const data = [
    {name: 'Jaws', year: 1985},
    {name: 'Twilight', year: 2008},
    {name: 'Titanic', year: 1998},
    {name: 'Lord of the Rings', year: 2001}
  ];
  const [shows, setShows] = useState([]);
  const [type, setType] = useState([]);

  // useEffect(() => {
  //   if (shows.length) console.log(shows)
  // }, [shows]);

  const getShows = (name) => {
    // @PATH (`/shows/${name})
    axios.get(`/shows/${name}`)
    //data.data
    .then(data => {
      // console.log('data', data)
      setShows(data.data)})
    .catch(err => console.log('ERROR', err))
  }

  const getMovies = (name) => {

  }


  return (
    <div id="page">
      <div id="search-container">
        <h1 className="heading">TV GUIDE</h1>
        <Search
          searchShows={getShows}
          searchMovies={getMovies}
        />
      </div>
      <ResultsList shows={shows} type='movies'/>
    </div>
  )
}

export default App;