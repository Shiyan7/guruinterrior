const moreBtnProjects = document.querySelector(".projects__more-btn");
const hiddenProjectsItems = document.querySelectorAll(".project-item--hidden");

if(moreBtnProjects) {
    hiddenProjectsItems.forEach(el => {
        let flag = 0;
        moreBtnProjects.addEventListener("click", (e) => {
            if(flag == 0) {
                e.currentTarget.innerHTML = "Скрыть";
                el.classList.remove("project-item--hidden")
                flag++;
            } else {
                el.classList.add("project-item--hidden")
                e.currentTarget.innerHTML = "Ещё 12 проектов";
                flag--;
            }
        });    
    });
}