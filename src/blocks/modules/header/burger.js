const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const body = document.body;

if (burger && nav) {
    
    const menuClose = () => {
        burger.classList.toggle("burger--close");
        nav.classList.toggle("nav--open");
        body.classList.toggle("lock");
        overlay.classList.toggle("overlay--show");
    };
    
    overlay.addEventListener("click", () => {
        if(nav.classList.contains("nav--open")) {
            menuClose();
        }
    });
    
    burger.addEventListener("click", menuClose);
}