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
// ширина поля input залежно выд контенту

var input = document.querySelectorAll('.input');
var buffer = [];

for (var i = 0; input.length > i; i++) {
  buffer[i] = document.createElement('div');
  buffer[i].className = "buffer"; //вставляемо hidden div.buffer

  input[i].parentNode.insertBefore(buffer[i], input[i].nextSibling);

  input[i].oninput = function () {
    this.nextElementSibling.innerHTML = this.value;
    this.style.width = this.nextElementSibling.clientWidth + 'px';
  };
}

var Marker =
/*#__PURE__*/
function () {
  function Marker(color, pircent) {
    _classCallCheck(this, Marker);

    this.color = color;
    this.pircent = pircent; // Відсотки чорнила
  }

  _createClass(Marker, [{
    key: "write",
    value: function write(text) {
      var writeText = document.getElementById('par'); // let writtenText = '';

      for (var _i = 0; _i < text.length; _i++) {
        if (text[_i] !== ' ' && this.pircent >= 0.5) {
          writeText += text[_i];
          this.pircent -= 0.5; // Видаляємо 0.5% чорнила за кожен не пробільний символ
        } else {
          writeText += ' '; // Додаємо пробіл, якщо немає чорнила або символ - пробільний
        }
      }

      document.getElementById('inputContent').value = text;
    }
  }, {
    key: "showREsult",
    value: function showREsult() {
      var desc = "\n        <p>\u041A\u043E\u043B\u0456\u0440 \u043C\u0430\u0440\u043A\u0435\u0440\u0430: ".concat(this.color, "</p>\n        <p>\u0417\u0430\u043B\u0438\u0448\u0438\u043B\u043E\u0441\u044C \u0447\u043E\u0440\u043D\u0438\u043B: ").concat(this.pircent, "%</p>\n    ");
      document.getElementById('marker_desc').innerHTML = desc;
      document.getElementById('marker_desc').style.color = this.color;
    }
  }]);

  return Marker;
}(); // Приклад використання класу Marker


var marker = new Marker("pink", 100);
marker.write('Hello my friend');
marker.showREsult(); // Створюємо маркер з 100% чорнила

var refillInk =
/*#__PURE__*/
function (_Marker) {
  _inherits(refillInk, _Marker);

  function refillInk() {
    _classCallCheck(this, refillInk);

    return _possibleConstructorReturn(this, _getPrototypeOf(refillInk).apply(this, arguments));
  }

  _createClass(refillInk, [{
    key: "refill",
    value: function refill(addInk) {
      if (addInk > 0) {
        this.pircent = Math.min(100, this.pircent + addInk); // Обмежуємо до 100%

        document.getElementById('new_marker').style.color = this.color;
        document.getElementById('new_marker').innerHTML = "\u041C\u0430\u0440\u043A\u0435\u0440 \u0431\u0443\u0432 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439. \u041D\u043E\u0432\u0438\u0439 \u0432\u0456\u0434\u0441\u043E\u0442\u043E\u043A \u0447\u043E\u0440\u043D\u0438\u043B\u0430: ".concat(this.pircent, "%");
      }
    }
  }]);

  return refillInk;
}(Marker); // Приклад використання класу refillInk


var refill = new refillInk("blue", 5);
refill.write("Текст для написання.");
console.log("\u041A\u043E\u043B\u0456\u0440 \u043C\u0430\u0440\u043A\u0435\u0440\u0430: ".concat(refill.color));
console.log("\u0412\u0456\u0434\u0441\u043E\u0442\u043E\u043A \u0447\u043E\u0440\u043D\u0438\u043B\u0430: ".concat(refill.pircent, "%"));
console.log("\u0412\u0456\u0434\u0441\u043E\u0442\u043E\u043A \u0447\u043E\u0440\u043D\u0438\u043B\u0430 \u043F\u0456\u0441\u043B\u044F \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u044F: ".concat(refill.pircent, "%"));
refill.refill(60); // Заправляємо маркер
// refill.showREsult() 
// class Employee {
//   constructor(id, name, position) {
//       this.id = id;
//       this.name = name;
//       this.position = position;
//   }
// }
// class EmpTable {
//   constructor(employees) {
//       this.employees = employees;
//   }
//   getHtml() {
//       let tableHtml = '<table>';
//       tableHtml += '<tr><th>ID</th><th>Name</th><th>Position</th></tr>';
//       for (const employee of this.employees) {
//           tableHtml += `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${employee.position}</td></tr>`;
//       }
//       tableHtml += '</table>';
//       return tableHtml;
//   }
// }
// // Створення масиву працівників банку
// const employees = [
//   new Employee(1, 'John Doe', 'Manager'),
//   new Employee(2, 'Jane Smith', 'Teller'),
//   new Employee(3, 'Bob Johnson', 'Accountant'),
// ];
// // Створення об'єкта класу EmpTable і генерація HTML-коду таблиці
// const empTable = new EmpTable(employees);
// const htmlTable = empTable.getHtml();
// // Виведення HTML-коду на екран
// document.body.innerHTML = htmlTable;
// class Circle {
//   constructor (name) {
//     this.radius = radius;
//     this.diameter = this.diameter;
//   }
//   get radiusName() {
//     return this.radius;
//   }
//   // set radiusInfo(newRadius) {
//   //   this.radius = this.radiusInfo;
//   // }
//   square() {
//     return Math.floor(Math.PI * (this.radius ** 2));
//   }
//   circumference() {
//     return Math.ceil(2 * Math.PI * this.radius);
//   }
// }
// let circle = new Circle(10);
// console.log(circle);