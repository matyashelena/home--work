const API_KEY = '8adb89b7';
// http://www.omdbapi.com/?i=tt3896198&apikey=8adb89b7
const BASE_URL = `http://img.omdbapi.com/?apikey=${API_KEY}`;

// Робимо запит для користувача з даним ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // обробка успішного запиту
    console.log(response);
  })
  .catch(function (error) {
    // обробка помилки
    console.log(error);
  })
  .finally(function () {
    // виконується завжди
  });
