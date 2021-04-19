const tabsBtn = document.querySelectorAll(".tabs__btn");

tabsBtn.forEach(el => {
    el.addEventListener("click", () => {

        const tabsPath = el.getAttribute("data-tabs-path");


        el.closest(".tabs-box").querySelector('.tabs__btn--active').classList.remove('tabs__btn--active')
        
        el.closest(".tabs-box").querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn--active');


        let tabsContent = el.closest(".tabs-box").querySelectorAll(".tabs__content");

        const switchContent = (path, element) => {
            tabsContent.forEach(el => {el.classList.remove('tabs__content--active')});
            element.closest(".tabs-box").querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
        };


        switchContent(tabsPath, el);
    });
});