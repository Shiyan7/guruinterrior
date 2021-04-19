const stageSave = document.querySelectorAll(".stage__item-save");

if(stageSave) {
    stageSave.forEach(el => {
        el.addEventListener("click", (e) => {
            e.currentTarget.classList.toggle("stage__item-save--active")
        });
    });
}