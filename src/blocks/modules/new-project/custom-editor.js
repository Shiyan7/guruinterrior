import Quill from "quill";

const quillElement = document.querySelector(".editor");
const newProjectBtn = document.querySelector(".new-project__btn");

if(quillElement) {
    const quill = new Quill(quillElement, {
        placeholder: 'Описание проекта',
        modules: {
          toolbar: '.toolbar'
        }
    });
    /* newProjectBtn.addEventListener("click", (e) => {
      const editorContent = quill.getText();
      localStorage.setItem("editorText", editorContent);
    }) */
}