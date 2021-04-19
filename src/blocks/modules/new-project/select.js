const newItemAuthor = document.querySelectorAll(".new-item__author");

if(newItemAuthor) {
    const newItemMembers = document.querySelector(".new-item__members");
    newItemMembers.addEventListener("change", (e) => {
        const specialists = document.querySelector('[value="members"]');
        const btnClear = document.querySelector(".btn-clear");
        const createItemsAuthors = () => {
            return ` <div class="new-item__authors">
                <button class="btn-reset author new-item__author" type="button" data-name="Коробкова Анна" data-src="img/stage-1.png"><img class="author__image" src="img/stage-1.png" alt="Коробкова Анна"><span class="author__name">Коробкова Анна</span></button>
                <button class="btn-reset author new-item__author" type="button" data-name="Коробкова Анна" data-src="img/stage-2.png"><img class="author__image" src="img/stage-2.png" alt="Коробкова Анна"><span class="author__name">Коробкова Анна</span></button>
                <button class="btn-reset author new-item__author" type="button" data-name="Коробкова Анна" data-src="img/stage-3.png"><img class="author__image" src="img/stage-3.png" alt="Коробкова Анна"><span class="author__name">Коробкова Анна</span></button>
                <button class="btn-reset author new-item__author" type="button" data-name="Екатегрина Николаевна" data-src="img/stage-4.png"><img class="author__image" src="img/stage-4.png" alt="Екатегрина Николаевна"><span class="author__name">Екатегрина Николаевна</span></button>
                <button class="btn-reset author new-item__author" type="button" data-name="Коробкова Анна" data-src="img/stage-5.png"><img class="author__image" src="img/stage-5.png" alt="Коробкова Анна"><span class="author__name">Коробкова Анна</span></button>
            </div>
            `
        }
        const createImgAuthor = (src, name) => {
            return `
                <img class="author__image author__image--small" src="${src}" alt="${name}">
            `
        }
        if(specialists) {
            btnClear.insertAdjacentHTML('beforebegin', createItemsAuthors());
            const newItemAuthors = document.querySelector(".new-item__authors");
            const newItemAuthor = document.querySelectorAll(".new-item__author");
            newItemAuthor.forEach(el => {
                el.addEventListener("click", (e) => {
                    el.classList.toggle("new-item__author--active")
                    let dataSrc = el.dataset.src;
                    let dataName = el.dataset.name;
                    if(el.classList.contains("new-item__author--active")) {
                        let choicesItem = newItemMembers.querySelector(".choices__item--selectable");
                        choicesItem.innerHTML += createImgAuthor(dataSrc, dataName)
                    } else {
                        let choicesItem = newItemMembers.querySelector(".choices__item--selectable");
                        choicesItem.querySelector(`[src="${dataSrc}"]`).remove()
                    }
                })
            });
        } else {
            const newItemAuthors = document.querySelector(".new-item__authors");
            const newItemAuthor = document.querySelectorAll(".new-item__author");
            if(newItemAuthors) {
                newItemAuthors.remove();
            }
            newItemAuthor.forEach(el => el.classList.remove("new-item__author--active"));
        }
        btnClear.addEventListener("click", (e) => {
            const newItemAuthors = document.querySelector(".new-item__authors");
            const newItemAuthor = document.querySelectorAll(".new-item__author");
            let choicesItem = newItemMembers.querySelector(".choices__item--selectable");
            let images = choicesItem.querySelectorAll("img");
            images.forEach(el => el.remove());
            newItemAuthor.forEach(el => el.classList.remove("new-item__author--active"));
        })
    });
}