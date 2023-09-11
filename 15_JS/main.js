function userName() {
  const userName = prompt('Add your name');
  if (!isNaN(userName)) {
    alert('Рlease enter a name using letters!');
  } else {
    alert(`Hello, ${userName}!`);
  }

  console.log(userName);
}

function userAge() {
  const userBirthday = parseInt(prompt('Add your year of birth'));
  const currentYear = 2023;
  if (!isNaN(userBirthday)) {
    if (userBirthday > currentYear) {
      alert(`You weren't born yet!`);
    } else {
      var userAge = currentYear - userBirthday;
      alert(`You're ${userAge} years old!`);
    }
  } else {
    alert('Please enter a numerical value!');
  }
  console.log(userAge);
}

function perimeterSquare() {
  const size = parseInt(prompt('Add the length of the side of the square'));
  var perimeterSquare = size * 4;
  if (isNaN(perimeterSquare)) {
    alert('Please enter a numerical value!');
  } else {
    alert(`Perimeter of the square ${perimeterSquare}`);
  }
  console.log(perimeterSquare);
}

function areaCircle() {
  let radiusCircle = prompt('Enter the radius of the circle');
  let areaCircle = Math.round(2 * Math.PI * radiusCircle);
  if (isNaN(radiusCircle)) {
    alert('Please enter a numerical value!');
  } else {
    alert(`The area of the circle ${areaCircle}`);
  }
  console.log(areaCircle);
}

function userSpeed() {
  let distance = prompt('Add the distance in kilometers between the two cities');
  let time = prompt('How many hours you want to get there');
  let speed = (distance / time).toFixed(2);
  if (!isNaN(distance) && !isNaN(time)) {
    alert(`You need to move at a speed of ${speed} km/h to be on time`);
  } else {
    alert('Please enter a numerical value!');
  }
  console.log(speed);
}

function currencyConverter() {
  const rate = 0.93; /*exchange rate dollar to euro*/
  var dollars = prompt('Enter the amount in dollars');
  var result = (rate * dollars).toFixed(2);
  if (isNaN(dollars)) {
    alert('Please enter a numerical value!');
  } else {
    alert(`You can get ${result} €`);
    console.log(result);
  }
}

function correctAnswer() {
  let a = 0.1;
  let b = 0.2;
  let result = parseInt((a + b) * 10) / 10;
  alert(`A mathematically correct answer is ${result}`);
  console.log(result);
}

function correctAnswerString() {
  let a = 1;
  let b = '2';
  let result = a + +b;
  alert(`A mathematically correct answer is ${result}`);
  console.log(result);
}

function numberFiles() {
  let sizeFlash = prompt('Enter the volume of the flash drive in GB');
  const gB = 1024;
  const sizeFile = 820;
  let numberFiles = parseInt((sizeFlash * gB) / sizeFile);
  if (isNaN(sizeFlash)) {
    alert('Please enter a numerical value!');
  } else {
    alert(`${numberFiles}`);
    console.log(numberFiles);
  }
}

function chocolates() {
  let money = prompt('Enter the amount of money in the wallet');
  let price = prompt('Enter the price of one chocolate bar');
  let chocolates = parseInt(money / price);
  let change = money % price;
  if (!isNaN(money) && !isNaN(price)) {
    alert(`You can buy ${chocolates} chocolates, the change is ${change}`);
  } else {
    alert('Please enter a numerical value!');
  }
}

function backwardsNumber() {
  let number = prompt('Enter a three-digit number');
  let a = parseInt(number % 1000 / 100).toString();
  let b = parseInt(number % 100 / 10).toString();
  let c = parseInt(number % 10).toString();
  let result = +(c + b + a);
  if (!isNaN(number) && (number.length == 3)) {
    alert(`${result}`);
  } else {
    alert('Please enter a three-digit number!');
  }
}

function amountDeposit() {
  let amount = prompt('Enter the amount of the deposit');
  const interestMonth = 0.12;
  const daysYear = 365;
  let month = 2;
  let days = month*30.4;
  let result = (amount*interestMonth/daysYear*days).toFixed(2);
  if (!isNaN(amount)) {
    alert(`Amount of accrued interest ${result}`);
  } else {
    alert('Please enter a numerical value!');
  }
}