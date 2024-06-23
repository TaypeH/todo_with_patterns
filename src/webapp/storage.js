import { TodoList, TodoItem } from './classes.js';

const todoList = TodoList.getInstance();

export const LocalStorage = {
    load() {
        const itemsJSON = localStorage.getItem("todos");

        if (!localStorage.getItem("todos")) return;

        const items = JSON.parse(itemsJSON);
        // todoList.replaceList(items);
        items.forEach(item => todoList.add(new TodoItem(item.text)));
    },
    save() {
        const items = [...todoList.items];
        const itemsJSON = JSON.stringify(items);
        localStorage.setItem("todos", itemsJSON);
    }
}

todoList.addObserver(LocalStorage.save);
