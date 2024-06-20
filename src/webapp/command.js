import { TodoList } from "./classes.js";

class Command {
    name;
    args;
    constructor(name, args) {
        this.name = name;
        this.args = args;
    }
}

const Commands = {
    ADD: "add",
    DELETE: "delete",
}

const CommandExecutor = {
    execute(command) {
        const todoList = TodoList.getInstance();
        switch (command.name) {
            case Commands.ADD:
                const todoInput = globalThis.DOM.todoInput;
                const todoText = todoInput.value.trim();
                const itemInList = todoList.find(new TodoItem(todoText));

                if (todoText && !itemInList) {
                    todoInput.value = "";
                    todoList.add(new TodoItem(todoText));
                }
                break;
            case Commands.DELETE:
                
                break;
            default:
                throw new Error("Command not found");
        }
    }
}
