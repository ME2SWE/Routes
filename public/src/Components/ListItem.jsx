import react, {useState, useEffect} from 'react';
import { IoSaveOutline } from "react-icons/io5";

const ListItem = (props) => {
  let title = props.type === 'shows' ? props.show.show.name : props.show.name;
  let year = props.type === 'shows' ? props.show.show.premiered.slice(0,4) : props.show.year;

  return (
    <li className="listItem">
      <div className="title">{title}</div>
      <span className="year">{year}</span>
      <span className="save"><IoSaveOutline /></span>
    </li>
  )
}

export default ListItem;