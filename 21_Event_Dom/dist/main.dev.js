"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// 1. Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.
var divText = document.querySelector('.edit_text');
var textArea = document.createElement('textarea');
textArea.classList.add('edit_text');
document.addEventListener('keydown', function (event) {
  if (event.key === 'e') {
    event.preventDefault();

    if (event.ctrlKey) {
      divText.replaceWith(textArea);
      textArea.textContent += divText.textContent;
    }
  }

  var newText = textArea.value;
  var newDiv = document.createElement('div');
  newDiv.classList.add('edit_text');
  newDiv.textContent = newText;

  if (event.key === 's') {
    event.preventDefault();

    if (event.ctrlKey) {
      textArea.replaceWith(newDiv);
    }
  }
}); // 2. Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.

var tableSort = document.getElementById('table_sort');

tableSort.onclick = function (elem) {
  if (elem.target.tagName != 'TH') return;
  var columnName = elem.target;
  dataSort(columnName.cellIndex, columnName.dataset.type);
};

function dataSort(colIndex, type) {
  var tbody = tableSort.querySelector('tbody');
  var arrayCollection = Array.from(tbody.rows); // match(a, b) порівнює два рядки, необхідно для сортування

  var match;

  switch (type) {
    case 'number':
      match = function match(rowA, rowB) {
        return rowA.cells[colIndex].innerHTML - rowB.cells[colIndex].innerHTML;
      };

      break;

    case 'string':
      match = function match(rowA, rowB) {
        return rowA.cells[colIndex].innerHTML > rowB.cells[colIndex].innerHTML ? 1 : -1;
      };

      break;
  } // сортування


  arrayCollection.sort(match);
  tbody.append.apply(tbody, _toConsumableArray(arrayCollection));
} // 3. Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.


var arrow = document.querySelector('.arrow');
var border = document.querySelector('.border');
var computedStyle = getComputedStyle(border);
var borderWidth = parseInt(computedStyle.width);
var borderHeight = parseInt(computedStyle.height);
var x0;
var y0;
var xLast;
var yLast;
var differenceX;
var differenceY;

function pointerMove(event) {
  xLast = event.x;
  yLast = event.y;
  differenceX = xLast - x0;
  differenceY = yLast - y0;

  if (differenceX > 0) {
    border.style.width = borderWidth + differenceX + 'px';
  }

  if (differenceY > 0) {
    border.style.height = borderHeight + differenceY + 'px';
  }

  document.addEventListener('pointerup', function () {
    document.removeEventListener('pointermove', pointerMove);
  });
}

function pointerDown(event) {
  x0 = event.x;
  y0 = event.y;
  document.addEventListener('pointermove', pointerMove);
}

arrow.addEventListener('pointerdown', pointerDown);