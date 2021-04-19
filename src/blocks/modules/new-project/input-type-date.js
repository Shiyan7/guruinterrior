import Imask from "imask";

const newItemDates = document.querySelectorAll(".new-item__date");

newItemDates.forEach(el => {
    var numberMask = IMask(el,{
        mask: Date,
    });
})