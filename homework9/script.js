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

    divEl.classList.add('task-item');
    divEl.textContent = todo.title;

    divEl.addEventListener('click', () => {
        divEl.classList.toggle('done');
    } )
    return divEl;
}

function resetForm() {
    taskNameInput.value = '';
}