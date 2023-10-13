// function getPageContent(pageName) {
//   fetch(`../html/${pageName}.html`).then((resp) => {
//     if(resp.status === 200) {
//       return resp.text();
//     } else {
//       console.log('Error with code:' + resp.status);
//       if(resp.status === 404) {
//         getPageContent('404');
//       }
//     }
//   }).then((res) => {
//     document.getElementById('page_content').innerHTML = res;
//   })
// }

function getPageContent(pageName) {
  // Робимо запит для користувача з даним ID
  axios.get(`../html/${pageName}.html`)
    .then(function (response) {
      // обробка успішного запиту
      console.log(response);
      document.getElementById('page_content').innerHTML = response.data;
    })
    .catch(function (error) {
      // обробка помилки
      console.log(error);
    })
    .finally(function () {
      // виконується завжди
    });
}


// async function getPageContent(url) {
//   const res = await fetch(`../html/${url}.html`);
//   return res.text();
// };

// getPageContent('404').then(res => res.text())
// .then(res => {
//   document.getElementById('page_content').innerHTML = res;
// })

const navItems = document.querySelectorAll('.nav_item a');

function navAction(event) {
  event.preventDefault();
  getPageContent(event.target.getAttribute('href').substring(1))
  // .then(res => {
  //   document.getElementById('page_content').innerHTML = res;
  // }).catch(err => {
  //   console.log(err);
  // });
}

navItems.forEach(link => {
  link.addEventListener('click', navAction);
})

