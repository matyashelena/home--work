"use strict";

function userName() {
  var userName = prompt('Add your name');

  if (!isNaN(userName)) {
    alert('Рlease enter a name using letters!');
  } else {
    alert("Hello, ".concat(userName, "!"));
  }

  console.log(userName);
}

function userAge() {
  var userBirthday = parseInt(prompt('Add your year of birth'));
  var currentYear = 2023;

  if (!isNaN(userBirthday)) {
    if (userBirthday > currentYear) {
      alert("You weren't born yet!");
    } else {
      var userAge = currentYear - userBirthday;
      alert("You're ".concat(userAge, " years old!"));
    }
  } else {
    alert('Please enter a numerical value!');
  }

  console.log(userAge);
}

function perimeterSquare() {
  var size = parseInt(prompt('Add the length of the side of the square'));
  var perimeterSquare = size * 4;

  if (isNaN(perimeterSquare)) {
    alert('Please enter a numerical value!');
  } else {
    alert("Perimeter of the square ".concat(perimeterSquare));
  }

  console.log(perimeterSquare);
}

function areaCircle() {
  var radiusCircle = prompt('Enter the radius of the circle');
  var areaCircle = Math.round(2 * Math.PI * radiusCircle);

  if (isNaN(radiusCircle)) {
    alert('Please enter a numerical value!');
  } else {
    alert("The area of the circle ".concat(areaCircle));
  }

  console.log(areaCircle);
}

function userSpeed() {
  var distance = prompt('Add the distance in kilometers between the two cities');
  var time = prompt('How many hours you want to get there');
  var speed = (distance / time).toFixed(2);

  if (!isNaN(distance) && !isNaN(time)) {
    alert("You need to move at a speed of ".concat(speed, " km/h to be on time"));
  } else {
    alert('Please enter a numerical value!');
  }

  console.log(speed);
}

function currencyConverter() {
  var rate = 0.93;
  /*exchange rate dollar to euro*/

  var dollars = prompt('Enter the amount in dollars');
  var result = (rate * dollars).toFixed(2);

  if (isNaN(dollars)) {
    alert('Please enter a numerical value!');
  } else {
    alert("You can get ".concat(result, " \u20AC"));
    console.log(result);
  }
}

function correctAnswer() {
  var a = 0.1;
  var b = 0.2;
  var result = parseInt((a + b) * 10) / 10;
  alert("A mathematically correct answer is ".concat(result));
  console.log(result);
}

function correctAnswerString() {
  var a = 1;
  var b = '2';
  var result = a + +b;
  alert("A mathematically correct answer is ".concat(result));
  console.log(result);
}

function numberFiles() {
  var sizeFlash = prompt('Enter the volume of the flash drive in GB');
  var gB = 1024;
  var sizeFile = 820;
  var numberFiles = parseInt(sizeFlash * gB / sizeFile);

  if (isNaN(sizeFlash)) {
    alert('Please enter a numerical value!');
  } else {
    alert("".concat(numberFiles));
    console.log(numberFiles);
  }
}

function chocolates() {
  var money = prompt('Enter the amount of money in the wallet');
  var price = prompt('Enter the price of one chocolate bar');
  var chocolates = parseInt(money / price);
  var change = money % price;

  if (!isNaN(money) && !isNaN(price)) {
    alert("You can buy ".concat(chocolates, " chocolates, the change is ").concat(change));
  } else {
    alert('Please enter a numerical value!');
  }
}

function backwardsNumber() {
  var number = prompt('Enter a three-digit number');
  var a = parseInt(number % 1000 / 100).toString();
  var b = parseInt(number % 100 / 10).toString();
  var c = parseInt(number % 10).toString();
  var result = +(c + b + a);

  if (!isNaN(number) && number.length == 3) {
    alert("".concat(result));
  } else {
    alert('Please enter a three-digit number!');
  }
}

function amountDeposit() {
  var amount = prompt('Enter the amount of the deposit');
  var interestMonth = 0.12;
  var daysYear = 365;
  var month = 2;
  var days = month * 30.4;
  var result = (amount * interestMonth / daysYear * days).toFixed(2);

  if (!isNaN(amount)) {
    alert("Amount of accrued interest ".concat(result));
  } else {
    alert('Please enter a numerical value!');
  }
}