"use strict";

// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
var shoppingList = [{
  productName: "banana",
  quantity: 100,
  added: true,
  price: 44,
  amount: 4400
}, {
  productName: "cucumber",
  quantity: 50,
  added: false,
  price: 39,
  amount: 1950
}, {
  productName: "tomato",
  quantity: 20,
  added: true,
  price: 50,
  amount: 1000
}, {
  productName: "pepper",
  quantity: 25,
  added: false,
  price: 30,
  amount: 750
}, {
  productName: "peach",
  quantity: 10,
  added: true,
  price: 85,
  amount: 850
}, {
  productName: "banana",
  quantity: 100,
  added: true,
  price: 44,
  amount: 4400
}, {
  productName: "candy",
  quantity: 5,
  added: false,
  price: 200,
  amount: 1000
}];

function sortShoppingList(name) {
  return function (a, b) {
    return a[name] > b[name] ? 1 : -1;
  };
}

function purchaseProduct(name) {} // shoppingList.map((el) => el.productName) {
//   shoppingList.added = true;
//   console.log(shoppingList);
// }


console.log(shoppingList.sort(sortShoppingList('added')));
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
  quantity: 0,
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
  setQuantity(newProd.quantity - quantity, id); // console.log(newProd);
}

addToCard(333, 10);

function setQuantity(quantity, id) {
  var newProd = allProducts.findIndex(function (el) {
    return el.uniqId === id;
  });
  allProducts[newProd].quantity = quantity;
}

addToCard(3498, 2);
addToCard(234, 3);

function deleteProduct(id) {
  var deletedProduct = userCart.findIndex(function (el) {
    return el.id === id;
  });
  userCart.splice(deletedProduct, 1);
} // deleteProduct(234);


function showCardProduct() {
  var result = userCart.map(function (el) {
    return {
      name: el.name,
      price: el.price
    };
  });
  console.log(result);
}

showCardProduct();