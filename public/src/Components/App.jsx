import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import ResultsList from './ResultsList.jsx';
import Search from './Search.jsx';

const App = () => {
  cont data = [
    {name: 'Jaws', year: 1985},
    {name: 'Twilight', year: 2008},
    {name: 'Titanic', year: 1998},
    {name: 'Lord of the Rings', year: 2001}
  ]
  const [shows, setShows] = useState([]);


  return (
    <div id="page">
      <div id="search-container">
        <h1 className="heading">TV GUIDE</h1>
        <Search />
      </div>
      <ResultsList />
    </div>
  )
}

export default App;