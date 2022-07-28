import react, {useState, useEffect} from 'react';
import { IoSaveOutline } from "react-icons/io5";

const ListItem = (props) => {
  let title = props.type == 'movies' ? props.show.name : props.show.show.name;
  let year = props.type === 'movies' ? props.show.year :
      props.show.show.premiered ? props.show.show.premiered.slice(0,4) : null;

  return (
    <li className="listItem">
      <div className="title">{title}</div>
      <span className="year">{year}</span>
      <span className="save"><IoSaveOutline /></span>
    </li>
  )
}

export default ListItem;