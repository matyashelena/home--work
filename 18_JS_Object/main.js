// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// Метод, який виводить на екран інформацію про автомобіль.
// Додавання ім’я водія у список
// Перевірка водія на наявність його ім’я у списку
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 

const car = {
  manufacturer: 'BMW',
  model: 'X5',
  yearRelease: 1999,
  avgSpeed: 200,
  fuelTank: 75,
  fuelСonsumption: 15,
  nameDriver: [],
  showInfo() {
      for (const key in car) {
          if(typeof car[key] !== 'function') {
              console.log(`Value of ${key} is ${car[key]}`);
          }
      }
  },
  addDriver(name) {
      this.nameDriver.push(name);
  },
  isNameDriver(name) {
      return this.nameDriver.includes(name);
  },
  getTime(distance) {
      let time = distance / this.avgSpeed;
      if(time >= 4) {
          time = time + Math.trunc(time/4);            
      } else {
          return time;
      }
      return time.toFixed(1);
  },
  getAmountFuel(distance) {
      let fuel = this.fuelTank / 100 * distance;
      return fuel;
  }
}

car.addDriver('Max');
car.addDriver('Artem');
console.log(car.isNameDriver('Alex'));
console.log(car.getTime(4000));
console.log(car.getAmountFuel(4000));
car.showInfo();


// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.
// Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.
const time = {
  hours: 1,
  minutes: 2,
  seconds: 3,
  getChangesHours(n) {
      this.hours = this.hours + n;
      console.log(`Now ${this.hours}:${this.minutes}:${this.seconds}`);
  },
  getChangesMinutes(n) {
      this.minutes = this.minutes + n;
      if (this.minutes > 60) {
          this.hours = this.hours + Math.trunc(this.minutes/60);
          this.minutes = this.minutes%60;
      }
  },
  getChangesSeconds(n) {
      this.seconds = this.seconds + n;
      if(this.seconds > 60) {
          this.minutes = this.minutes + Math.trunc(this.seconds/60);
          this.seconds = this.seconds%60;
      }
      if (this.minutes > 60) {
          this.hours = this.hours + Math.trunc(this.minutes/60);
          this.minutes = this.minutes%60;
      }
  },
  showTime() {
      if(this.hours < 9) {
          this.hours = `0${this.hours}`;
      }
      if(this.minutes < 9) {
          this.minutes = `0${this.minutes}`;
      }
      if(this.seconds < 9) {
          this.seconds = `0${this.seconds}`;
      }
      console.log(`Now ${this.hours}:${this.minutes}:${this.seconds}`);
  },
}
// time.showTime();
// time.getChangesHours(3);
// time.getChangesMinutes(260);
time.getChangesSeconds(15000);
time.showTime();


// Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
// Складання 2-х об'єктів-дробів.
// Віднімання 2-х об'єктів-дробів.
// Множення 2-х об'єктів-дробів.
// Ділення 2-х об'єктів-дробів.
// Скорочення об'єкта-дробу.
const fraction = {
  divisible1: 5,
  divisor1: 50,
  resultFractional1() {
      result1 = `${this.divisible1}/${this.divisor1}`;
      console.log(result1);
      return result1;
  },
  divisible2: 5,
  divisor2: 7,
  resultFractional2() {
      result2 = `${this.divisible2}/${this.divisor2}`;
      console.log(result2);
      return result2;
  },
  sum() {
      divisibleSum = (this.divisible1)* (this.divisor2) + (this.divisible2*this.divisor1);
      divisorSum = this.divisor1 * this.divisor2;
      resultSum = `${divisibleSum}/${divisorSum}`;
      console.log(`Сума ${result1} та ${result2} дорівнює ${resultSum}`);
      return resultSum;
  },
  minus() {
      divisibleMinus = (this.divisible1)* (this.divisor2) - (this.divisible2*this.divisor1);
      divisorMinus = this.divisor1 * this.divisor2;
      resultMinus = `${divisibleMinus}/${divisorMinus}`;
      console.log(`Різниця ${result1} та ${result2} дорівнює ${resultMinus}`);
      return resultMinus;
  },
  multiplication() {
      divisibleMultiplication = this.divisible1* this.divisible2;
      divisorMultiplication = this.divisor1 * this.divisor2;
      resultMultiplication = `${divisibleMultiplication}/${divisorMultiplication}`;
      console.log(`Множення ${result1} та ${result2} дорівнює ${resultMultiplication}`);
      return resultMultiplication;
  },
  divide() {
      divisibleDivide = (this.divisible1)* (this.divisor2);
      divisorDivide = this.divisor1 * this.divisible2;
      resultDivide = `${divisibleDivide}/${divisorDivide}`;
      console.log(`Ділення ${result1} на ${result2} дорівнює ${resultDivide}`);
      return resultDivide;
  },
  reduce() {
          let number1 = this.divisible1;
          let number2 = this.divisor1;
          let a = number1;
          let b = number2;
          let result = `${this.divisible1}/${this.divisor1} після скорочення на ${a} дорівнює ${this.divisible1/a}/${this.divisor1/a}`;
          while (a && b) {
            a > b ? (a %= b) : (b %= a);
          }
          a += b;
          console.log(result);
          return result;
        

  }

}
console.log(fraction.resultFractional1(), fraction.resultFractional2());
console.log(fraction.sum());
console.log(fraction.minus());
console.log(fraction.multiplication());
console.log(fraction.divide());
console.log(fraction.reduce());