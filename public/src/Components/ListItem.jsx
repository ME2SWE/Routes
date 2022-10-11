import react, {useState, useEffect} from 'react';
import { IoSaveOutline } from "react-icons/io5";
import axios from 'axios';

const ListItem = (props) => {
  // console.log(props.show.show.id)
  let [saved, setSaved] = useState(false);
  let title = props.type === 'movies' ? props.show.name : props.show.show.name;
  let year = props.type === 'movies' ? props.show.year :
      props.show.show.premiered ? props.show.show.premiered.slice(0,4) : null;

  let saveClick = () => {
    axios.post(`/${props.type}`, {name: title, year: year})
    .then(result =>  console.log(result.data))
    .catch(err => console.log(err))
    setSaved(true);
  }

  return (
    <li className="listItem">
      <div className="title">{title}</div>
      <span className="year">{year}</span>
      {!saved && <span className="save" onClick={saveClick}><IoSaveOutline /></span>}
    </li>
  )
}

export default ListItem;