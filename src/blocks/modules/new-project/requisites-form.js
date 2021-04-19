const addRequisites = document.querySelector(".add-requisites");

const createContractTemplateForm = () => {
    return `
        <div class="requisites-form">
            <input class="new-item__input requisites-form__name" type="text" name="name-project2" placeholder="Название проекта для указания в договоре">
                <div class="requisites-form__column">
                    <span class="requisites-form__column-desc">Дизайнер (вы)</span>
                    <select class="select requisites-form__input" name="person">
                        <option value="physical"> Физ. лицо</option>
                        <option value="legal">Юр. лицо</option>
                    </select>
                    <input class="new-item__input requisites-form__input" type="text" name="full name" placeholder="ФИО">
                    <input class="new-item__input requisites-form__input" type="text" name="Full name in genitive" placeholder="ФИО в родительном падеже">
                    <input class="new-item__input requisites-form__input" type="text" name="inn" placeholder="ИНН">
                    <textarea class="new-item__input requisites-form__input requisites-form__textarea" type="text" name="place of residence" placeholder="Адрес прописки"></textarea>
                    <input class="new-item__input requisites-form__input" type="text" name="passport, series number" placeholder="Паспорт, серия номер">
                    <input class="new-item__input requisites-form__input" type="tel" name="phone" placeholder="Телефон">
                    <input class="new-item__input requisites-form__input" type="email" name="Email" placeholder="Email">
                </div>
                <div class="requisites-form__column">
                    <span class="requisites-form__column-desc">Заказчик</span>
                    <select class="select requisites-form__input" name="person">
                        <option value="physical"> Физ. лицо</option>
                        <option value="legal">Юр. лицо</option>
                    </select>
                    <input class="new-item__input requisites-form__input" type="text" name="full name" placeholder="ФИО">
                    <input class="new-item__input requisites-form__input" type="text" name="Full name in genitive" placeholder="ФИО в родительном падеже">
                    <input class="new-item__input requisites-form__input" type="text" name="inn" placeholder="ИНН">
                    <textarea class="new-item__input requisites-form__input requisites-form__textarea" type="text" name="place of residence" placeholder="Адрес прописки"></textarea>
                    <input class="new-item__input requisites-form__input" type="text" name="passport, series number" placeholder="Паспорт, серия номер">
                    <input class="new-item__input requisites-form__input" type="tel" name="phone" placeholder="Телефон">
                    <input class="new-item__input requisites-form__input" type="email" name="Email" placeholder="Email">
                </div>
            <p class="requisites-form__desc new-item__desc">Данный вариант договора опубликован, как готовый к применению пример. <br><br> Коллеги, обратите внимание, что мы не берем на себя ответственность за те или иные аспекты документов и предоставляем их «как есть» (без гарантий или обязательств с нашей стороны).</p>
        </div>
    
    `
}

if(addRequisites) {
    let flag = 0;
    addRequisites.addEventListener("click", (e) => {
        let newItem = e.currentTarget.closest(".new-item");
        let newItemContent = newItem.querySelector(".new-item__content");
        if(flag == 0) {
            e.currentTarget.innerHTML = "Пропустить";
            newItem.classList.add("is-active");
            newItemContent.insertAdjacentHTML("beforeend", createContractTemplateForm());
            flag++;
        } else {
            let requisitesForm = document.querySelector(".requisites-form")
            e.currentTarget.innerHTML = "Добавить";
            newItem.classList.remove("is-active");
            requisitesForm.remove();
            flag--;
        }
    });
}