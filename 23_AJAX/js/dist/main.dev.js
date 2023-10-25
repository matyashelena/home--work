"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var API_KEY = '8adb89b7';
var BASE_URL = "http://www.omdbapi.com/?apikey=".concat(API_KEY);
var PAGE = 1;
var lastPage = 1;
var totalResults = 0;
var countPages = 0;
var card;
var cardBlock;
var cardUrl = './card.html';
axios.get(cardUrl).then(function (response) {
  card = response.data;
  addCardBlockToDocument();
});

function addCardBlockToDocument() {
  cardBlock = document.getElementById('#card_block');
  cardBlock.innerHTML = card;
}

function searchMovie() {
  var PAGE = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var movieName = document.getElementById('searchText').value;
  console.log(movieName);

  if (movieName) {
    axios.get(BASE_URL + "&s=".concat(movieName, "&page=").concat(PAGE)).then(function (res) {
      console.log(res.data);
      totalResults = res.data.totalResults;
      countPages = Math.ceil(totalResults / 10);
      generateSearchResult(res.data.Search);
      addPagination(PAGE);
    });
  }
}

function generateSearchResult(result) {
  var html = "<ul class=\"result_list\">";
  result.forEach(function (element) {
    html = html + "<li>\n         <img alt=\"poster\" class=\"poster_search\" src=\"".concat(element.Poster, "\"/>\n         <span class=\"title_search\">").concat(element.Title, "</span>\n         <span class=\"year_search\">").concat(element.Year, "</span>\n         <button id=\"").concat(element.imdbID, "\" type=\"button\" class=\"button_details\" onclick=\"getMovie(event)\">Details</button>\n         </li>");
  });
  html = html + "</ul>";
  document.getElementById('list').innerHTML = html;
}

function getMovie(event) {
  id = event.target.getAttribute('id');
  console.log(id);
  getFilmById(id);
}

function getFilmById(id) {
  findMovie = {};
  axios.get("".concat(BASE_URL, "&i=").concat(id)).then(function (response) {
    findMovie = response.data;
    console.log(findMovie);
    showCard(findMovie);
  });
}

function showCard(movie) {
  if (movie) {
    cardBlock.classList.remove('d-none');
    document.getElementById('actors').textContent = 'Actors: ' + movie.Actors || "";
    document.getElementById('title').textContent = movie.Title || '';
    document.getElementById('poster').setAttribute('src', "".concat(movie.Poster));
    document.getElementById('year').textContent = '(' + (movie.Year + ')' || '');
    document.getElementById('awards').textContent = 'Awards: ' + movie.Awards || '';
    document.getElementById('country').textContent = 'Country: ' + movie.Country || '';
    document.getElementById('description').textContent = 'Description: ' + movie.Plot || '';
    document.getElementById('time').textContent = 'Time: ' + movie.Runtime;
    document.getElementById('languages').textContent = 'Language: ' + movie.Language || '';
    document.getElementById('genre').textContent = 'Genre: ' + movie.Genre || '';
    var score = document.getElementById('score');

    if (movie.imdbRating !== "N/A") {
      score.classList.remove('d-none');
      score.textContent = movie.imdbRating || '';
    } else {
      score.classList.add('d-none');
    }
  }
}

var nav = document.getElementById('nav');
var pagination = document.getElementsByClassName('page-link');

_toConsumableArray(pagination).forEach(function (item) {
  item.addEventListener('click', function (event) {
    event.preventDefault();
    var toPage = item.getAttribute('href');

    switch (toPage) {
      case 'first':
        PAGE = 1;
        break;

      case 'prev':
        PAGE > 1 ? PAGE -= 1 : PAGE = 1;
        break;

      case 'page':
        break;

      case 'next':
        PAGE < countPages ? PAGE += 1 : PAGE = countPages;
        break;

      case 'last':
        PAGE = countPages;
        break;
    }

    searchMovie(PAGE);
  });
});

function addPagination(PAGE) {
  if (totalResults > 10) {
    document.getElementById('page').text = PAGE;
  }
}