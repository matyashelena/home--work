"use strict";

// Створи функцію, яка буде виводити кількість переданих їй аргументів.
function numberArguments(a, b, c, d) {
  console.log(numberArguments.length);
} // Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.


function getCompareNumbers(a, b) {
  if (isNaN(a) || isNaN(b)) {
    console.log('Enter a numeric value');
    return false;
  }

  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
} // Напиши функцію, яка обчислює факторіал переданого їй числа.


function factorial(n) {
  var result = 1;

  for (var i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

function recFactorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * recFactorial(n - 1);
  }
}

function memoFactorial(n) {
  var cache = {};

  if (n === 2) {
    return 2;
  }

  ;

  if (n in cache) {
    return cache[n];
  }

  return cache[n] = n * memoFactorial(n - 1);
} // Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.


function getNumber(a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return false;
  }

  var result = +("" + a + "" + b + "" + c);
  return result;
} // Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.


var getSquare = function getSquare(w) {
  var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : w;
  return w * h;
}; //Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.


function isPerfectNumber(n) {
  if (isNaN(n) || !n) {
    return false;
  }

  var divisor = 0;

  for (var i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      divisor = divisor + i;
    }
  }

  return n === divisor;
}

function showResult() {
  var userNumber = parseInt(prompt('Add your number'));
  console.log(isIdealNumber(userNumber));
} // Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.


function getPerfectNumbersRange(a, b) {
  if (isNaN(a) || isNaN(b) || a == b) {
    return false;
  }

  var min;
  var max;

  if (a < b) {
    min = a;
    max = b;
  } else {
    min = b;
    max = a;
  }

  var result = '';

  for (var i = min; i <= max; i++) {
    if (isPerfectNumber(i)) {
      result += i + ' ';
    }
  }

  return result;
}