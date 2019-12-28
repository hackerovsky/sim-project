import $ from 'jquery';
import Swiper from 'swiper';

// head-slider
var headSwiper = new Swiper('#head-slider', {
    spaceBetween: 100,
    pagination: {
        el: '#head-slider-progress',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '#head-slider-btn-next',
        prevEl: '#head-slider-btn-prev',
    },
    breakpoints: {
      320: {
        spaceBetween: 60
      }
    }
});

// hits-slider
var hitsSwiper = new Swiper('#hits-slider', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 25,
    pagination: {
        el: '#hits-slider-progress',
        type: 'progressbar',
    },
    navigation: {
      nextEl: '#hits-slider-btn-next',
      prevEl: '#hits-slider-btn-prev',
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
      },
      1023: {
        slidesPerView: 2,
      }
    }
});

// hits-slider
var feedbackSwiper = new Swiper('#feedback-slider', {
    slidesPerView: 1,
    centeredSlides: true,
    // loop: true,
    // slidesPerGroup: 1,
    spaceBetween: 100,
    pagination: {
        el: '#feedback-progress',
        type: 'progressbar',
    },
    navigation: {
      nextEl: '#feedback-btn-next',
      prevEl: '#feedback-btn-prev',
    },
});

var productThumbSwiper = new Swiper('#product-thumbs', {
  slidesPerView: 3,
  slidesPerGroup: 1,
  // loop: true,
  freeMode: true,
  spaceBetween: 10,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  slideActiveClass: 'is-active',
  slideToClickedSlide: true,
  // pagination: {
  //     el: '#product-progress',
  //     type: 'progressbar',
  // },
});

// product-slider
var productSwiper = new Swiper('#product-slider', {
    slidesPerView: 1,
    // loop: true,
  // slidesPerGroup: 1,
    spaceBetween: 20,
    // pagination: {
    //     el: '#product-progress',
    //     type: 'progressbar',
    // },
    navigation: {
      nextEl: '#product-btn-next',
      prevEl: '#product-btn-prev',
    },
    thumbs: {
      swiper: productThumbSwiper
    }
});

// if ($('#product-slider').length > 0) {
//   productSwiper.controller.control = productThumbSwiper;
//   productThumbSwiper.controller.control = productSwiper;
// } 
