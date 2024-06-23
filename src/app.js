import { CommandExecutor } from "./webapp/command.js";
import { Command, Commands } from "./webapp/command.js";
import { TodoList } from "./webapp/classes.js";
import { LocalStorage } from "./webapp/storage.js";

globalThis.DOM = {
    todoList: null,
    addBtn: null,
    todoInput: null,
};

const DOM = globalThis.DOM;

function renderLst() {
    DOM.todoList.innerHTML = "";

    // const todoList = TodoList.getInstance();
    // const items = [...todoList.items];

    // DOM.todoList.innerHTML = items.map((item) => {
    //     return `<li>${item.text} <button class="delete-btn">Delete</button></li>`;
    // }).join("");

    const todoList = TodoList.getInstance();
    for (const todo of todoList.items) {
        const listItem = document.createElement("li");
        listItem.classList.add("todo-item");
        listItem.innerHTML = `${todo.text} <button class="delete-btn">Delete</button>`;
        listItem.dataset.text = todo.text;
        DOM.todoList.appendChild(listItem);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    DOM.todoList = document.getElementById("todo-list");
    DOM.addBtn = document.getElementById("add-btn");
    DOM.todoInput = document.getElementById("todo-input");

    DOM.addBtn.addEventListener("click", (e) => {
        const cmd = new Command(Commands.ADD);

        CommandExecutor.execute(cmd);
    });

    DOM.todoList.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-btn")) {
            const todo = e.target.parentNode.dataset.text;
            const cmd = new Command(Commands.DELETE, [todo]);

            CommandExecutor.execute(cmd);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");
    TodoList.getInstance().addObserver(renderLst);
});

document.addEventListener("DOMContentLoaded", () => {
    LocalStorage.load();
});

document.addEventListener("keydown", (event) => {
    if(event.ctrlKey && event.key === "p") {
        event.preventDefault();
        
        const cmd = new Command(Commands.ADD);

        CommandExecutor.execute(cmd);
    }
});
