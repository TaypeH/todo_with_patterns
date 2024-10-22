import { TodoList } from "./classes.js";

export const renderList = () => {
    DOM.todoList.innerHTML = "";

    const todoList = TodoList.getInstance();

    for (const todo of todoList.items) {
        const listItem = document.createElement("li");
        listItem.classList.add("todo-item");
        listItem.innerHTML = `${todo.text} <button class="delete-btn">Delete</button>`;
        listItem.dataset.text = todo.text;
        DOM.todoList.appendChild(listItem);
    }
}
