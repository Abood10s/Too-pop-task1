const menu = document.querySelector(".menu");
const close = document.getElementById("close");
const actions = document.querySelector(".actions");
const links = document.querySelector(".links");
const showAcc = document.querySelectorAll(".showAcc");
const contentAcc = document.querySelectorAll(".content");

menu.addEventListener("click", function () {
  links.classList.toggle("slide");
});

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
