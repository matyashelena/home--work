"use strict";

var API_KEY = 'aaa362ec11316d74bc1716de935b46d2';
var API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kyiv&appid=".concat(API_KEY);
var block = document.querySelector('#weather_list');

function getCookie(name) {
  var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function saveResponceData(data) {
  localStorage.setItem('weather', JSON.stringify(data));
  document.cookie = "timer=true; max-age=7200";
  console.log(JSON.stringify(data));
}

function showWeather(data) {
  var location = data.name;
  var temp = Math.round(data.main.temp);
  var feells = Math.floor(data.main.feels_like);
  var weatherStatus = data.weather[0].main;
  var icon = data.weather[0].icon;
  var htmlREsult = "\n    <div class=\"weather_header\">\n      <div class=\"weather_main\">\n        <div class=\"weather_city\">".concat(location, "</div>\n        <div class=\"weather_status\">").concat(weatherStatus, "</div>\n      </div>\n      <div class=\"weather_icon\">\n        <img src=\"https://openweathermap.org/img/w/").concat(icon, ".png\" alt=\"").concat(weatherStatus, "\">\n      </div>\n    </div>\n    <div class=\"weather_temp\">").concat(temp, "</div>\n    <div class=\"weather_feels\">Feels like: ").concat(feells, "</div>\n  ");
  block.innerHTML = htmlREsult;
}

function getWeather() {
  axios.get(API_URL).then(function (res) {
    saveResponceData(res.data);
    console.log(res.data);
  });
}

function getWeatherStorage() {
  var data = JSON.parse(localStorage.getItem('weather'));
  showWeather(data);
}

function loadPage() {
  var timer = getCookie('timer');

  if (!timer) {
    getWeather();
  } else {
    getWeatherStorage();
  }
}

document.addEventListener("DOMContentLoaded", loadPage);