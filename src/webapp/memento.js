import { TodoList } from "./classes.js";

export const TodoHistory = {
    history: [],
    push(state) {
        if (state) {
            this.history.push(new Set([...state])); // TODO
        }
    },
    pop() {
        if (this.history.length > 1) {
            // this.history.pop();
            // const lastState = this.history[this.history.length - 1];
            // todoList.replaceList(lastState);

            this.history.pop(); // remove current state

            const previousState = this.history.pop();
            
            return previousState;
        }
    }
}

const todoList = TodoList.getInstance();
todoList.addObserver(() => TodoHistory.push(todoList.items));
