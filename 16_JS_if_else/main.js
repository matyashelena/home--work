function userAge() {
  let userAge = prompt('Enter your age');
  if (isNaN(userAge) || userAge < 0) {
    alert('Enter your age in digits greater than or equal to 0!')
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
  let userNumber = prompt('Enter a number from 0 to 9');
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
  let startValue = +prompt('Enter the start value of the range');
  let endValue = +prompt('Enter the end value of the range');
  if (isNaN(startValue) || isNaN(endValue)) {
    alert('Please enter a numerical value!');
    return false;
  } else if (startValue > endValue) {
    let swap = startValue;
    startValue = endValue;
    endValue = swap;
  }
  let sum = 0;
  for (let i = startValue; i <= endValue; i++) {
    sum += i;
  }
  alert(sum);
}

function greatestCommonDivisor() {
  let number1 = prompt('Enter the first number');
  let number2 = prompt('Enter the second number');
  let a = number1;
  let b = number2;
  if (isNaN(number1) || isNaN(number2)) {
    alert('Enter a numeric value');
    greatestCommonDivisor();
  }
  while (a && b) {
    a > b ? (a %= b) : (b %= a);
  }
  a += b;
  alert(`The greatest common divisor of ${number1} and ${number2} is ${a}`);
}

function allDivisorsNumber() {
  let number = prompt('Enter the number');
  if (isNaN(number)) {
    allDivisorsNumber();
  }
  let result = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      result.push(i);
    }
  }
  alert(`Divisors of the ${number}: ${result.join(', ')}`);
}

function palindrome() {
  let number = prompt('Enter a five digit number');
  if (isNaN(number) || number.length !== 5) {
    palindrome();
  }
  let numberReverse = '';
  for (let i = number.length - 1; i >= 0; i--) {
    numberReverse += number[i];
  }
  if (number == numberReverse) {
    alert('This number is a palindrome!');
  } else {
    alert('This number is not a palindrome!');
  }
}

function discount() {
  let amount = prompt('Enter the purchase amount');
  if (isNaN(amount)) {
    alert('Enter the purchase amount in numbers');
    discount();
  }
  let amountXSmall = 200;
  let amountSmall = 300;
  let amountMedium = 500;
  let discountSmall = 0.03;
  let discountMedium = 0.05;
  let discountLarge = 0.07;

  if (amount < amountXSmall) {
    alert(`You can buy for ${amountXSmall - amount} more to get a discount`);
  } else if (amount <= amountSmall) {
    alert(`Your amount to be paid with the discount is ${amount - amount*discountSmall}`);
  } else if (amount <= amountMedium) {
    alert(`Your amount to be paid with the discount is ${amount - amount*discountMedium}`);
  } else {
    alert(`Your amount to be paid with the discount is ${amount - amount*discountLarge}`);
  }
}

function countNumber() {


  for (let i = 1; i <= 10; i++) {
    var number = prompt(`Enter ${i} number`);
    if (isNaN(number) || (!number)) {
      alert('Enter a numerical value');
      break;
    }
    var positive = 0;
    var negative = 0;
    var zero = 0;
    var even = 0;
    var odd = 0;
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
  if (!number) {
    return false; 
  } else {
    alert(`You have entered ${positive} positive numbers, ${negative} negative numbers and ${zero} zeros. Of these, ${even} are even numbers and ${odd} are odd numbers.`);
  }
  
}

function daysWeek() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let numberDay = 0;
  while (confirm(`${days[numberDay]}. Do you want to see the next day?`)) {
    numberDay = (numberDay + 1) % days.length;
  }
}

function guessNumber() {
  let array = [];
  let start = 0;
  while (start <= 100) {
    array.push(start++);
  }
  let searchNumber = prompt('Guess the number from 0 to 100');
  if (isNaN(searchNumber) || !searchNumber || searchNumber < 0 || searchNumber > 100) {
    guessNumber();
  }
  let left = -1;
  let right = array.length;
  while(right - left > 1) {
    let middle = Math.floor((left + right) / 2);
    if(searchNumber == array[middle]) {
      searchNumber == middle;
      alert(`Yay! Your number is ${middle}!`);
      break;
    }
    if(confirm(`If the number you guessed is <${middle} press "OK"
    If the number you guessed is >${middle} press "Cancel"`)) {
      right = middle;
    } else {
      left = middle;
    }
  }


}

function multiplicationTable() {
  for (let i = 2; i <= 9; i++) {
    for (let a = 2; a <= 9; a++) {
      console.log(`${i} * ${a} = ${i*a}`);
    }
  }
}