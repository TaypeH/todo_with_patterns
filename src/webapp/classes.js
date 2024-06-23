import { observerMixin } from "./mixins.js";

export class TodoItem {
    constructor(text) {
        this.text = text;
    }
    equals(other) { // Value Object pattern
        return this.text == other.text;
    }
}

export class TodoList { // canditate for Singleton
    // Data
    #data = new Set();

    constructor() {
        if (TodoList.instance) {
            throw new Error("Singleton class, use getInstance method");
        }
        TodoList.instance = this;
    }

    get items() { return this.#data; }

    // Singleton
    static instance = null;
    static {
        this.instance = new TodoList();
    }
    static getInstance() { return this.instance; }

    // List behavior
    add(item) {
        const todoExists = [...this.#data].some(t => t.equals(item));

        if (!todoExists) {
            this.#data.add(item);
            this.notify();
        }
    }
    delete(item) {
        const todoToDelete = [...this.#data].find(t => t.equals(item));
        this.#data.delete(todoToDelete);
        this.notify();
    }
    find(item) {
        return [...this.#data].find(todo => todo.equals(item));
    }
    replaceList(list) {
        this.#data = list;
        this.notify();
    }
}

// Applying the observer mixin to the class
Object.assign(TodoList.prototype, observerMixin);
