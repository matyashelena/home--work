"use strict";

$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    // dots: true,
    autoplay: true,
    // speed: 3000,
    autoplaySpeed: 2000
  });
  $('.product_list').slick({
    adaptiveHeight: true,
    // appendArrows:$('.container'),
    // dots: true,
    // centerMode: true,
    // variableWidth: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true // dots: true

      }
    }, {
      breakpoint: 768,
      settings: {
        // arrows:false,
        // dots: true,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 568,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }]
  });
  $('.partners_list').slick({
    // dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 9,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 9,
        slidesToScroll: 3,
        infinite: true // dots: true

      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 420,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    } // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
  $('.slick-next.slick-arrow').append('<svg class="arrow-svg"><use xlink:href="./assets/sprite.svg#arrow-next" /></svg>');
  $('.slick-prev.slick-arrow').append('<svg class="arrow-svg"><use xlink:href="./assets/sprite.svg#arrow-prev" /></svg>'); // $('<svg class="icon_social youtube-icon"><use xlink:href="./assets/sprite.svg#arrow-next" /></svg>')
});