import Choices from 'choices.js';

const createProjectData = (event) => {
    const newProjectDataLeft = event.target.closest(".new-project__data-left");

    function createProjectBlock () {
        return `
            <div class="new-project__data-block">
                <select class="select">
                    <option value="">Нет помещения</option>
                    <option value="bathroom">Ванная</option>
                    <option value="brick">Детская</option>
                    <option value="children">Кабинет</option>
                    <option value="brick">Коридор</option>
                    <option value="corridor">Лоджия</option>
                    <option value="kitchen">Кухня</option>
                    <option value="bedroom">Спальня</option>
                    <option value="canteen">Столовая</option>
                    <option value="wardrobe">Гардероб</option>
                    <option value="another">Другое...</option>
                </select>
                <button class="btn-reset btn-remove remove-data" type="button"></button>
                <input class="new-item__input new-project__data-input" type="text" name="area" placeholder="Площадь, м²">
            </div>
        `
    }
    newProjectDataLeft.insertAdjacentHTML("beforeend", createProjectBlock());
}
const initializeSelect = (select) => {
    const choices = new Choices(select, {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
    });
}

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("create-data")) {
        createProjectData(e);
    }
    if(e.target.classList.contains("remove-data")) {
        e.target.closest(".new-project__data-block").remove();
    }
    const selects = document.querySelectorAll('.select');
    selects.forEach(el => {
        if(el.classList.contains("select") && !el.classList.contains("choices__input")) {
            initializeSelect(el);
        }
    })
});