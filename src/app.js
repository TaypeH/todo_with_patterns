globalThis.DOM = {
    todoList: null,
    addBtn: null,
    todoInput: null,
};

const DOM = globalThis.DOM;

document.addEventListener("DOMContentLoaded", () => {
    DOM.todoList = document.getElementById("todo-list");
    DOM.addBtn = document.getElementById("add-btn");
    DOM.todoInput = document.getElementById("todo-input");

    DOM.addBtn.addEventListener("click", (e) => {
        //TODO
    });

    DOM.todoList.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-btn")) {
            //TODO
        }
    });
});
