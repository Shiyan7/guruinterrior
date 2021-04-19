const accordionTops = document.querySelectorAll(".accordion__top");

accordionTops.forEach(function (btn) {
  let accordionBtn = btn.querySelector(".accordion__btn");
  btn.addEventListener("click", function (e) {
    accordionBtn.classList.toggle("accordion__btn--active");
    accordionBottom = e.currentTarget.parentElement.querySelector(".accordion__bottom");
    accordionBottom.classList.toggle("show");
  });
});