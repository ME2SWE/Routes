let showButton = document.querySelector('#search-shows');
let shows = document.querySelector('#shows');
let moviesButton = document.querySelector('#search-movies');
let movies = document.querySelector('#movies');
let list = document.querySelector('#list');

let search = (el) => {
  // console.log(el.value);
  // list.innerHTML = '';
  if (el.value !== '') {
    if (el.value === 'clear') {
      list.innerHTML = '';
    } else {
      let name = document.createElement('LI');
      name.append(el.value);
      list.append(name);
    }
    el.value = '';
  }
}

showButton.addEventListener('click', () => search(shows));
shows.addEventListener('keypress', (e) => {
  if (event.key === 'Enter') {
    e.preventDefault();
    search(show);
  }
})

moviesButton.addEventListener('click', () => search(movies));
movies.addEventListener('keypress', (e) => {
  if (event.key === 'Enter') {
    e.preventDefault();
    search(movies);
  }
})
