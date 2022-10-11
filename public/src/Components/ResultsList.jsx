import React from 'react';
import ListItem from './ListItem.jsx';

const ResultsList = (props) => {
  if (props.type === 'shows') {
    return (
      <div id="results-container">
          <h2 id="results-title" className="heading">Results</h2>
          <ul id="list">
            {props.shows.map((show) => (
              <ListItem key={show.show.id} show={show} type={props.type}></ListItem>
            ))}
          </ul>
      </div>
    )
  } else {
    return (
      <div id="results-container">
          <h2 id="results-title" className="heading">Results</h2>
          <ul id="list">
            {props.shows.map((show) => (
              <ListItem key={show.id} show={show} type={props.type}></ListItem>
            ))}
          </ul>
      </div>
    )
  }
}


export default ResultsList;