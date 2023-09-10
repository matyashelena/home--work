"use strict";

function userName() {
  var userName = prompt('Add your name');
  alert("Hello, ".concat(userName, "!"));
  console.log(userName);
}

function userAge() {
  var userBirthday = parseInt(prompt('Add your year of birth'));
  var currentYear = 2023;

  if (userBirthday > currentYear) {
    alert("You weren't born yet!");
  } else {
    var userAge = currentYear - userBirthday;
    alert("You're ".concat(userAge, " years old!"));
  }

  console.log(userAge);
}

function perimeterSquare() {
  var size = parseInt(prompt('Add the length of the side of the square'));
  var perimeterSquare = size * 4;
  alert("Perimeter of the square ".concat(perimeterSquare));
  console.log(perimeterSquare);
}

function areaCircle() {
  var radiusCircle = prompt('Enter the radius of the circle');
  var areaCircle = Math.round(2 * Math.PI * radiusCircle);
  alert("The area of the circle ".concat(areaCircle));
  console.log(areaCircle);
}

function userSpeed() {
  var distance = prompt('Add the distance in kilometers between the two cities');
  var time = prompt('How many hours you want to get there');
  var speed = (distance / time).toFixed(2);
  alert("You need to move at a speed of ".concat(speed, " km/h to be on time"));
  console.log(speed);
}

function currencyConverter() {
  var rate = 0.93;
  /*exchange rate dollar to euro*/

  var dollars = prompt('Enter the amount in dollars');
  var result = (rate * dollars).toFixed(2);
  alert("You can get ".concat(result, " euros"));
  console.log(result);
}