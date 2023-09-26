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

function sortShoppingList(name) {
  return (a, b) => a[name] > b[name] ? 1 : -1;
}

function buyProduct(name) {
  shoppingList.forEach((el) => {
    el.productName === name ? el.added = true : shoppingList.added;
    console.log(el);
  });
}

shoppingList.sort(sortShoppingList('added'));
shoppingList.sort(sortShoppingList('price'));
buyProduct("watermelon");

// 1. Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
// 2. Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

const newArray = shoppingList.slice(0);

function deleteProduct(name) {
  const deletedProduct = newArray.findIndex(el => el.productName === name);
  newArray.splice(deletedProduct, 1);
}
deleteProduct("candy");
console.log(newArray);
deleteProduct("pepper");
console.log(newArray);
console.log(shoppingList);

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

function totalAmount() {
  let arrAmount = shoppingList.map(el => el.amount);
  let result = arrAmount.reduce((acc, value) => acc + value);
  console.log(result);
}
totalAmount();

function totalAmountBuy(name) {
  const arrName = shoppingList.filter(el => el.added == name);
  let arrAmount = arrName.map(el => el.amount);
  let result = arrAmount.reduce((acc, value) => acc + value);
  return result;

}
console.log(totalAmountBuy(true));
console.log(totalAmountBuy(false));