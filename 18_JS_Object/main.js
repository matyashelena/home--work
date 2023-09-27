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
            if (typeof car[key] !== 'function') {
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
        if (time >= 4) {
            time = time + Math.trunc(time / 4);
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
            this.hours = this.hours + Math.trunc(this.minutes / 60);
            this.minutes = this.minutes % 60;
        }
    },
    getChangesSeconds(n) {
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
    showTime() {
        if (this.hours < 9) {
            this.hours = `0${this.hours}`;
        }
        if (this.minutes < 9) {
            this.minutes = `0${this.minutes}`;
        }
        if (this.seconds < 9) {
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
    nominator1: 5,
    denominator1: 50,
    nominator2: 5,
    denominator2: 7,
    showFraction() {
        fraction1 = `${this.nominator1}/${this.denominator1}`;
        fraction2 = `${this.nominator2}/${this.denominator2}`;
        console.log(`Перший об'єкт-дріб: ${fraction1}, другий об'єкт-дріб: ${fraction2}`);
    },
    findGCD(a, b) {
        if (a == 0) {
            return b
        }
        return this.findGCD(b % a, a)
    },
    sum() {
        nominatorSum = (this.nominator1) * (this.denominator2) + (this.nominator2 * this.denominator1);
        denominatorSum = this.denominator1 * this.denominator2;
        const gcd = this.findGCD(nominatorSum, denominatorSum);
        resultSum = `${nominatorSum/gcd}/${denominatorSum/gcd}`;
        console.log(`Сума ${fraction1} та ${fraction2} дорівнює ${resultSum}`);
        return resultSum;
    },
    minus() {
        nominatorMinus = (this.nominator1) * (this.denominator2) - (this.nominator2 * this.denominator1);
        denominatorMinus = this.denominator1 * this.denominator2;
        const gcd = this.findGCD(nominatorMinus, denominatorMinus);
        resultMinus = `${nominatorMinus/gcd}/${denominatorMinus/gcd}`;
        console.log(`Різниця ${fraction1} та ${fraction2} дорівнює ${resultMinus}`);
        return resultMinus;
    },
    multiplication() {
        nominatorMultiplication = this.nominator1 * this.nominator2;
        denominatorMultiplication = this.denominator1 * this.denominator2;
        const gcd = this.findGCD(nominatorMultiplication, denominatorMultiplication);
        resultMultiplication = `${nominatorMultiplication/gcd}/${denominatorMultiplication/gcd}`;
        console.log(`Множення ${fraction1} та ${fraction2} дорівнює ${resultMultiplication}`);
        return resultMultiplication;
    },
    divide() {
        nominatorDivide = (this.nominator1) * (this.denominator2);
        denominatorDivide = this.denominator1 * this.nominator2;
        const gcd = this.findGCD(nominatorDivide, denominatorDivide);
        resultDivide = `${nominatorDivide/gcd}/${denominatorDivide/gcd}`;
        console.log(`Ділення ${fraction1} на ${fraction2} дорівнює ${resultDivide}`);
        return resultDivide;
    },
}

fraction.showFraction();
fraction.sum();
fraction.minus();
fraction.multiplication();
fraction.divide();