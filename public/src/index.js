let nameButton = document.querySelector('#search-name');
let name = document.querySelector('#name');
let genreButton = document.querySelector('#search-genre');
let genre = document.querySelector('#genre');
let list = document.querySelector('#list');

let search = (el) => {
  // console.log(el.value);
  // list.innerHTML = '';
  if (el.value !== '') {
    if (el.value === 'clear') {
      list.innerHTML = '';
    } else {
      let show = document.createElement('LI');
      show.append(el.value);
      list.append(show);
    }
    el.value = '';
  }
}

nameButton.addEventListener('click', () => search(name));
name.addEventListener('keypress', (e) => {
  if (event.key === 'Enter') {
    e.preventDefault();
    search(name);
  }
})

genreButton.addEventListener('click', () => search(genre));
genre.addEventListener('keypress', (e) => {
  if (event.key === 'Enter') {
    e.preventDefault();
    search(genre);
  }
})
