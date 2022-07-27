import React, {Fragment, useState, useEffect} from 'react';

const Search = (props) => {
  return (
    <Fragment>
      <div>
        <input id="name" type="text" placeholder="Search by name"/>
        <button id="search-name">Find</button>
      </div>
      <div>
        <input id="genre" type="text" placeholder="Search by genre"/>
        <button id="search-genre">Find</button>
      </div>
    </Fragment>
  )
}

export default Search;