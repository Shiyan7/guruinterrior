const dropdownBtn = document.querySelectorAll(".dropdown__btn");
const overlay = document.querySelector(".overlay");

dropdownBtn.forEach(el => {
    el.addEventListener("click", () => {
        overlay.style.cssText = `opacity: 1; visibility: visible;`
        el.parentElement.querySelector(".dropdown").classList.add("is-open");
        if(el.classList.contains("user__btn")) {
            el.classList.add("user__btn--active")
        }
    });
    overlay.addEventListener("click", () => {
        overlay.style.cssText = ``
        el.parentElement.querySelector(".dropdown").classList.remove("is-open");
        if(el.classList.contains("user__btn")) {
            el.classList.remove("user__btn--active")
        }
    });
});