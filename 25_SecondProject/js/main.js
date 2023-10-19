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

  let scrollToSection = function (event) {
    event.preventDefault();
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if (dest !== undefined && dest !== '') { // проверяем существование
      $('html').animate({
          scrollTop: $(dest).offset().top-100 // прокручиваем страницу к требуемому элементу
        }, 1000 // скорость прокрутки
      );
    }
    return false;
  };

  $('.header_menu-link').on("click", scrollToSection);

  $('.scroll_down').on("click", scrollToSection);

  $('.scrool_map').on("click", scrollToSection);

  let element = document.getElementById('hero').getBoundingClientRect();
  let height = element.height - 80;
  
  // зміна bg на header при скролінгу сторінки
  $(window).scroll(function () {
    if ($(this).scrollTop() > height) {
      $('.header').addClass("active");
    } else {
      $('.header').removeClass("active");
    }
  });

  // ініциалізаціяф карти після кліку на секцію з картою
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

  // $('#lightgallery').lightGallery();
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