"use strict";

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
var getPageContent = function getPageContent(url) {
  var res;
  return regeneratorRuntime.async(function getPageContent$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("../html/".concat(url, ".html")));

        case 2:
          res = _context.sent;
          return _context.abrupt("return", res);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

getPageContent('404').then(function (res) {
  return res.text();
}).then(function (res) {
  document.getElementById('page_content').innerHTML = res;
});
var navItems = document.querySelectorAll('.nav_item a');

function linkClick(event) {
  event.preventDefault();
  getPageContent(event.target.getAttribute('href').substring(1));
}

navItems.forEach(function (link) {
  link.addEventListener('click', linkClick);
});