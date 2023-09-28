// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

const shoppingList = [{
    productName: "banana",
    quantity: 100,
    added: true,
    price: 44,
    amount: 4400
  },
  {
    productName: "cucumber",
    quantity: 50,
    added: false,
    price: 39,
    amount: 1950
  },
  {
    productName: "tomato",
    quantity: 20,
    added: true,
    price: 50,
    amount: 1000
  },
  {
    productName: "pepper",
    quantity: 25,
    added: false,
    price: 30,
    amount: 750
  },
  {
    productName: "peach",
    quantity: 10,
    added: true,
    price: 85,
    amount: 850
  },
  {
    productName: "watermelon",
    quantity: 3,
    added: false,
    price: 20,
    amount: 60
  },
  {
    productName: "candy",
    quantity: 5,
    added: false,
    price: 200,
    amount: 1000
  }
]

// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// 1 варіант
function sortByAdded() {
  const sortArray = shoppingList.slice()
  sortArray.sort((a, b) => {
    return  a.added - b.added   
  })
  console.log(sortArray);
}
sortByAdded();

// 2 варіант
function showSortByAdded() {
  const sortArray = shoppingList.slice();
  sortArray.sort((a, b) => {
    return  a.added - b.added;  
  });
  const result = sortArray.map((el) => {
    return { name: el.productName, added: el.added };
  });
  console.log(result);
}
showSortByAdded();

// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
function addProduct(productName) {
  const addProd = shoppingList.findIndex((el) => el.productName === productName);
  if(shoppingList[addProd].added === true) {
    console.log(`Ви вже придбали ${productName}`);
  } else {
    shoppingList[addProd].added = true;  
  } 
  console.log(shoppingList);
}
addProduct('candy');
addProduct('peach');

// // 1. Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
// // 2. Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

const newArray = shoppingList.slice(0); //початковий масив, з якого будемо видаляти продукти

function deleteProduct(name) {
  const deletedProduct = newArray.findIndex(el => el.productName === name);
  newArray.splice(deletedProduct, 1);
  console.log(newArray);
}
deleteProduct("candy");
console.log(newArray);
// функція для подальшого видалення продуктів з масива, з якого вже почали видаляти продукти
function deleteProductElse(name) {
  const deletedProduct = newArray.findIndex(el => el.productName === name);
  newArray.splice(deletedProduct, 1);
  console.log(newArray);
}
deleteProductElse("watermelon");
deleteProductElse("pepper");

function addToCard(name, num) {
  const addProduct = shoppingList.find((el) => el.productName === name);
  addProduct.quantity = addProduct.quantity + num;
  addProduct.amount = addProduct.amount + addProduct.price * num;
}
addToCard("candy", 10);
addToCard("candy", 2);
console.log(shoppingList);


// 1. Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
// 2. Підрахунок суми всіх (не) придбаних продуктів.
// 3. Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)

// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
function totalAmount() {
  let arrAmount = shoppingList.map(el => el.amount);
  let result = arrAmount.reduce((acc, value) => acc + value);
  console.log(result);
}
totalAmount();

// Підрахунок суми всіх (не) придбаних продуктів.
function totalAmountBuy(name) {
  const arrName = shoppingList.filter(el => el.added == name);
  let arrAmount = arrName.map(el => el.amount);
  let result = arrAmount.reduce(((acc, value) => acc + value), 0);
  return result;
}
console.log(totalAmountBuy(true));
console.log(totalAmountBuy(false));

// Показання продуктів в залежності від суми, (від меншого до більшого)
function sortByPriceDown() {
  const sortArray = shoppingList.slice()
  sortArray.sort((a, b) => {
    return  a.price - b.price;
  })
  console.log(sortArray);
}
sortByPriceDown();

// Показання продуктів в залежності від суми, (від більшого до меншого)
function sortByPriceUp() {
  const sortArray = shoppingList.slice()
  sortArray.sort((a, b) => {
    return  b.price - a.price;
  })
  console.log(sortArray);
}
sortByPriceUp();
