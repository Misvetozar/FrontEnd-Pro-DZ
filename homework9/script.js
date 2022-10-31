const TASK_ITEM_CLASS = 'task-item';
const TASK_DONE_CLASS = 'done';

const taskListEl = document.querySelector('#taskList');
const taskNameInput = document.querySelector('#taskNameInput');
const submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick(){
    const newTodo = getFormData();

    addTodo(newTodo);
    resetForm();
}

function getFormData(){
    return {
        title: taskNameInput.value,
    };
}

function addTodo(todo){
    const todoEl = generateTodoElement(todo);

    taskListEl.append(todoEl);

}

function generateTodoElement(todo){
    const divEl = document.createElement('div');

    divEl.classList.add(TASK_ITEM_CLASS);
    divEl.textContent = todo.title;

    divEl.addEventListener('click', () => toggleTodo(divEl));
     
    return divEl;
}

function resetForm() {
    taskNameInput.value = '';
}

function toggleTodo(todoEl) {
    todoEl.classList.toggle(TASK_DONE_CLASS);
}