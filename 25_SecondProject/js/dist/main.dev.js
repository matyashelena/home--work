"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
  var _$$slick;

  $('.hero_slider-vertical').slick({
    infinite: true,
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
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 480,
    settings: {
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]), _$$slick));
  var section = document.querySelector('.section_id');
  var sectionPadding = window.getComputedStyle(section);
  var paddingScroll = parseFloat(sectionPadding.paddingTop);

  var scrollToSection = function scrollToSection(event) {
    event.preventDefault();
    var el = $(this);
    var dest = el.attr('href'); // отримуємо напрямок

    if (dest !== undefined && dest !== '') {
      // перевіряємо наявність
      $('html').animate({
        scrollTop: $(dest).offset().top - paddingScroll + 30 // scrool до необхідного елементу +30=top для елемента before

      }, 1000 // швидкість прокрутки
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
  var element = document.getElementById('hero').getBoundingClientRect();
  var height = element.height - headerHeight; // зміна bg header при скролінгу сторінки

  $(window).scroll(function () {
    if ($(this).scrollTop() > height) {
      $('.header').addClass("active");
    } else {
      $('.header').removeClass("active");
    } // function toggleMenu(event) {
    //   document.querySelector('.hamburger').classList.toggle('is-active');
    //   document.querySelector('.header_menu-list').classList.toggle('is-open');
    //   document.querySelector('body').classList.toggle('lock');
    // }
    // $('.hamburger').on( "click", function() {
    //   $( this ).toggleClass('is-active');
    //   $('.header_menu-list').toggleClass('is-open');
    //   $('.body').toggleClass('lock');
    // });
    // $('.hamburger').on( "click", function() {
    //   $('header_menu-list').toggleClass('is-open');
    // });
    //  $( ".header_menu-list" ).toggleClass( 'is-open', addOrRemove );

  }); // ініциалізація карти після кліку на секцію з картою

  $('.map').on('click', function initMap() {
    $('.contacts').css('position', 'static');
    $('.map').css('background-image', 'none');
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
  });
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

var NAME_MIN_LENGTH = 3;
var emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

function testEmailRegex(value) {
  return emailRegex.test(value);
} // перевірка на довжину імені


function checkNameLenght() {
  var valueLength = window.inputName.value.length;
  var diff = valueLength < NAME_MIN_LENGTH ? NAME_MIN_LENGTH - valueLength : 0;

  if (diff) {
    window.nameDiffCount.textContent = diff;
    window.nameLenghtHelp.classList.remove('d-none');
  } else {
    window.nameLenghtHelp.classList.add('d-none');
  }
}

; // очищення підказки після відпраки даних

function resetValidation() {
  window.namelHelp.classList.add('d-none');
  window.emailHelp.classList.add('d-none');
  window.emailLenghtHelp.classList.add('d-none');
} // текст з підказками для заповнення полей форми


function validateForm(event) {
  event.preventDefault();
  resetValidation();
  var name = window.inputName.value;
  var email = window.inputEmail.value;

  if (!name) {
    window.namelHelp.classList.remove('d-none');
    return false;
  }

  if (!email) {
    window.emailHelp.classList.remove('d-none');
    return false;
  }

  if (!testEmailRegex(email)) {
    window.emailHelp.classList.remove('d-none');
    window.emailLenghtHelp.classList.remove('d-none');
  }
}

;
window.inputName.addEventListener('input', checkNameLenght);
window.loginForm.addEventListener('submit', validateForm);
document.addEventListener("DOMContentLoaded", checkNameLenght); // відправка даних в чат-бот telegram

function formSubmit(event) {
  var email, userName, apiToken, chatId, text, urlString, response, resp;
  return regeneratorRuntime.async(function formSubmit$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          event.preventDefault();
          document.querySelector('button.button_link').setAttribute('disabled', '');
          email = window.inputEmail.value;
          userName = window.inputName.value;

          if (!(!email || !userName)) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", false);

        case 6:
          apiToken = "6412142701:AAFqsqMVnxL0I3awtWVuK4_1i8gHEF-7zl0";
          chatId = "-1001923473956";
          text = "\n    <b>Email: </b> ".concat(email, "\n    <b>userName: </b> ").concat(userName, "\n    ");
          urlString = "https://api.telegram.org/bot".concat(apiToken, "/sendMessage");
          _context.next = 12;
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

        case 12:
          response = _context.sent;
          _context.next = 15;
          return regeneratorRuntime.awrap(response.json());

        case 15:
          resp = _context.sent;

          if (response.ok) {
            document.querySelector('button.button_link').removeAttribute('disabled');
            alert('Thank you for your request. We will contact you within 24 hours');
          }

        case 17:
        case "end":
          return _context.stop();
      }
    }
  });
}

window.loginForm.addEventListener('submit', formSubmit);

function toggleMenu(event) {
  document.querySelector('.hamburger').classList.toggle('is-active');
  document.querySelector('.header_menu-list').classList.toggle('is-open');
  document.querySelector('body').classList.toggle('lock');
}