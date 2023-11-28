import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'

  const swiper = new Swiper('.swiper', { // Задаются параметры для swiper
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'slider',
    slidesPerView: 1,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    speed: 2000,
  });