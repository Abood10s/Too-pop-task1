const swiper2 = new Swiper(".swiperfirst", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  speed: 500,
  spaceBetween: 100,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 10,
    slideShadows: false,
  }, // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
