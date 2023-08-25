export class Todo {
    constructor(title, description, dueDate, priority, id = null) {
        this.id = id || uniqueId();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export class TodoList {
    constructor(name, id = null) {
        this.name = name;
        this.id = id || uniqueId();
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }
}

function generateRandomId() {
    let id = '';
    const digits = '0123456789';

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * digits.length);
        id += digits[randomIndex];
    }

    return id;
}

export function uniqueId() {
    const usedIds = getUsedIds();

    if (usedIds.length >= 1000000) {
        throw new Error("All possible IDs have been used.");
    }

    let newId;
    do {
        newId = generateRandomId();
    } while (usedIds.includes(newId));

    usedIds.push(newId);
    saveUsedIds(usedIds);
    return newId;
}

export function getUsedIds() {
    const usedIdsJSON = localStorage.getItem('usedIds');
    return usedIdsJSON ? JSON.parse(usedIdsJSON) : [];
}

export function saveUsedIds(usedIds) {
    localStorage.setItem('usedIds', JSON.stringify(usedIds));
}

export function getTodoLists() {
    const todoListsJSON = localStorage.getItem('todoLists');
    return todoListsJSON ? JSON.parse(todoListsJSON) : [];
}

export function saveTodoLists(todoLists) {
    localStorage.setItem('todoLists', JSON.stringify(todoLists));
}

export function getTodoListById(id) {
    const todoLists = getTodoLists();
    return todoLists.find(todoList => todoList.id === id);
}

export function findTodoById(todoId) {
    const todoLists = getTodoLists();

    for (const todoList of todoLists) {
        const foundTodo = todoList.todos.find(todo => todo.id === todoId);
        if (foundTodo) {
            return foundTodo;
        }
    }

    return null;
}