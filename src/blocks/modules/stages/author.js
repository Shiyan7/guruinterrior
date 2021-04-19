const authorSearchLeft = document.querySelector(".author-search__left");
const overlay = document.querySelector(".overlay");

if (authorSearchLeft) {
    authorSearchLeft.addEventListener("click", (e) => {
        e.currentTarget.parentElement.classList.add("author-search--active");
        overlay.classList.add("overlay--show")
    });
    overlay.addEventListener("click", (e) => {
        overlay.classList.remove("overlay--show")
        authorSearchLeft.parentElement.classList.remove("author-search--active");
    });
}