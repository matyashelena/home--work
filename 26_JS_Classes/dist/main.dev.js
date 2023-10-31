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

// 1) Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:
// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.
var Circle =
/*#__PURE__*/
function () {
  function Circle(radius) {
    _classCallCheck(this, Circle);

    this._radius = radius;
  }

  _createClass(Circle, [{
    key: "area",
    value: function area() {
      return Math.round(Math.PI * Math.pow(this._radius, 2));
    }
  }, {
    key: "circumference",
    value: function circumference() {
      return Math.round(2 * Math.PI * this._radius);
    }
  }, {
    key: "showREsult",
    value: function showREsult() {
      var drowCircle = "\n      <div class=\"circle\" style=\"width: ".concat(this.radius, "px; height: ").concat(this.radius, "px\"></div>\n    ");
      var desc = "\n        <p>\u0420\u0430\u0434\u0456\u0443\u0441 \u043A\u043E\u043B\u0430: ".concat(circle.radius, "</p>\n        <p>\u0414\u0456\u0430\u043C\u0435\u0442\u0440 \u043A\u043E\u043B\u0430: ").concat(circle.diameter, "</p>\n        <p>\u041F\u043B\u043E\u0449\u0430 \u043A\u043E\u043B\u0430: ").concat(circle.area(), "</p>\n        <p>\u0414\u043E\u0432\u0436\u0438\u043D\u0430 \u043A\u043E\u043B\u0430: ").concat(circle.circumference(), "</p>\n    ");
      document.querySelector('.circle_block').innerHTML = drowCircle;
      document.querySelector('.circle_description').innerHTML = desc;
    }
  }, {
    key: "radius",
    get: function get() {
      return this._radius;
    },
    set: function set(value) {
      if (value < 0) {
        throw new Error("Радіус не може бути від'ємним");
      }

      this._radius = value;
    }
  }, {
    key: "diameter",
    get: function get() {
      return this._radius * 2;
    }
  }]);

  return Circle;
}(); // Приклад використання класу Circle


var circle = new Circle(150); // Створюємо об'єкт кола з радіусом 150

circle.showREsult(); // Створюємо коло в html
// 2) Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:
// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнил у маркері (у відсотках);
// метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться доти, доки в маркері є чорнило; один не пробільний символ — це 0,5 % чорнил у маркері).
// Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера й додай метод для заправки.
// Продемонструй роботу написаних методів.

var input = document.querySelectorAll('.input'),
    buffer = [];

for (var i = 0; input.length > i; i++) {
  console.log(input[i].value);
  buffer[i] = document.createElement('div');
  buffer[i].className = "buffer"; //вставляем скрытый div.buffer

  input[i].parentNode.insertBefore(buffer[i], input[i].nextSibling);

  input[i].oninput = function () {
    this.nextElementSibling.innerHTML = this.value;
    this.style.width = this.nextElementSibling.clientWidth + 'px';
  };
}

var Marker =
/*#__PURE__*/
function () {
  function Marker(color, level) {
    _classCallCheck(this, Marker);

    this.color = color;
    this.level = level; // Відсотки чорнила
  }

  _createClass(Marker, [{
    key: "write",
    value: function write(text, outputElement) {
      var writtenText = '';

      for (var _i = 0; _i < text.length; _i++) {
        if (text[_i] !== ' ' && this.level >= 0.5) {
          writtenText += text[_i];
          this.level -= 0.5; // Видаляємо 0.5% чорнила за кожен не пробільний символ
        } else {
          writtenText += ' '; // Додаємо пробіл, якщо немає чорнила або символ - пробільний
        }
      }

      outputElement.textContent += writtenText;
      outputElement.style.color = this.color;
      document.getElementById('level_marker').innerHTML = "\u0417\u0430\u043B\u0438\u0448\u0438\u043B\u043E\u0441\u044C \u0447\u043E\u0440\u043D\u0438\u043B: ".concat(this.level, "%");
    }
  }]);

  return Marker;
}();

var RefillableMarker =
/*#__PURE__*/
function (_Marker) {
  _inherits(RefillableMarker, _Marker);

  function RefillableMarker(color, level, maxLevel) {
    var _this;

    _classCallCheck(this, RefillableMarker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RefillableMarker).call(this, color, level));
    _this.maxLevel = maxLevel;
    return _this;
  }

  _createClass(RefillableMarker, [{
    key: "refill",
    value: function refill(amount) {
      if (amount > 0) {
        this.level = Math.min(this.maxLevel, this.level + amount); // Обмежуємо до максимального рівня
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
}); // 3) Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.
// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().
// Створи об’єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().

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
    var _this2;

    _classCallCheck(this, Admin);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, name, 'admin'));
    _this2.users = [];
    return _this2;
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
console.log(admin.getAllUsers());