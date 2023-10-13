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

const getPageContent = async (url) => {
  const res = await fetch(`../html/${url}.html`);
  return res;
};

getPageContent('404').then(res => res.text())
.then(res => {
  document.getElementById('page_content').innerHTML = res;
})

const navItems = document.querySelectorAll('.nav_item a');

function linkClick(event) {
  event.preventDefault();
  getPageContent(event.target.getAttribute('href').substring(1));
}

navItems.forEach(link => {
  link.addEventListener('click', linkClick);
})

