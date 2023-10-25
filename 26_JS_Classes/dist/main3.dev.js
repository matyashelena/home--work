"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
//   *поле, хранящее радиус окружности;
//   *get-свойство, возвращающее радиус окружности;
//   *set-свойство, устанавливающее радиус окружности;
//   *get-свойство, возвращающее диаметр окружности;
//   *метод, вычисляющий площадь окружности;
//   *метод, вычисляющий длину окружности.
//---------------------------------------------------------------------------------
var Ring =
/*#__PURE__*/
function () {
  function Ring(r) {
    _classCallCheck(this, Ring);

    this.r = r;
  }

  _createClass(Ring, [{
    key: "area",
    value: function area() {
      return Math.PI * this.r * this.r;
    }
  }, {
    key: "circumference",
    value: function circumference() {
      return Math.PI * this.r * 2;
    }
  }, {
    key: "radius",
    get: function get() {
      return this.r;
    },
    set: function set(r) {
      this.r = r;
    }
  }, {
    key: "d",
    get: function get() {
      return this.r * 2;
    }
  }]);

  return Ring;
}();

var ring = new Ring(5);
console.log(ring.radius);
console.log(ring.d);
console.log(ring.area().toFixed(2));
console.log(ring.circumference().toFixed(2)); // Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
//     *поле, которое хранит цвет маркера;
//     *поле, которое хранит количество чернил в маркере (в процентах);
//     *метод для печати (метод принимает строку
//      и выводит текст соответствующим цветом;
//      текст выводится до тех пор, пока в маркере
//      есть чернила; один не пробельный символ –
//      это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер,
// унаследовав его от простого маркера и добавив метод для заправки маркера.
// Продемонстрировать работу написанных методов.
//-------------------------------------------------------------------------------------------

var Marker =
/*#__PURE__*/
function () {
  function Marker(c, p) {
    _classCallCheck(this, Marker);

    this.c = c;
    this.p = p;
  }

  _createClass(Marker, [{
    key: "print",
    value: function print(line) {
      var t = document.getElementById("content");

      for (var i = 0; i < line.length; i++) {
        if (this.p != 0) {
          if (line[i] == " ") {
            this.p += 0.5;
          }

          t.innerHTML += line[i];
          t.style.color = this.c;
          this.p -= 0.5;
        } else {
          document.write("Marker is over");
          break;
        }
      }
    }
  }, {
    key: "markerProps",
    get: function get() {
      return [this.c, this.p];
    },
    set: function set(newProps) {
      var _ref = _toConsumableArray(newProps);

      this.c = _ref[0];
      this.p = _ref[1];
    }
  }]);

  return Marker;
}();

var FilledMarker =
/*#__PURE__*/
function (_Marker) {
  _inherits(FilledMarker, _Marker);

  function FilledMarker() {
    _classCallCheck(this, FilledMarker);

    return _possibleConstructorReturn(this, _getPrototypeOf(FilledMarker).apply(this, arguments));
  }

  _createClass(FilledMarker, [{
    key: "fill",
    value: function fill(p) {
      if (p > 100) {
        p = 100;
      } else {
        this.p += p;
      }
    }
  }]);

  return FilledMarker;
}(Marker);

var marker = new FilledMarker("#838", 2);
marker.fill(31);
var l = "List of Software Inc. workers with names, positions, departments, salaries. Best Regards Jeremy Clarkson - HR Manager of the HR Department";
var q = "hello my frienf"; // marker.print(l);

marker.print(q);
document.body.setAttribute("style", "font-size: 18px; text-align: center;"); // Реализовать класс Employee, описывающий
// работника, и создать массив работников банка.
// Реализовать класс EmpTable для генерации
// HTML-кода таблицы со списком работников банка.
// Массив работников необходимо передавать через
// конструктор, а получать HTML-код с помощью метода getHtml().
// Создать объект класса EmpTable и
// вывести на экран результат
// работы метода getHtml().
// const mainDiv = document.getElementById("content");
// const tableDiv = document.createElement("div");
// tableDiv.setAttribute("id", "content__tableDiv");
// tableDiv.className = "content__tableDiv";
// const tableTag = document.createElement("table");
// tableTag.setAttribute("id", "content__table");
// tableTag.className = "content__table";
// tableDiv.append(tableTag);
// mainDiv.append(tableDiv);
// class Employee {
//   constructor(name, position, department, salary) {
//     this.name = name;
//     this.position = position;
//     this.department = department;
//     this.salary = salary;
//   }
// }
// const arrEmp = [
//   new Employee("John Doe", "Manager", "Sales", 5000),
//   new Employee("Bill Freeman", "Manager", "Sales", 5000),
//   new Employee("Uno Dirck", "Manager", "Sales", 5000),
//   new Employee("Erick Rapid", "Manager", "Sales", 5000),
//   new Employee("Chris Rea", "Manager", "Sales", 5000),
//   new Employee("Tommy Lee", "Manager", "Sales", 5000),
//   new Employee("Jeck Ward", "DevOps Engineer", "DevOps", 3500),
//   new Employee(
//     "Rick Depper",
//     ".Net Senior Developer",
//     "Desktop Solutions",
//     4000
//   ),
//   new Employee("Neo Matrix", "Team Lead", "Desktop Solutions", 5000),
//   new Employee(
//     "Trinity Matrix",
//     ".Net Senior Developer",
//     "Desktop Solutions",
//     4000
//   ),
//   new Employee(
//     "Rick Grouy",
//     ".Net Junior Developer",
//     "Desktop Solutions",
//     1000
//   ),
//   new Employee(
//     "George McCalister",
//     ".Net Junior Developer",
//     "Desktop Solutions",
//     1000
//   ),
//   new Employee(
//     "Fred Durst",
//     ".Net Junior Developer",
//     "Desktop Solutions",
//     1000
//   ),
//   new Employee(
//     "Piter Parker",
//     ".Net Middle Developer",
//     "Desktop Solutions",
//     4000
//   ),
//   new Employee(
//     "Bro Somebody",
//     ".Net Senior Developer",
//     "Desktop Solutions",
//     4000
//   ),
//   new Employee(
//     "Merlin Mysterier",
//     ".Net Middle Developer",
//     "Desktop Solutions",
//     4000
//   ),
//   new Employee(
//     "Harry Potter",
//     ".Net Senior Developer",
//     "Desktop Solutions",
//     4000
//   ),
//   new Employee(
//     "Norton Commander",
//     ".Net Middle Developer",
//     "Desktop Solutions",
//     4000
//   ),
//   new Employee("Elon Musk", ".Net Senior Developer", "Desktop Solutions", 4000)
// ];
// class EmpTable {
//   constructor(arr) {
//     this.arr = arr;
//   }
//   getHtml() {
//     const table = document.getElementById("content__table");
//     const array = this.arr;
//     const head = document.createElement("tr");
//     head.setAttribute("style", "font-size: 18px;");
//     const th1 = document.createElement("th");
//     th1.textContent = "Name";
//     const th2 = document.createElement("th");
//     th2.textContent = "Position";
//     const th3 = document.createElement("th");
//     th3.textContent = "Department";
//     const th4 = document.createElement("th");
//     th4.textContent = "Salary ($)";
//     head.append(th1);
//     head.append(th2);
//     head.append(th3);
//     head.append(th4);
//     table.append(head);
//     for (let i in array) {
//       let tr = document.createElement("tr");
//       table.append(tr);
//       for (let j in array[i]) {
//         let td = document.createElement("td");
//         td.textContent = array[i][j];
//         tr.append(td);
//         td.setAttribute("style", "padding: 5px 10px; font-size: 18px;");
//       }
//     }
//     table.setAttribute("border", "2");
//     table.setAttribute("bordercolor", "brown");
//     table.setAttribute("width", "60%");
//     table.setAttribute("style", "margin: auto; background-color: lightgrey;");
//   }
// }
// const tableObj = new EmpTable(arrEmp);
// tableObj.getHtml();