const allProducts = [
  {
    name: "banana",
    uniqId: 74638,
    price: 8,
    quantity: 200,
    discount: 0.03,
    isDiscount: true,
  },
  {
    name: "cucumber",
    uniqId: 2334,
    price: 4,
    quantity: 100,
    discount: 0,
    isDiscount: false,
  },
  {
    name: "pear",
    uniqId: 234,
    price: 18,
    quantity: 1,
    discount: 0.5,
    isDiscount: true,
  },
  {
    name: "apple",
    uniqId: 3322,
    price: 18,
    quantity: 2,
    discount: 0.1,
    isDiscount: true,
  },
  {
    name: "potato",
    uniqId: 333,
    price: 2,
    quantity: 2000,
    discount: 0,
    isDiscount: false,
  },
  {
    name: "coconut",
    uniqId: 3498,
    price: 80,
    quantity: 10,
    discount: 0.1,
    isDiscount: true,
  },
];
const userCart = [];
function addToCard(id, quantity) {
  const newProd = allProducts.find((el) => el.uniqId === id);
  if (!newProd) {
    console.log(`det finns inte`);
    return false;
  }
  if (newProd.quantity < quantity) {
    console.log(`Du kan inte köpa det`);
    return false;
  }
  userCart.push(newProd);
  setQuantity(newProd.quantity - quantity, id);
}

function setQuantity(quantity, id) {
  const newProd = allProducts.findIndex((el) => el.uniqId === id);
  allProducts[newProd].quantity = quantity;
}
addToCard(333, 10);
addToCard(3498, 2);
addToCard(234, 3);
function deleteProduct(id) {
  const deletedProduct = userCart.findIndex((el) => el.id === id);
  userCart.splice(deletedProduct, 1);
}
//
function showCartProducts() {
  const result = userCart.map((el) => {
    console.log(el);
    return { name: el.name, price: el.price };
  });
  console.log(result);
}
showCartProducts();

function showCartsProducts() {
  const result = userCart.map((el) => {
    console.log(el);
    return { name: el.name, price: el.price };
  });
  console.log(result);
}
showCartProducts();
function getAmountOfProduct(){
  const amount = userCart.reduce((acc,el)=>{
    acc=(el.quantity*el.price)+acc
    return acc
  },0)
  return amount
}
getAmountOfProduct();
function sortByPrice() {
  const sorted = allProducts.slice()
  sorted.sort((a, b) => {
    return  b.quantity - a.quantity    
  })
  console.log(sorted);
}



const fraction = {
  nominator: 2,
  denominator: 3,
  showValue() {
      console.log(`Value is ${this.nominator}/${this.denominator}`);
  },
  findGCD(a, b) {
      if(a == 0) {
          return b
      }
      return this.findGCD(b % a, a)
  },
  findLocalNominator(n, d) {
      return n * d
  },
  add(n, d) {
      let localDenominator = 1;
      if(this.denominator === d) {
          localDenominator = this.denominator
      } else {
          localDenominator = this.denominator * d
          this.nominator = this.nominator * (localDenominator / this.denominator)
          this.denominator = localDenominator;
          n = n * (localDenominator / d);
          d = localDenominator;
          const addingResultNominator = this.nominator + n;
          const gcd = this.findGCD(addingResultNominator, d);
          console.log(`result is ${addingResultNominator / gcd}/${d / gcd}`);
      }
  }
}

function speak(f){
  var d=new SpeechSynthesisUtterance();
  var e=speechSynthesis.getVoices();
  d.voice=e[2];
  d.voiceURI="native";
  d.volume=1;
  d.rate=1;
  d.pitch=1;
  d.text=f;
  d.lang="en-EN";
  speechSynthesis.speak(d)
}
speak("Hello my master!");

const ERRORS_CONFIG = {
  userName: {
    message: 'Please add user name'
  },
  userPassword: {
    message: 'Please type a password'
  },
  userEmail: {
    message: 'Please add valid email'
  },
  userAgree: {
    message: 'Please check terms & condition'
  },
}
function showError(errorType) {
  const errorText = ERRORS_CONFIG[errorType].message;
  // console.log(ERRORS_CONFIG)
  // console.log(ERRORS_CONFIG[errorType])
  // console.log(errorText);
  const errorWrapper = document.querySelector('.error');
  errorWrapper.textContent = errorText;
  errorWrapper.classList.add('active');
}

function submitForm() {
  console.time();
  document.querySelector('.error').classList.remove('active');
  let isError = false;
  const inputCollection = document.querySelectorAll('.form input');  
  for (let i = 0; i < inputCollection.length; i++) {
    let valueKey = '';
    inputCollection[i].type === 'checkbox' ? valueKey = 'checked' : valueKey = 'value';
    console.log(inputCollection[i][valueKey]);
    if(!inputCollection[i][valueKey]) {
      showError(inputCollection[i].name);
      isError = true;
      break;
    }
  }
  !isError && console.log('We do it!');
  console.timeEnd();
  // document.querySelector('.error').classList.remove('active');
  // const userName = document.querySelector('#userName').value;
  // const userPassword = document.querySelector('#userPassword').value;
  // const userEmail = document.querySelector('#userEmail').value;
  // const userAgree = document.querySelector('#agree').checked;

  // if(!userName) {
  //   showError('userName');
  //   return false;
  // }

  // if(!userPassword) {
  //   showError('userPassword')
  //   return false;
  // }

  // if(!userEmail || !userEmail.includes('@')) {
  //   showError('userEmail');
  //   return false;
  // }

  // if(!userAgree) {
  //   showError('userAgree');
  //   return false;
  // }
  // console.log('We do it!');
}