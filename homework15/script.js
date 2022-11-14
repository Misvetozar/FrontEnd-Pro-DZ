const API_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=10';
const TASK_ITEM_CLASS = 'task-item';
const TASK_ITEM_SELECTOR = '.' + TASK_ITEM_CLASS;
const DELETE_BTN_CLASS = 'delete-btn';
const TASK_DONE_CLASS = 'done';

const taskListEl = document.querySelector('#taskList');
const taskNameInput = document.querySelector('#taskNameInput');
const newTaskForm = document.querySelector('#newTaskForm');
const errorContainerEl = document.querySelector('#errorContainer');

const todoITemTemplate = document.querySelector('#todoItemTemplate').innerHTML;

newTaskForm.addEventListener('submit', onNewTaskFormSubmit);
taskListEl.addEventListener('click', onTaskListElClick);

let todoList = [];

init();


function init() {
    fetchTodoList();
}

function onNewTaskFormSubmit(e) {
    e.preventDefault();

    const newTask = getFormValues();

    addTodo(newTask);
    resetForm();
}

function onTaskListElClick(e) {
    const todoId = getTodoId(e.target);

    if (e.target.classList.contains(DELETE_BTN_CLASS)){
            deleteTodo(todoId);
    }
    if (e.target.classList.contains(TASK_ITEM_CLASS)) {
        toggleTodo(todoId);
    }
}

function fetchTodoList() {
    fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
        todoList = data;
        renderList(todoList);
    });
}

function renderList(list) {
    taskListEl.innerHTML = list.map(generateTodoItemHtml).join('');
}

function generateTodoItemHtml({ id, title, isDone }) {
    return todoITemTemplate
        .replaceAll('{{title}}', title)
        .replaceAll('{{doneClass}}', isDone ? TASK_DONE_CLASS : '')
        .replaceAll('{{id}}', id);
}

function getFormValues() {
    return {
        title: taskNameInput.value,
    };
}

function resetForm() {
    taskNameInput.value = '';
}

function getTodoId(el) {
    const parent = el.closest(TASK_ITEM_SELECTOR);

    return parent ? +parent.dataset.todoId : null;
}

function addTodo(todo) {
    todo.id = Date.now();
    todo.isDone = false;

    todoList.push(todo);
    renderList(todoList);
}

function deleteTodo(id) {
    todoList = todoList.filter((item) => item.id !== id);
    renderList(todoList);
}

function toggleTodo(id) {
    const todo = todoList.find((item) => item.id === id);

    todo.isDone = !todo.isDone;

    renderList(todoList);
}
