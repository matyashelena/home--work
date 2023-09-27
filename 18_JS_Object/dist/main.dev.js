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
  nominator1: 1,
  denominator1: 2,
  nominator2: 1,
  denominator2: 2,
  showFraction: function showFraction() {
    fraction1 = "".concat(this.nominator1, "/").concat(this.denominator1);
    fraction2 = "".concat(this.nominator2, "/").concat(this.denominator2);
    console.log("\u041F\u0435\u0440\u0448\u0438\u0439 \u043E\u0431'\u0454\u043A\u0442-\u0434\u0440\u0456\u0431: ".concat(fraction1, ", \u0434\u0440\u0443\u0433\u0438\u0439 \u043E\u0431'\u0454\u043A\u0442-\u0434\u0440\u0456\u0431: ").concat(fraction2));
  },
  findGCD: function findGCD(a, b) {
    if (a == 0) {
      return b;
    }

    return this.findGCD(b % a, a);
  },
  sum: function sum() {
    nominatorSum = this.nominator1 * this.denominator2 + this.nominator2 * this.denominator1;
    denominatorSum = this.denominator1 * this.denominator2;
    var gcd = this.findGCD(nominatorSum, denominatorSum);
    resultSum = "".concat(nominatorSum / gcd, "/").concat(denominatorSum / gcd);

    if (nominatorSum / gcd === denominatorSum / gcd) {
      resultSum = 1;
    }

    console.log("\u0421\u0443\u043C\u0430 ".concat(fraction1, " \u0442\u0430 ").concat(fraction2, " \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ").concat(resultSum));
    return resultSum;
  },
  minus: function minus() {
    nominatorMinus = this.nominator1 * this.denominator2 - this.nominator2 * this.denominator1;
    denominatorMinus = this.denominator1 * this.denominator2;
    var gcd = this.findGCD(nominatorMinus, denominatorMinus);
    resultMinus = "".concat(nominatorMinus / gcd, "/").concat(denominatorMinus / gcd);

    if (nominatorMinus / gcd === denominatorMinus / gcd) {
      resultMinus = 1;
    }

    if (nominatorMinus / gcd === 0 || denominatorMinus / gcd === 0) {
      resultMinus = 0;
    }

    console.log("\u0420\u0456\u0437\u043D\u0438\u0446\u044F ".concat(fraction1, " \u0442\u0430 ").concat(fraction2, " \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ").concat(resultMinus));
    return resultMinus;
  },
  multiplication: function multiplication() {
    nominatorMultiplication = this.nominator1 * this.nominator2;
    denominatorMultiplication = this.denominator1 * this.denominator2;
    var gcd = this.findGCD(nominatorMultiplication, denominatorMultiplication);
    resultMultiplication = "".concat(nominatorMultiplication / gcd, "/").concat(denominatorMultiplication / gcd);
    console.log("\u041C\u043D\u043E\u0436\u0435\u043D\u043D\u044F ".concat(fraction1, " \u0442\u0430 ").concat(fraction2, " \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ").concat(resultMultiplication));
    return resultMultiplication;
  },
  divide: function divide() {
    nominatorDivide = this.nominator1 * this.denominator2;
    denominatorDivide = this.denominator1 * this.nominator2;
    var gcd = this.findGCD(nominatorDivide, denominatorDivide);
    resultDivide = "".concat(nominatorDivide / gcd, "/").concat(denominatorDivide / gcd);

    if (nominatorDivide / gcd === denominatorDivide / gcd) {
      resultDivide = 1;
    }

    console.log("\u0414\u0456\u043B\u0435\u043D\u043D\u044F ".concat(fraction1, " \u043D\u0430 ").concat(fraction2, " \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ").concat(resultDivide));
    return resultDivide;
  }
};
fraction.showFraction();
fraction.sum();
fraction.minus();
fraction.multiplication();
fraction.divide();