"use strict";

var allProducts = [{
  name: "banana",
  uniqId: 74638,
  price: 8,
  quantity: 200,
  discount: 0.03,
  isDiscount: true
}, {
  name: "cucumber",
  uniqId: 2334,
  price: 4,
  quantity: 100,
  discount: 0,
  isDiscount: false
}, {
  name: "pear",
  uniqId: 234,
  price: 18,
  quantity: 1,
  discount: 0.5,
  isDiscount: true
}, {
  name: "apple",
  uniqId: 3322,
  price: 18,
  quantity: 2,
  discount: 0.1,
  isDiscount: true
}, {
  name: "potato",
  uniqId: 333,
  price: 2,
  quantity: 2000,
  discount: 0,
  isDiscount: false
}, {
  name: "coconut",
  uniqId: 3498,
  price: 80,
  quantity: 10,
  discount: 0.1,
  isDiscount: true
}];
var userCart = [];

function addToCard(id, quantity) {
  var newProd = allProducts.find(function (el) {
    return el.uniqId === id;
  });

  if (!newProd) {
    console.log("det finns inte");
    return false;
  }

  if (newProd.quantity < quantity) {
    console.log("Du kan inte k\xF6pa det");
    return false;
  }

  userCart.push(newProd);
  setQuantity(newProd.quantity - quantity, id);
}

function setQuantity(quantity, id) {
  var newProd = allProducts.findIndex(function (el) {
    return el.uniqId === id;
  });
  allProducts[newProd].quantity = quantity;
}

addToCard(333, 10);
addToCard(3498, 2);
addToCard(234, 3);

function deleteProduct(id) {
  var deletedProduct = userCart.findIndex(function (el) {
    return el.id === id;
  });
  userCart.splice(deletedProduct, 1);
} //


function showCartProducts() {
  var result = userCart.map(function (el) {
    console.log(el);
    return {
      name: el.name,
      price: el.price
    };
  });
  console.log(result);
}

showCartProducts();

function showTotalCard() {
  console.log(userCart);
}

var fraction = {
  nominator: 2,
  denominator: 3,
  showValue: function showValue() {
    console.log("Value is ".concat(this.nominator, "/").concat(this.denominator));
  },
  findGCD: function findGCD(a, b) {
    if (a == 0) {
      return b;
    }

    return this.findGCD(b % a, a);
  },
  findLocalNominator: function findLocalNominator(n, d) {
    return n * d;
  },
  add: function add(n, d) {
    var localDenominator = 1;

    if (this.denominator === d) {
      localDenominator = this.denominator;
    } else {
      localDenominator = this.denominator * d;
      this.nominator = this.nominator * (localDenominator / this.denominator);
      this.denominator = localDenominator;
      n = n * (localDenominator / d);
      d = localDenominator;
      var addingResultNominator = this.nominator + n;
      var gcd = this.findGCD(addingResultNominator, d);
      console.log("result is ".concat(addingResultNominator / gcd, "/").concat(d / gcd));
    }
  }
};