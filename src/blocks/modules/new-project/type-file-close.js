document.addEventListener("click", (e) => {
    if(e.target.classList.contains("name-file__close")) {
        e.target.parentElement.classList.add("name-file--hidden");
    }
});