import { CommandExecutor } from "./webapp/command.js";
import { Command, Commands } from "./webapp/command.js";
import { TodoList } from "./webapp/classes.js";
import { LocalStorage } from "./webapp/storage.js";
import { renderList } from "./webapp/render.js";

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
    TodoList.getInstance().addObserver(renderList);
});

document.addEventListener("DOMContentLoaded", () => {
    LocalStorage.load();
});

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key === "p") {
        event.preventDefault();

        const cmd = new Command(Commands.ADD);

        CommandExecutor.execute(cmd);
    }
    if (event.ctrlKey && event.key === "z") {
        event.preventDefault();

        const cmd = new Command(Commands.UNDO);

        CommandExecutor.execute(cmd);
    }
});
