import Choices from 'choices.js';

const selects = document.querySelectorAll('.select');

const createItemBottom = (event) => {
    const newItemBottom = event.target.closest(".new-item__content");
    function createBottomElem () {
        return `
            <div class="new-item__bottom">
            <div class="new-item__bottom-left">
            <select class="select">
                <option>Обмерный план</option>
                <option>Фото объекта</option>
                <option>Референсы</option>
                <option>Документы</option>
                <option>Другое</option>
            </select>
            <button class="btn-reset btn-remove remove-upload" type="button"></button>
            </div>
            <div class="input-file__container">
            <input class="input-file__input" id="input__file" name="file" type="file" multiple="">
            <label class="input-file__button" for="input__file">
                <svg class="svg-icon name-file__icon">
                <use xlink:href="./img/sprites/sprite.svg#upload"></use>
                </svg>Загрузить файл
            </label>
            </div>
            <div class="name-file"><a class="btn-reset name-file__close"></a>
            <span class="name-file__desc">Название файла</span><span class="name-file__type">PNG</span></div>
            </div>
        `
    }
    newItemBottom.insertAdjacentHTML("beforeend", createBottomElem());
}
const initializeSelect = (select) => {
    const choices = new Choices(select, {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
    });
}
if(selects) {
    selects.forEach(select => {
        initializeSelect(select);
    });
}
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("create-upload")) {
        createItemBottom(e);
    }
    if(e.target.classList.contains("remove-upload")) {
        e.target.closest(".new-item__bottom").remove();
    }
    const selects = document.querySelectorAll('.select');
    selects.forEach(el => {
        if(el.classList.contains("select") && !el.classList.contains("choices__input")) {
            initializeSelect(el);
        }
    })
});