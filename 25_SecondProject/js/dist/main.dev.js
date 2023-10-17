"use strict";

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
    verticalSwiping: true
  });
  $('.news_cards').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
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
    ]
  });
});