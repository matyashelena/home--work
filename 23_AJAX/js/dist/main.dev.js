"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var API_KEY = '8adb89b7'; // http://www.omdbapi.com/?i=tt389618&apikey=8adb89b7

var BASE_URL = "http://www.omdbapi.com/?apikey=".concat(API_KEY);
var PAGE = 1;
var lastPage = 1;

function searchMovie() {
  var movieName = document.getElementById('searchText').value;
  console.log(movieName);

  if (movieName) {
    axios.get(BASE_URL + "&s=".concat(movieName, "&page=").concat(PAGE)).then(function (res) {
      console.log(res.data);
      lastPage = Math.ceil(res.data.totalResults / 10);
      generateSearchResult(res.data.Search);
    });
  }
}

function generateSearchResult(result) {
  var html = "<ul class=\"result_list\">";
  result.forEach(function (element) {
    html = html + "<li>\n         <img alt=\"poster\" class=\"poster_search\" src=\"".concat(element.Poster, "\"/>\n         <span class=\"title_search\">").concat(element.Title, "</span>\n         <span class=\"year_search\">").concat(element.Year, "</span>\n         </li>");
  });
  html = html + "</ul>";
  document.getElementById('list').innerHTML = html;
}

function nextPage(event) {
  event.preventDefault();
  PAGE++;
  goToPage(PAGE);
}

function prevPage(event) {
  event.preventDefault();
  PAGE--;
  goToPage(PAGE);
}

function goToPage(page) {
  PAGE = page;
  searchMovie();
}

function goToLast(event) {
  event.preventDefault();
  PAGE = lastPage;
  goToPage(PAGE);
}

function goToFirst(event) {
  event.preventDefault();
  PAGE = 1;
  goToPage(PAGE);
}

var page = 1;
var totalResults = 0;
var currentPage = 1;
var countPages = 0;
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