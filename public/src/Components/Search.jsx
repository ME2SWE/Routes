import React, {Fragment, useState, useEffect} from 'react';

const Search = (props) => {
  let [show, setShow] = useState('');
  let [movie, setMovie] = useState('');

  const handleClick = (e, cb, type, id) => {
    e.preventDefault();
    cb(type);
    document.querySelector(`#${id}`).value = '';
  }

  const handleChange = (e, cb) => {
    cb(e.target.value);
  }

  return (
    <Fragment>
      <form>
        <input
          id="shows"
          type="text"
          placeholder="Search shows"
          onChange={(e) => handleChange(e, setShow)}
        />
        <button
          id="search-shows"
          onClick={(e) => handleClick(e, props.searchShows, show, 'shows')}
        >
          Find
        </button>
      </form>
      <form>
        <input
          id="movies"
          type="text"
          placeholder="Search movies"
          onChange={(e) => handleChange(e, setMovie)}
        />
        <button
          id="search-movies"
          onClick={(e) => handleClick(e, props.searchMovies, movie, 'movies')}
        >Find
        </button>
      </form>
    </Fragment>
  )
}

export default Search;