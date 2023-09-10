function userName() {
  const userName = prompt('Add your name');
  alert(`Hello, ${userName}!`);
  console.log(userName);
}

function userAge() {
  const userBirthday = parseInt(prompt('Add your year of birth'));
  const currentYear = 2023;
  if (userBirthday > currentYear) {
    alert(`You weren't born yet!`);
  } else {
    var userAge = currentYear - userBirthday;
    alert(`You're ${userAge} years old!`);
  }
  console.log(userAge);
}

function perimeterSquare() {
  const size = parseInt(prompt('Add the length of the side of the square'));
  var perimeterSquare = size * 4;
  alert(`Perimeter of the square ${perimeterSquare}`);
  console.log(perimeterSquare);
}

function areaCircle() {
  let radiusCircle = prompt('Enter the radius of the circle');
  let areaCircle = Math.round(2 * Math.PI * radiusCircle);
  alert(`The area of the circle ${areaCircle}`);
  console.log(areaCircle);
}

function userSpeed() {
  let distance = prompt('Add the distance in kilometers between the two cities');
  let time = prompt('How many hours you want to get there');
  let speed = (distance / time).toFixed(2);
  alert(`You need to move at a speed of ${speed} km/h to be on time`);
  console.log(speed);
}

function currencyConverter() {
  const rate = 0.93; /*exchange rate dollar to euro*/
  var dollars = prompt('Enter the amount in dollars');
  var result = (rate * dollars).toFixed(2);
  alert(`You can get ${result} euros`);
  console.log(result);
}