// Отримай прогноз погоди з оpen weather API. Зроби так, щоб запит про погоду відбувався не частіше ніж раз на 2 години. При повторному відвідуванні погода відображається з localStorage, до тих пір поки не пройде 2 години після останнього запиту.

const API_KEY = 'aaa362ec11316d74bc1716de935b46d2';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kyiv&appid=${API_KEY}`;
const block = document.querySelector('#weather_list');


function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ))
  return matches ? decodeURIComponent(matches[1]) : undefined
}

function saveResponceData(data) {
  localStorage.setItem('weather', JSON.stringify(data));
  document.cookie = "timer=true; max-age=7200";
  showWeather(data);
}

function showWeather(data) {
  const location = data.name;
  const temp = Math.round(data.main.temp);
  const feells = Math.floor(data.main.feels_like);
  const weatherStatus = data.weather[0].main;
  const icon = data.weather[0].icon;
  const htmlREsult = `
    <div class="weather_header">
      <div class="weather_main">
        <div class="weather_city">${location}</div>
        <div class="weather_status">${weatherStatus}</div>
      </div>
      <div class="weather_icon">
        <img src="https://openweathermap.org/img/w/${icon}.png" alt="${weatherStatus}">
      </div>
    </div>
    <div class="weather_temp">${temp}</div>
    <div class="weather_feels">Feels like: ${feells}</div>
  `;
  block.innerHTML = htmlREsult;
}

function getWeather() {
  axios.get(API_URL).then(res => {
    saveResponceData(res.data);
  })
}

function getWeatherStorage() {
  const data = JSON.parse(localStorage.getItem('weather'));
  showWeather(data);
}

function loadPage() {
  const timer = getCookie('timer');
  if (!timer) {
    getWeather();
  } else {
    getWeatherStorage();
  }
}

document.addEventListener("DOMContentLoaded", loadPage);



