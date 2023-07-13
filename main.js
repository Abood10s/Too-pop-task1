const menu = document.querySelector(".menu");
const close = document.getElementById("close");
const actions = document.querySelector(".actions");
const links = document.querySelector(".links");
const showAcc = document.querySelectorAll(".showAcc");
const navs = document.querySelectorAll(".link");
const contentAcc = document.querySelectorAll(".content");
const navButtons = document.querySelectorAll(".nav-button");
let clicked = false;

navButtons.forEach((navButton) => {
  navButton.addEventListener("click", () => {
    clicked = !clicked;
    if (clicked) {
      document.documentElement.style.backgroundColor = "#112233db";
      document.documentElement.style.color = "#fff";
    } else {
      document.documentElement.style.backgroundColor = "";
      document.documentElement.style.color = "#000";
    }
    console.log(clicked);
  });
});
//Navbar Menu
menu.addEventListener("click", function () {
  links.classList.toggle("slide");
});

// Accordions
showAcc.forEach(function (acc, index) {
  acc.addEventListener("click", function () {
    contentAcc[index].classList.toggle("show");
    const icon = acc.querySelector("i");
    icon.classList.toggle("fa-minus");
    icon.classList.toggle("fa-plus");
    icon.classList.replace("fa-solid", "fa-regular");
    icon.classList.replace("fa-regular", "fa-solid");
  });
});
// Swipers
const swiper = new Swiper(".swiperr", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  speed: 500,
  visibilityFullFit: true,
  autoResize: false,
  spaceBetween: 100,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

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
