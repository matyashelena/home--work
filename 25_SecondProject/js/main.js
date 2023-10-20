$(document).ready(function () {
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
    verticalSwiping: true,
  });

  $('.news_cards').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // $('#lightgallery').lightGallery({
  //   plugins: [lgZoom, lgThumbnail],
  // });
  let section = document.querySelector('.section_id');
  let sectionPadding = window.getComputedStyle(section);
  let paddingScroll = parseFloat(sectionPadding.paddingTop);

  let scrollToSection = function (event) {
    event.preventDefault();
    var el = $(this);
    var dest = el.attr('href'); // отримуємо напрямок
    if (dest !== undefined && dest !== '') { // перевіряємо наявність
      $('html').animate({
          scrollTop: $(dest).offset().top-paddingScroll+30 // scrool до необхідного елеиенту +30=top для елемента before
        }, 1000 // швидкість прокрутки
      );
    }
    return false;
  };

  $('.header_menu-link').on("click", scrollToSection);

  $('.scroll_down').on("click", scrollToSection);

  $('.scrool_map').on("click", scrollToSection);

  let header = document.querySelector('.header');
  let headerStyle = window.getComputedStyle(header);
  let headerHeight = parseFloat(headerStyle.height);

  let element = document.getElementById('hero').getBoundingClientRect();
  let height = element.height-headerHeight;

  
  
  // зміна bg header при скролінгу сторінки
  $(window).scroll(function () {
    if ($(this).scrollTop() > height) {
      $('.header').addClass("active");
    } else {
      $('.header').removeClass("active");
    }
  });

  // ініциалізація карти після кліку на секцію з картою
  $('.map').on('click', function initMap() {

    $('.contacts').css('position', 'static');

    const map = L.map('my-map').setView([50.00317690860705, 36.226601536338116], 15);

    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
    }).addTo(map);


    let customIcon = L.icon({
      iconUrl: './img/marker.svg',
      iconSize: [106, 106], // size of the icon

    });
    L.marker([50.00181420905747, 36.23288158444743], {
        icon: customIcon
      }).addTo(map)
      .bindPopup('My Lovely Location')
      .openPopup();

    $('.map').off('click');
  });

  lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom, lgThumbnail],
    thumbnail: true,
    // licenseKey: 'your_license_key',
    speed: 500,
    animateThumb: false,
    allowMediaOverlap: true,
    toggleThumb: true,
    // ... other settings
  });

});

// Валідація форми
const NAME_MIN_LENGTH = 3;
const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

function testEmailRegex(value) {
  return emailRegex.test(value);
}
// перевірка на довжину імені
function checkNameLenght() {
  const valueLength = window.inputName.value.length;
  const diff = valueLength < NAME_MIN_LENGTH ? NAME_MIN_LENGTH - valueLength : 0;
  if(diff) {
    window.nameDiffCount.textContent = diff;
    window.nameLenghtHelp.classList.remove('d-none');
  } else {
    window.nameLenghtHelp.classList.add('d-none');
  }
};

// очищення підказки після відпраки даних
function resetValidation() {
  window.namelHelp.classList.add('d-none');
  window.emailHelp.classList.add('d-none');
  window.emailLenghtHelp.classList.add('d-none');
}

// текст з підказками для заповнення полей форми
function validateForm(event) {
  event.preventDefault();
  resetValidation();
  
  const name = window.inputName.value;
  const email = window.inputEmail.value;
  console.log(name);
  console.log(email);

  if(!name) {
    window.namelHelp.classList.remove('d-none');
    return false;
  }
  if(!email) {
    window.emailHelp.classList.remove('d-none');
    return false;
  }
  if(!testEmailRegex(email)) {
    window.emailHelp.classList.remove('d-none');
    window.emailLenghtHelp.classList.remove('d-none');
  }
};


window.inputName.addEventListener('input', checkNameLenght);
window.loginForm.addEventListener('submit', validateForm);
document.addEventListener("DOMContentLoaded", checkNameLenght);

// відправка даних в чат-бот telegram
async function formSubmit(event) {
    event.preventDefault();
    const email = window.inputEmail.value;
    const userName = window.inputName.value;

    if(!email || !userName) {
      return false;
    }

    let apiToken = "6412142701:AAFqsqMVnxL0I3awtWVuK4_1i8gHEF-7zl0";
    let chatId = "-1001923473956";
    let text = `
    <b>Email: </b> ${email}
    <b>userName: </b> ${userName}
    `;

    let urlString = `https://api.telegram.org/bot${apiToken}/sendMessage`;

    const response = await fetch(urlString, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML'
      })
    });
    const resp = await response.json();
    console.log(resp);
   
}
console.log();

window.loginForm.addEventListener('submit', formSubmit);