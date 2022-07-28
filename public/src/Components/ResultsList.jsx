import React from 'react';
import ListItem from './ListItem.jsx';

const ResultsList = (props) => {
return (
  <div id="results-container">
      <h2 id="results-title" className="heading">Results</h2>
      <ul id="list">
        {props.shows.map((show, i) => (
          <ListItem key={i} show={show} type={props.type}></ListItem>
        ))}
      </ul>
  </div>
)}


export default ResultsList;