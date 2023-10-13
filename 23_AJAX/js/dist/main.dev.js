"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// const API_KEY = '8adb89b7';
// http://www.omdbapi.com/?i=tt3896198&apikey=8adb89b7
// const BASE_URL = `http://img.omdbapi.com/?apikey=${API_KEY}`;
// // Робимо запит для користувача з даним ID
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // обробка успішного запиту
//     console.log(response);
//   })
//   .catch(function (error) {
//     // обробка помилки
//     console.log(error);
//   })
//   .finally(function () {
//     // виконується завжди
//   });
// apikey=88150c8c
var url = 'http://www.omdbapi.com/?apikey=88150c8c';
var cardUrl = './parts/card.html';
var card;
var cardBlock;
axios.get(cardUrl).then(function (response) {
  card = response.data;
  addCardBlockToDocument();
});

function addCardBlockToDocument() {
  cardBlock = document.getElementById('#card_block');
  cardBlock.innerHTML = card;
}

var listMoviesUrl = '../parts/card.html';
var listMovies = [];
var list = document.getElementById('list');
var moviesList = [];
var findMovie = {};
var search = document.getElementById('searchText');
var messageError = document.getElementById('messageError');
var page = 1;
var totalResults = 0;
var currentPage = 1;
var countPages = 0;
var typesOfMovies = document.getElementsByName('type');
type = document.querySelector('input[name="type"]:checked').getAttribute('id');
typesOfMovies.forEach(function (item) {
  item.addEventListener('click', function () {
    type = item.getAttribute('id');
  });
});
var nav = document.getElementById('nav');
var pagination = document.getElementsByClassName('page-link');

_toConsumableArray(pagination).forEach(function (item) {
  item.addEventListener('click', function (event) {
    event.preventDefault();
    var toPage = item.getAttribute('href');

    switch (toPage) {
      case 'first':
        page = 1;
        break;

      case 'prev':
        page > 1 ? page -= 1 : page = 1;
        break;

      case 'page':
        break;

      case 'next':
        page < countPages ? page += 1 : page = countPages;
        break;

      case 'last':
        page = countPages;
        break;
    }

    searchFilms(page);
  });
});

function addListMoviesToDocument(listMovies) {
  list.innerHTML = '';

  if (listMovies.length) {
    listMovies.forEach(function (item) {
      list.innerHTML += "<li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                <img style=\"width: 100px\" src=\"".concat(item.Poster, "\">\n                <h2 class=\"h5\">").concat(item.Title, " (").concat(item.Year, ")</h2>\n                <button type=\"button text-right\" class=\"btn btn-info\" id=\"").concat(item.imdbID, "\" onclick=\"getMovie(event)\">\n                    Details\n                </button>\n            </li> ");
    });
  }
}

function searchFilms() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  messageError.classList.add('d-none');
  nav.classList.add('d-none');
  cardBlock.classList.add('d-none');
  var title = search.value;
  axios.get("".concat(url, "&s=").concat(title, "&page=").concat(page, "&type=").concat(type)).then(function (response) {
    if (response.data.Response === "True") {
      totalResults = response.data.totalResults;
      countPages = Math.ceil(totalResults / 10);
      moviesList = response.data.Search;
      addListMoviesToDocument(moviesList);
      addPagination(page);
    } else {
      onCatch(response.Error);
    }
  })["catch"](function (error) {
    onCatch(error.response.message);
  });
}

function onCatch(error) {
  moviesList = [];
  list.innerHTML = '';
  messageError.text = error;
  messageError.classList.remove('d-none');
}

function addPagination(page) {
  if (totalResults > 10) {
    document.getElementById('page').text = page;
    nav.classList.remove('d-none');
  }
}

function getMovie(event) {
  id = event.target.getAttribute('id');
  getFilmById(id);
}

function getFilmById(id) {
  findMovie = {};
  axios.get("".concat(url, "&i=").concat(id)).then(function (response) {
    if (response.data.Response === "True") {
      findMovie = response.data;
      showCard(findMovie);
    } else {
      onCatch(response.Error);
    }
  })["catch"](function (error) {
    onCatch(error.response.message);
  });
}

var listArr = [];

function addToWishList(e) {
  var filmItem = {
    id: e.target.dataset.id,
    name: e.target.dataset.name
  };
  listArr.push(JSON.stringify(filmItem));
  localStorage.setItem('watchList', listArr);
  generateWatchList();
}

function generateWatchList() {
  var list = localStorage.getItem('watchList').split('},');
  var formatedArr = list.map(function (el, index) {
    if (index < list.length - 1) {
      return el + '}';
    }

    return el;
  });
  var html = '';
  formatedArr.forEach(function (film) {
    var parsedFilm = JSON.parse(film);
    html += "\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n            <h2 class=\"h5\">".concat(parsedFilm.name, "</h2>\n            <button type=\"button text-right\" class=\"btn btn-info\" id=\"").concat(parsedFilm.id, "\">\n                Details\n            </button>\n        </li>\n        ");
  });
  document.getElementById('watchlist').innerHTML = html;
  var buttons = document.getElementById('watchlist').querySelectorAll('.btn');
  buttons.forEach(function (button) {
    button.addEventListener('click', getMovie);
  });
}

document.addEventListener('DOMContentLoaded', generateWatchList);

function showCard(movie) {
  if (movie) {
    cardBlock.classList.remove('d-none');
    var button = cardBlock.querySelector('.button__to_buy');
    button.setAttribute('data-id', movie.imdbID);
    button.setAttribute('data-name', movie.Title);
    button.addEventListener('click', addToWishList);
    var title = document.getElementById('title');
    title.textContent = movie.Title || '';
    var year = document.getElementById('year');
    year.textContent = 'Year: ' + (movie.Year || '');
    var description = document.getElementById('description');
    description.textContent = 'Description: ' + movie.Plot || '';
    var languages = document.getElementById('languages');
    languages.textContent = 'Language: ' + movie.Language || '';
    var poster = document.getElementById('poster');
    var posterSrc = movie.Poster || '';
    poster.setAttribute('src', "".concat(posterSrc));
    var actors = document.getElementById('actors');
    actors.textContent = 'Actors: ' + movie.Actors || '';
    var genre = document.getElementById('genre');
    genre.textContent = 'Genre: ' + movie.Genre || '';
    var score = document.getElementById('score');

    if (movie.imdbRating !== "N/A") {
      score.classList.remove('d-none');
      score.textContent = movie.imdbRating || '';
    } else {
      score.classList.add('d-none');
    }

    var time = document.getElementById('time');
    time.textContent = movie.Runtime;
  }
}