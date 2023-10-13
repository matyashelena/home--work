"use strict";

var API_KEY = '8adb89b7'; // http://www.omdbapi.com/?i=tt389618&apikey=8adb89b7

var BASE_URL = "http://www.omdbapi.com/?apikey=".concat(API_KEY);
var PAGE = 1;

function searchMovie() {
  var movieName = document.getElementById('searchText').value;
  console.log(movieName);
  axios.get(BASE_URL + "&s=".concat(movieName, "&page=").concat(PAGE)).then(function (res) {
    console.log(res.data);
  });
}

function nextPage(event) {
  event.preventDefault();
  PAGE++;
  searchMovie();
}