// У цьому коді ми спершу створюємо клас User, який має базовий набір функціональності для користувача. Далі створюємо клас Admin, який успадковує властивості та методи з класу User і додає методи для додавання, видалення, зміни ролі користувачів та отримання списку користувачів.

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


// Цей код створює HTML-сторінку з полем вводу для місця та кнопкою "Створити годинник". При кліку на кнопку створюється новий екземпляр класу WorldClock, який відображає час для вказаного місця. Кожен годинник має кнопку для відображення поточної дати та часу та кнопку для видалення годинника.
class WorldClock {
  constructor(location) {
      this.location = location;
      this.clockElement = document.createElement('div');
      this.clockElement.className = 'clock';
      this.updateClock();
      this.intervalId = setInterval(() => this.updateClock(), 1000);
  }

  getCurrentDate() {
      const now = new Date();
      return now.toDateString();
  }

  getCurrentDateTime() {
      const now = new Date();
      return now.toLocaleString();
  }

  deleteClock() {
      clearInterval(this.intervalId);
      this.clockElement.remove();
  }

  updateClock() {
      const now = new Date();
      this.clockElement.innerHTML = `<p>${this.location}</p>
                                    <p>Час: ${now.toLocaleTimeString()}</p>`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const createClockButton = document.getElementById('createClock');
  const locationInput = document.getElementById('locationInput');
  const clocksContainer = document.getElementById('clocks');

  createClockButton.addEventListener('click', () => {
      const location = locationInput.value;
      if (location) {
          const newClock = new WorldClock(location);
          clocksContainer.appendChild(newClock.clockElement);
      }
  });
});

// Функція для отримання прогнозу погоди з OpenWeather API
function getWeatherData(city, apiKey) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  
  return fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          return {
              temperature: data.main.temp,
              description: data.weather[0].description,
          };
      })
      .catch(error => console.error('Помилка отримання погоди: ', error));
}

// Функція для збереження даних погоди в localStorage
function saveWeatherDataToLocalStorage(data) {
  const currentTime = new Date().getTime();
  const weatherData = {
      data,
      timestamp: currentTime,
  };
  localStorage.setItem('weatherData', JSON.stringify(weatherData));
}

// Функція для отримання збережених даних погоди з localStorage
function getWeatherDataFromLocalStorage() {
  const weatherData = JSON.parse(localStorage.getItem('weatherData'));
  if (weatherData) {
      const currentTime = new Date().getTime();
      if (currentTime - weatherData.timestamp < 2 * 60 * 60 * 1000) {
          // Повертаємо збережені дані, якщо не минуло 2 години
          return weatherData.data;
      }
  }
  return null;
}

// Функція для оновлення і відображення погоди
function updateWeather(city, apiKey) {
  const weatherData = getWeatherDataFromLocalStorage();

  if (weatherData) {
      // Використовуємо збережені дані
      displayWeatherData(weatherData);
  } else {
      // Отримуємо нові дані та зберігаємо їх
      getWeatherData(city, apiKey)
          .then(data => {
              saveWeatherDataToLocalStorage(data);
              displayWeatherData(data);
          });
  }
}

// Функція для відображення даних погоди
function displayWeatherData(data) {
  const temperatureElement = document.getElementById('temperature');
  const descriptionElement = document.getElementById('description');
  temperatureElement.textContent = `Температура: ${data.temperature}°C`;
  descriptionElement.textContent = `Стан погоди: ${data.description}`;
}

// Параметри
var apiKey = 'aaa362ec11316d74bc1716de935b46d2'; // Замініть на свій ключ API
var city = 'Kyiv'; // Замініть на місто, для якого ви хочете отримати погоду

// Оновлення погоди
updateWeather(city, apiKey);

class Marker {
    constructor(color, inkLevel) {
        this.color = color;
        this.inkLevel = inkLevel; // Відсотки чорнила
    }

    write(text, outputElement) {
        let writtenText = '';
        for (let i = 0; i < text.length; i++) {
            if (text[i] !== ' ' && this.inkLevel >= 0.5) {
                writtenText += text[i];
                this.inkLevel -= 0.5; // Видаляємо 0.5% чорнила за кожен не пробільний символ
            } else {
                writtenText += ' '; // Додаємо пробіл, якщо немає чорнила або символ - пробільний
            }
        }
        outputElement.textContent += writtenText;
    }
}

class RefillableMarker extends Marker {
    constructor(color, inkLevel, maxInkLevel) {
        super(color, inkLevel);
        this.maxInkLevel = maxInkLevel;
    }

    refill(inkAmount) {
        if (inkAmount > 0) {
            this.inkLevel = Math.min(this.maxInkLevel, this.inkLevel + inkAmount); // Обмежуємо до максимального рівня
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

