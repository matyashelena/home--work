// 1) Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.

class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value < 0) {
      throw new Error("Радіус не може бути від'ємним");
    }
    this._radius = value;
  }

  get diameter() {
    return this._radius * 2;
  }

  area() {
    return Math.round(Math.PI * this._radius ** 2);
  }

  circumference() {
    return Math.round(2 * Math.PI * this._radius);
  }

  showREsult() {
    let drowCircle = `
      <div class="circle" style="width: ${this.radius}px; height: ${this.radius}px"></div>
    `;

    let desc = `
        <p>Радіус кола: ${circle.radius}</p>
        <p>Діаметр кола: ${circle.diameter}</p>
        <p>Площа кола: ${circle.area()}</p>
        <p>Довжина кола: ${circle.circumference()}</p>
    `;

    document.querySelector('.circle_block').innerHTML = drowCircle;
    document.querySelector('.circle_description').innerHTML = desc;
  }
}

// Приклад використання класу Circle
const circle = new Circle(150); // Створюємо об'єкт кола з радіусом 150
circle.showREsult(); // Створюємо коло в html

// 2) Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнил у маркері (у відсотках);
// метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться доти, доки в маркері є чорнило; один не пробільний символ — це 0,5 % чорнил у маркері).
// Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера й додай метод для заправки.

// Продемонструй роботу написаних методів.


// ширина поля input залежно выд контенту
const input = document.querySelectorAll('.input');
let buffer = [];
for (var i = 0; input.length > i; i++) {
  buffer[i] = document.createElement('div');
  buffer[i].className = "buffer";
  //вставляемо hidden div.buffer
  input[i].parentNode.insertBefore(buffer[i], input[i].nextSibling);

  input[i].oninput = function () {
    this.nextElementSibling.innerHTML = this.value;
    this.style.width = this.nextElementSibling.clientWidth + 'px';
  };
}

class Marker {
  constructor(color, pircent) {
      this.color = color;
      this.pircent = pircent; // Відсотки чорнила
  }

  write(text) {
    let writeText = document.getElementById('par');
      // let writtenText = '';
      for (let i = 0; i < text.length; i++) {
          if (text[i] !== ' ' && this.pircent >= 0.5) {
              writeText += text[i];
              this.pircent -= 0.5; // Видаляємо 0.5% чорнила за кожен не пробільний символ
          } else {
              writeText += ' '; // Додаємо пробіл, якщо немає чорнила або символ - пробільний
          }
      }
      document.getElementById('inputContent').value = text;
  }
  showREsult() {
    let desc = `
        <p>Колір маркера: ${this.color}</p>
        <p>Залишилось чорнил: ${this.pircent}%</p>
    `;

    document.getElementById('marker_desc').innerHTML = desc;
    document.getElementById('marker_desc').style.color = this.color;
  }
}

// Приклад використання класу Marker
const marker = new Marker("pink", 100);
marker.write('Hello my friend');
marker.showREsult();// Створюємо маркер з 100% чорнила


class refillInk extends Marker {
  refill(addInk) {
      if (addInk > 0) {
          this.pircent = Math.min(100, this.pircent + addInk); // Обмежуємо до 100%
          document.getElementById('new_marker').style.color = this.color;
          document.getElementById('new_marker').innerHTML = `Маркер був успішно заправлений. Новий відсоток чорнила: ${this.pircent}%`;
      }
  }
}

// Приклад використання класу refillInk
const refill = new refillInk("blue", 5);
refill.write("Текст для написання.");

console.log(`Колір маркера: ${refill.color}`);
console.log(`Відсоток чорнила: ${refill.pircent}%`);
console.log(`Відсоток чорнила після написання: ${refill.pircent}%`);

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