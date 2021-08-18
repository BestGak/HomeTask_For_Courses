'use strict';

console.log('test');


$('.single-item').slick({
  dots: false,
  infinite: true,
  arrows: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  nextArrow: '<button type="button" class="slick-next"><img src="./img/arrow-left.png" alt=""></button>',
  prevArrow: '<button type="button" class="slick-prev"><img src="./img/arrow-right.png" alt=""></button>',
});