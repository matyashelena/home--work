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

const input = document.querySelectorAll('.input'),
  buffer = [];
for (let i = 0; input.length > i; i++) {
  console.log(input[i].value);
  buffer[i] = document.createElement('div');
  buffer[i].className = "buffer";
  //вставляем скрытый div.buffer
  input[i].parentNode.insertBefore(buffer[i], input[i].nextSibling);

  input[i].oninput = function() {
    this.nextElementSibling.innerHTML = this.value;
    this.style.width = this.nextElementSibling.clientWidth + 'px';
  };
}

class Marker {
  constructor(color, level) {
      this.color = color;
      this.level = level; // Відсотки чорнила
  }

  write(text, outputElement) {
      let writtenText = '';
      for (let i = 0; i < text.length; i++) {
          if (text[i] !== ' ' && this.level >= 0.5) {
              writtenText += text[i];
              this.level -= 0.5; // Видаляємо 0.5% чорнила за кожен не пробільний символ
          } else {
              writtenText += ' '; // Додаємо пробіл, якщо немає чорнила або символ - пробільний
          }
          
      }
      outputElement.textContent += writtenText;
      outputElement.style.color = this.color;
      document.getElementById('level_marker').innerHTML = `Залишилось чорнил: ${this.level}%`;
      
  }
}

class RefillableMarker extends Marker {
  constructor(color, level, maxLevel) {
      super(color, level);
      this.maxLevel = maxLevel;
  }

  refill(amount) {
      if (amount > 0) {
          this.level = Math.min(this.maxLevel, this.level + amount); // Обмежуємо до максимального рівня
      }
  }
}

// HTML-елементи
const outputElement = document.getElementById('output');
const writeButton = document.getElementById('write');
const refillButton = document.getElementById('refill');



// Створення маркера
const marker = new RefillableMarker("blue", 100, 200); // Створюємо маркер з 100% чорнила і максимальним об'ємом 200%

// Обробники подій для кнопок
writeButton.addEventListener('click', () => {
  const inputText = document.getElementById('input').value;
  marker.write(inputText, outputElement);
});

refillButton.addEventListener('click', () => {
  marker.refill(100); // Заправляємо маркер на 100%
});

// 3) Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.
// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().
// Створи об’єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().

class User {
  constructor(name, role) {
      if (role !== 'admin' && role !== 'user') {
          alert('Некоректна роль! Роль може бути або admin, або user.');
      }
      this.name = name;
      this.role = role;
  }

  getName() {
      return this.name;
  }

  getRole() {
      return this.role;
  }

  login() {
      console.log(`${this.name} увійшов в систему.`);
  }

  logout() {
      console.log(`${this.name} вийшов із системи.`);
  }

  changeName(newName) {
      this.name = newName;
      console.log(`Ім'я користувача було змінено на ${newName}.`);
  }

  changePassword(newPassword) {
      console.log(`Пароль користувача ${this.name} було змінено.`);
  }
}

class Admin extends User {
  constructor(name) {
      super(name, 'admin');
      this.users = [];
  }

  addUser(newUser) {
      this.users.push(newUser);
      console.log(`Користувач ${newUser.getName()} був доданий.`);
  }

  removeUser(userToRemove) {
      const index = this.users.findIndex(user => user.getName() === userToRemove.getName());
      if (index !== -1) {
          this.users.splice(index, 1);
          console.log(`Користувач ${userToRemove.getName()} був видалений.`);
      }
  }

  changeUserRole(user, newRole) {
      if (newRole === 'admin' || newRole === 'user') {
          user.role = newRole;
          console.log(`Роль користувача ${user.getName()} була змінена на ${newRole}.`);
      } else {
          alert('Некоректна роль! Роль може бути або admin, або user.');
      }
  }

  getAllUsers() {
      return this.users;
  }

  removeAllUsers() {
      this.users = [];
      console.log('Усі користувачі були видалені.');
  }
}

// Приклад використання класів
const user1 = new User('Petro', 'user');
const user2 = new User('Ivan', 'user');
const admin = new Admin('AdminUser');

admin.addUser(user1);
admin.addUser(user2);

console.log(admin.getAllUsers());

admin.changeUserRole(user1, 'admin');
console.log(user1.getRole());

admin.removeUser(user2);
console.log(admin.getAllUsers());

admin.removeAllUsers();
console.log(admin.getAllUsers());

