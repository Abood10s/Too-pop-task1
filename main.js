const plusIcon = document.getElementById("plus");
const content = document.getElementById("content");

plusIcon.addEventListener("click", function () {
  content.style.height = content.style.height === "0px" ? "auto" : "0px";
  plusIcon.innerHTML =
    content.style.height === "0px"
      ? `<i class="fa-regular fa-plus"></i>`
      : `<i class="fa-solid fa-minus"></i>`;
});
