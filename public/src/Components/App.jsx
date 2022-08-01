import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ResultsList from './ResultsList.jsx';
import Search from './Search.jsx';

const App = () => {
  const [shows, setShows] = useState([]);
  const [type, setType] = useState();

  // useEffect(() => {
  //   if (shows.length) console.log(shows)
  // }, [shows]);

  const getShows = (name) => {
    axios.get(`/shows/${name}`)
    .then(results => {
      setShows(results.data)
      setType('shows')
    })
    .catch(error => console.log('Get shows by name ERROR:', error))

  }

  const getMovies = (name) => {
    axios.get('/movies', {params: {name}})
    .then(results => {
      setShows(results.data)
      setType('movies')
    })
    .catch(error => console.log('Get shows by genre ERROR:', error))
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
      <ResultsList shows={shows} type={type}/>
    </div>
  )
}

export default App;