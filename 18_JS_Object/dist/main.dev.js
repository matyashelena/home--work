"use strict";

// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// Метод, який виводить на екран інформацію про автомобіль.
// Додавання ім’я водія у список
// Перевірка водія на наявність його ім’я у списку
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
var car = {
  manufacturer: 'BMW',
  model: 'X5',
  yearRelease: 1999,
  avgSpeed: 200,
  fuelTank: 75,
  fuelСonsumption: 15,
  nameDriver: [],
  showInfo: function showInfo() {
    for (var key in car) {
      if (typeof car[key] !== 'function') {
        console.log("Value of ".concat(key, " is ").concat(car[key]));
      }
    }
  },
  addDriver: function addDriver(name) {
    this.nameDriver.push(name);
  },
  isNameDriver: function isNameDriver(name) {
    return this.nameDriver.includes(name);
  },
  getTime: function getTime(distance) {
    var time = distance / this.avgSpeed;

    if (time >= 4) {
      time = time + Math.trunc(time / 4);
    } else {
      return time;
    }

    return time.toFixed(1);
  },
  getAmountFuel: function getAmountFuel(distance) {
    var fuel = this.fuelTank / 100 * distance;
    return fuel;
  }
};
car.addDriver('Max');
car.addDriver('Artem');
console.log(car.isNameDriver('Alex'));
console.log(car.getTime(4000));
console.log(car.getAmountFuel(4000));
car.showInfo(); // Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.
// Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

var time = {
  hours: 1,
  minutes: 2,
  seconds: 3,
  getChangesHours: function getChangesHours(n) {
    this.hours = this.hours + n;
    console.log("Now ".concat(this.hours, ":").concat(this.minutes, ":").concat(this.seconds));
  },
  getChangesMinutes: function getChangesMinutes(n) {
    this.minutes = this.minutes + n;

    if (this.minutes > 60) {
      this.hours = this.hours + Math.trunc(this.minutes / 60);
      this.minutes = this.minutes % 60;
    }
  },
  getChangesSeconds: function getChangesSeconds(n) {
    this.seconds = this.seconds + n;

    if (this.seconds > 60) {
      this.minutes = this.minutes + Math.trunc(this.seconds / 60);
      this.seconds = this.seconds % 60;
    }

    if (this.minutes > 60) {
      this.hours = this.hours + Math.trunc(this.minutes / 60);
      this.minutes = this.minutes % 60;
    }
  },
  showTime: function showTime() {
    if (this.hours < 9) {
      this.hours = "0".concat(this.hours);
    }

    if (this.minutes < 9) {
      this.minutes = "0".concat(this.minutes);
    }

    if (this.seconds < 9) {
      this.seconds = "0".concat(this.seconds);
    }

    console.log("Now ".concat(this.hours, ":").concat(this.minutes, ":").concat(this.seconds));
  }
}; // time.showTime();
// time.getChangesHours(3);
// time.getChangesMinutes(260);

time.getChangesSeconds(15000);
time.showTime(); // Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
// Складання 2-х об'єктів-дробів.
// Віднімання 2-х об'єктів-дробів.
// Множення 2-х об'єктів-дробів.
// Ділення 2-х об'єктів-дробів.
// Скорочення об'єкта-дробу.

var fraction = {
  divisible1: 5,
  divisor1: 50,
  resultFractional1: function resultFractional1() {
    result1 = "".concat(this.divisible1, "/").concat(this.divisor1);
    console.log(result1);
    return result1;
  },
  divisible2: 5,
  divisor2: 7,
  resultFractional2: function resultFractional2() {
    result2 = "".concat(this.divisible2, "/").concat(this.divisor2);
    console.log(result2);
    return result2;
  },
  sum: function sum() {
    divisibleSum = this.divisible1 * this.divisor2 + this.divisible2 * this.divisor1;
    divisorSum = this.divisor1 * this.divisor2;
    resultSum = "".concat(divisibleSum, "/").concat(divisorSum);
    console.log("\u0421\u0443\u043C\u0430 ".concat(result1, " \u0442\u0430 ").concat(result2, " \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ").concat(resultSum));
    return resultSum;
  },
  minus: function minus() {
    divisibleMinus = this.divisible1 * this.divisor2 - this.divisible2 * this.divisor1;
    divisorMinus = this.divisor1 * this.divisor2;
    resultMinus = "".concat(divisibleMinus, "/").concat(divisorMinus);
    console.log("\u0420\u0456\u0437\u043D\u0438\u0446\u044F ".concat(result1, " \u0442\u0430 ").concat(result2, " \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ").concat(resultMinus));
    return resultMinus;
  },
  multiplication: function multiplication() {
    divisibleMultiplication = this.divisible1 * this.divisible2;
    divisorMultiplication = this.divisor1 * this.divisor2;
    resultMultiplication = "".concat(divisibleMultiplication, "/").concat(divisorMultiplication);
    console.log("\u041C\u043D\u043E\u0436\u0435\u043D\u043D\u044F ".concat(result1, " \u0442\u0430 ").concat(result2, " \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ").concat(resultMultiplication));
    return resultMultiplication;
  },
  divide: function divide() {
    divisibleDivide = this.divisible1 * this.divisor2;
    divisorDivide = this.divisor1 * this.divisible2;
    resultDivide = "".concat(divisibleDivide, "/").concat(divisorDivide);
    console.log("\u0414\u0456\u043B\u0435\u043D\u043D\u044F ".concat(result1, " \u043D\u0430 ").concat(result2, " \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ").concat(resultDivide));
    return resultDivide;
  },
  reduce: function reduce() {
    var number1 = this.divisible1;
    var number2 = this.divisor1;
    var a = number1;
    var b = number2;
    var result = "".concat(this.divisible1, "/").concat(this.divisor1, " \u043F\u0456\u0441\u043B\u044F \u0441\u043A\u043E\u0440\u043E\u0447\u0435\u043D\u043D\u044F \u043D\u0430 ").concat(a, " \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ").concat(this.divisible1 / a, "/").concat(this.divisor1 / a);

    while (a && b) {
      a > b ? a %= b : b %= a;
    }

    a += b;
    console.log(result);
    return result;
  }
};
console.log(fraction.resultFractional1(), fraction.resultFractional2());
console.log(fraction.sum());
console.log(fraction.minus());
console.log(fraction.multiplication());
console.log(fraction.divide());
console.log(fraction.reduce());