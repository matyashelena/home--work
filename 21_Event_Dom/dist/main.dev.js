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
      console.log('it work');
      console.log(event);
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
      console.log('hello');
    }
  }
}); // 2. Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.

var tableSort = document.getElementById('table_sort');

tableSort.onclick = function (elem) {
  if (elem.target.tagName != 'TH') return;
  var columnName = elem.target; // якщо клітинка TH, тоді сортувати
  // cellIndex -- це номер клітинки th:
  // 0 для першого стовпця
  // 1 для другого і т.д.

  dataSort(columnName.cellIndex, columnName.dataset.type);
};

function dataSort(colNum, type) {
  var tbody = tableSort.querySelector('tbody');
  var rowsArray = Array.from(tbody.rows); // compare(a, b) порівнює два рядки, необхідно для сортування

  var compare;

  switch (type) {
    case 'number':
      compare = function compare(rowA, rowB) {
        return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
      };

      break;

    case 'string':
      compare = function compare(rowA, rowB) {
        return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
      };

      break;
  } // сортування


  rowsArray.sort(compare);
  tbody.append.apply(tbody, _toConsumableArray(rowsArray));
}