// 1. Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.

const divText = document.querySelector('.edit_text');
const textArea = document.createElement('textarea');
textArea.classList.add('edit_text');

document.addEventListener('keydown', function (event) {

  if (event.key === 'e') {
    event.preventDefault();
    if (event.ctrlKey) {
      divText.replaceWith(textArea);
      textArea.textContent += divText.textContent;
    }
  }
  const newText = textArea.value;
  const newDiv = document.createElement('div');
  newDiv.classList.add('edit_text');
  newDiv.textContent = newText;
  if (event.key === 's') {
    event.preventDefault();
    if (event.ctrlKey) {
      textArea.replaceWith(newDiv);
    }
  }
});

// 2. Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.
const tableSort = document.getElementById('table_sort');

tableSort.onclick = function (elem) {
  if (elem.target.tagName != 'TH') return;

  let columnName = elem.target;
  dataSort(columnName.cellIndex, columnName.dataset.type);
};

function dataSort(colIndex, type) {
  let tbody = tableSort.querySelector('tbody');
  let arrayCollection = Array.from(tbody.rows);
  // match(a, b) порівнює два рядки, необхідно для сортування
  let match;
  switch (type) {
    case 'number':
      match = function (rowA, rowB) {
        return rowA.cells[colIndex].innerHTML - rowB.cells[colIndex].innerHTML;
      };
      break;
    case 'string':
      match = function (rowA, rowB) {
        return rowA.cells[colIndex].innerHTML > rowB.cells[colIndex].innerHTML ? 1 : -1;
      };
      break;
  }

  // сортування
  arrayCollection.sort(match);

  tbody.append(...arrayCollection);
}

// 3. Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.

const arrow = document.querySelector('.arrow')
const border = document.querySelector('.border');
let computedStyle = getComputedStyle(border);
let borderWidth = parseInt(computedStyle.width);
let borderHeight = parseInt(computedStyle.height)

let x0;
let y0;
let xLast;
let yLast;
let differenceX;
let differenceY;

function pointerMove(event) {
  xLast = event.x;
  yLast = event.y;

  differenceX = xLast - x0;
  differenceY = yLast - y0;

  if(differenceX > 0) {
    border.style.width = borderWidth + differenceX +'px';
  }
  if(differenceY > 0) {
    border.style.height = borderHeight + differenceY + 'px';
  }

  document.addEventListener('pointerup', function() {
    document.removeEventListener('pointermove', pointerMove)
  });
}

function pointerDown(event) {
  x0 = event.x;
  y0 = event.y;
  document.addEventListener('pointermove', pointerMove)
}

arrow.addEventListener('pointerdown', pointerDown);
