"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// У цьому коді ми спершу створюємо клас User, який має базовий набір функціональності для користувача. Далі створюємо клас Admin, який успадковує властивості та методи з класу User і додає методи для додавання, видалення, зміни ролі користувачів та отримання списку користувачів.
var User =
/*#__PURE__*/
function () {
  function User(name, role) {
    _classCallCheck(this, User);

    if (role !== 'admin' && role !== 'user') {
      alert('Некоректна роль! Роль може бути або admin, або user.');
    }

    this.name = name;
    this.role = role;
  }

  _createClass(User, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getRole",
    value: function getRole() {
      return this.role;
    }
  }, {
    key: "login",
    value: function login() {
      console.log("".concat(this.name, " \u0443\u0432\u0456\u0439\u0448\u043E\u0432 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443."));
    }
  }, {
    key: "logout",
    value: function logout() {
      console.log("".concat(this.name, " \u0432\u0438\u0439\u0448\u043E\u0432 \u0456\u0437 \u0441\u0438\u0441\u0442\u0435\u043C\u0438."));
    }
  }, {
    key: "changeName",
    value: function changeName(newName) {
      this.name = newName;
      console.log("\u0406\u043C'\u044F \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0431\u0443\u043B\u043E \u0437\u043C\u0456\u043D\u0435\u043D\u043E \u043D\u0430 ".concat(newName, "."));
    }
  }, {
    key: "changePassword",
    value: function changePassword(newPassword) {
      console.log("\u041F\u0430\u0440\u043E\u043B\u044C \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 ".concat(this.name, " \u0431\u0443\u043B\u043E \u0437\u043C\u0456\u043D\u0435\u043D\u043E."));
    }
  }]);

  return User;
}();

var Admin =
/*#__PURE__*/
function (_User) {
  _inherits(Admin, _User);

  function Admin(name) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, name, 'admin'));
    _this.users = [];
    return _this;
  }

  _createClass(Admin, [{
    key: "addUser",
    value: function addUser(newUser) {
      this.users.push(newUser);
      console.log("\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 ".concat(newUser.getName(), " \u0431\u0443\u0432 \u0434\u043E\u0434\u0430\u043D\u0438\u0439."));
    }
  }, {
    key: "removeUser",
    value: function removeUser(userToRemove) {
      var index = this.users.findIndex(function (user) {
        return user.getName() === userToRemove.getName();
      });

      if (index !== -1) {
        this.users.splice(index, 1);
        console.log("\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 ".concat(userToRemove.getName(), " \u0431\u0443\u0432 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u0438\u0439."));
      }
    }
  }, {
    key: "changeUserRole",
    value: function changeUserRole(user, newRole) {
      if (newRole === 'admin' || newRole === 'user') {
        user.role = newRole;
        console.log("\u0420\u043E\u043B\u044C \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 ".concat(user.getName(), " \u0431\u0443\u043B\u0430 \u0437\u043C\u0456\u043D\u0435\u043D\u0430 \u043D\u0430 ").concat(newRole, "."));
      } else {
        alert('Некоректна роль! Роль може бути або admin, або user.');
      }
    }
  }, {
    key: "getAllUsers",
    value: function getAllUsers() {
      return this.users;
    }
  }, {
    key: "removeAllUsers",
    value: function removeAllUsers() {
      this.users = [];
      console.log('Усі користувачі були видалені.');
    }
  }]);

  return Admin;
}(User); // Приклад використання класів


var user1 = new User('Petro', 'user');
var user2 = new User('Ivan', 'user');
var admin = new Admin('AdminUser');
admin.addUser(user1);
admin.addUser(user2);
console.log(admin.getAllUsers());
admin.changeUserRole(user1, 'admin');
console.log(user1.getRole());
admin.removeUser(user2);
console.log(admin.getAllUsers());
admin.removeAllUsers();
console.log(admin.getAllUsers()); // Цей код створює HTML-сторінку з полем вводу для місця та кнопкою "Створити годинник". При кліку на кнопку створюється новий екземпляр класу WorldClock, який відображає час для вказаного місця. Кожен годинник має кнопку для відображення поточної дати та часу та кнопку для видалення годинника.

var WorldClock =
/*#__PURE__*/
function () {
  function WorldClock(location) {
    var _this2 = this;

    _classCallCheck(this, WorldClock);

    this.location = location;
    this.clockElement = document.createElement('div');
    this.clockElement.className = 'clock';
    this.updateClock();
    this.intervalId = setInterval(function () {
      return _this2.updateClock();
    }, 1000);
  }

  _createClass(WorldClock, [{
    key: "getCurrentDate",
    value: function getCurrentDate() {
      var now = new Date();
      return now.toDateString();
    }
  }, {
    key: "getCurrentDateTime",
    value: function getCurrentDateTime() {
      var now = new Date();
      return now.toLocaleString();
    }
  }, {
    key: "deleteClock",
    value: function deleteClock() {
      clearInterval(this.intervalId);
      this.clockElement.remove();
    }
  }, {
    key: "updateClock",
    value: function updateClock() {
      var now = new Date();
      this.clockElement.innerHTML = "<p>".concat(this.location, "</p>\n                                    <p>\u0427\u0430\u0441: ").concat(now.toLocaleTimeString(), "</p>");
    }
  }]);

  return WorldClock;
}();

document.addEventListener('DOMContentLoaded', function () {
  var createClockButton = document.getElementById('createClock');
  var locationInput = document.getElementById('locationInput');
  var clocksContainer = document.getElementById('clocks');
  createClockButton.addEventListener('click', function () {
    var location = locationInput.value;

    if (location) {
      var newClock = new WorldClock(location);
      clocksContainer.appendChild(newClock.clockElement);
    }
  });
}); // Функція для отримання прогнозу погоди з OpenWeather API

function getWeatherData(city, apiKey) {
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(apiKey);
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (data) {
    return {
      temperature: data.main.temp,
      description: data.weather[0].description
    };
  })["catch"](function (error) {
    return console.error('Помилка отримання погоди: ', error);
  });
} // Функція для збереження даних погоди в localStorage


function saveWeatherDataToLocalStorage(data) {
  var currentTime = new Date().getTime();
  var weatherData = {
    data: data,
    timestamp: currentTime
  };
  localStorage.setItem('weatherData', JSON.stringify(weatherData));
} // Функція для отримання збережених даних погоди з localStorage


function getWeatherDataFromLocalStorage() {
  var weatherData = JSON.parse(localStorage.getItem('weatherData'));

  if (weatherData) {
    var currentTime = new Date().getTime();

    if (currentTime - weatherData.timestamp < 2 * 60 * 60 * 1000) {
      // Повертаємо збережені дані, якщо не минуло 2 години
      return weatherData.data;
    }
  }

  return null;
} // Функція для оновлення і відображення погоди


function updateWeather(city, apiKey) {
  var weatherData = getWeatherDataFromLocalStorage();

  if (weatherData) {
    // Використовуємо збережені дані
    displayWeatherData(weatherData);
  } else {
    // Отримуємо нові дані та зберігаємо їх
    getWeatherData(city, apiKey).then(function (data) {
      saveWeatherDataToLocalStorage(data);
      displayWeatherData(data);
    });
  }
} // Функція для відображення даних погоди


function displayWeatherData(data) {
  var temperatureElement = document.getElementById('temperature');
  var descriptionElement = document.getElementById('description');
  temperatureElement.textContent = "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ".concat(data.temperature, "\xB0C");
  descriptionElement.textContent = "\u0421\u0442\u0430\u043D \u043F\u043E\u0433\u043E\u0434\u0438: ".concat(data.description);
} // Параметри


var apiKey = 'aaa362ec11316d74bc1716de935b46d2'; // Замініть на свій ключ API

var city = 'Kyiv'; // Замініть на місто, для якого ви хочете отримати погоду
// Оновлення погоди

updateWeather(city, apiKey);

var Marker =
/*#__PURE__*/
function () {
  function Marker(color, inkLevel) {
    _classCallCheck(this, Marker);

    this.color = color;
    this.inkLevel = inkLevel; // Відсотки чорнила
  }

  _createClass(Marker, [{
    key: "write",
    value: function write(text, outputElement) {
      var writtenText = '';

      for (var i = 0; i < text.length; i++) {
        if (text[i] !== ' ' && this.inkLevel >= 0.5) {
          writtenText += text[i];
          this.inkLevel -= 0.5; // Видаляємо 0.5% чорнила за кожен не пробільний символ
        } else {
          writtenText += ' '; // Додаємо пробіл, якщо немає чорнила або символ - пробільний
        }
      }

      outputElement.textContent += writtenText;
    }
  }]);

  return Marker;
}();

var RefillableMarker =
/*#__PURE__*/
function (_Marker) {
  _inherits(RefillableMarker, _Marker);

  function RefillableMarker(color, inkLevel, maxInkLevel) {
    var _this3;

    _classCallCheck(this, RefillableMarker);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(RefillableMarker).call(this, color, inkLevel));
    _this3.maxInkLevel = maxInkLevel;
    return _this3;
  }

  _createClass(RefillableMarker, [{
    key: "refill",
    value: function refill(inkAmount) {
      if (inkAmount > 0) {
        this.inkLevel = Math.min(this.maxInkLevel, this.inkLevel + inkAmount); // Обмежуємо до максимального рівня
      }
    }
  }]);

  return RefillableMarker;
}(Marker); // HTML-елементи


var outputElement = document.getElementById('output');
var writeButton = document.getElementById('write');
var refillButton = document.getElementById('refill'); // Створення маркера

var marker = new RefillableMarker("blue", 100, 200); // Створюємо маркер з 100% чорнила і максимальним об'ємом 200%
// Обробники подій для кнопок

writeButton.addEventListener('click', function () {
  var inputText = document.getElementById('input').value;
  marker.write(inputText, outputElement);
});
refillButton.addEventListener('click', function () {
  marker.refill(100); // Заправляємо маркер на 100%
});