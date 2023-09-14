"use strict";

function userAge() {
  var userAge = prompt('Enter your age');

  if (isNaN(userAge) || userAge < 0) {
    alert('Enter your age in digits greater than or equal to 0!');
  } else if (userAge >= 0 && userAge <= 11) {
    alert('You are a child');
  } else if (userAge > 11 && userAge <= 17) {
    alert('You are a teenager');
  } else if (userAge > 17 && userAge <= 59) {
    alert('You are a adult ');
  } else {
    alert('You are a pensioner');
  }
}

function specialCharacter() {
  var userNumber = prompt('Enter a number from 0 to 9');

  if (isNaN(userNumber) || userNumber.length !== 1) {
    specialCharacter();
  }

  switch (userNumber) {
    case '0':
      alert(')');
      break;

    case '1':
      alert('!');
      break;

    case '2':
      alert('@');
      break;

    case '3':
      alert('#');
      break;

    case '4':
      alert('$');
      break;

    case '5':
      alert('%');
      break;

    case '6':
      alert('^');
      break;

    case '7':
      alert('&');
      break;

    case '8':
      alert('*');
      break;

    case '9':
      alert('(');
      break;

    default:
      alert('number 0 - 9');
  }
}

function sumNumbers() {
  var startValue = +prompt('Enter the start value of the range');
  var endValue = +prompt('Enter the end value of the range');

  if (isNaN(startValue) || isNaN(endValue)) {
    alert('Please enter a numerical value!');
    return false;
  } else if (startValue > endValue) {
    var swap = startValue;
    startValue = endValue;
    endValue = swap;
  }

  var sum = 0;

  for (var i = startValue; i <= endValue; i++) {
    sum += i;
  }

  alert(sum);
}

function greatestCommonDivisor() {
  var number1 = prompt('Enter the first number');
  var number2 = prompt('Enter the second number');
  var a = number1;
  var b = number2;

  if (isNaN(number1) || isNaN(number2)) {
    alert('Enter a numeric value');
    greatestCommonDivisor();
  }

  while (a && b) {
    a > b ? a %= b : b %= a;
  }

  a += b;
  alert("The greatest common divisor of ".concat(number1, " and ").concat(number2, " is ").concat(a));
}

function allDivisorsNumber() {
  var number = prompt('Enter the number');

  if (isNaN(number)) {
    allDivisorsNumber();
  }

  var result = [];

  for (var i = 1; i <= number; i++) {
    if (number % i === 0) {
      result.push(i);
    }
  }

  alert("Divisors of the ".concat(number, ": ").concat(result.join(', ')));
}

function palindrome() {
  var number = prompt('Enter a five digit number');

  if (isNaN(number) || number.length !== 5) {
    palindrome();
  }

  var numberReverse = '';

  for (var i = number.length - 1; i >= 0; i--) {
    numberReverse += number[i];
  }

  if (number == numberReverse) {
    alert('This number is a palindrome!');
  } else {
    alert('This number is not a palindrome!');
  }
}

function discount() {
  var amount = prompt('Enter the purchase amount');

  if (isNaN(amount)) {
    alert('Enter the purchase amount in numbers');
    discount();
  }

  var amountXSmall = 200;
  var amountSmall = 300;
  var amountMedium = 500;
  var discountSmall = 0.03;
  var discountMedium = 0.05;
  var discountLarge = 0.07;

  if (amount < amountXSmall) {
    alert("You can buy for ".concat(amountXSmall - amount, " more to get a discount"));
  } else if (amount <= amountSmall) {
    alert("Your amount to be paid with the discount is ".concat(amount - amount * discountSmall));
  } else if (amount <= amountMedium) {
    alert("Your amount to be paid with the discount is ".concat(amount - amount * discountMedium));
  } else {
    alert("Your amount to be paid with the discount is ".concat(amount - amount * discountLarge));
  }
}

function countNumber() {
  var positive = 0;
  var negative = 0;
  var zero = 0;
  var even = 0;
  var odd = 0;

  for (var i = 1; i <= 10; i++) {
    var number = prompt("Enter ".concat(i, " number"));

    if (isNaN(number)) {
      // не вдається перевірити на порожнє значення
      alert('Enter a numeric value');
      countNumber();
    }

    if (number % 2 === 0) {
      even++;
    } else {
      odd++;
    }

    if (number == 0) {
      zero++;
    }

    if (number > 0) {
      positive++;
    } else {
      negative++;
    }
  }

  alert("You have entered ".concat(positive, " positive numbers, ").concat(negative, " negative numbers and ").concat(zero, " zeros. Of these, ").concat(even, " are even numbers and ").concat(odd, " are odd numbers."));
}

function daysWeek() {
  var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var numberDay = 0;

  while (confirm("".concat(days[numberDay], ". Do you want to see the next day?"))) {
    numberDay = (numberDay + 1) % days.length;
  }
}

function guessNumber() {
  var number = prompt();
  var left = 0;
  var right = number.length - 1;
  var mid;

  while (left <= right) {
    mid = Math.round((right - left) / 2) + left;
  }
}

function multiplicationTable() {
  for (var i = 2; i <= 9; i++) {
    for (var a = 2; a <= 9; a++) {
      console.log("".concat(i, " * ").concat(a, " = ").concat(i * a));
    }
  }
}