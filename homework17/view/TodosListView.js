class TodosListView {
    $el = null;
    #config = null;

    static CLASSES = {
        TASK_ITEM_CLASS: 'task-item',
        DELETE_BTN_CLASS: 'delete-btn',
        TASK_DONE_CLASS: 'done',
    };

    static todoListTemplate = `
        <div class="task-list u-full-width"></div>
    `

    static todoItemTemplate = `
            <div class="task-item {{doneClass}}" data-todo-id="{{id}}">
                {{title}}
                <span class="delete-btn">x</span>
            </div>
    `;

    static generateTodoItemHtml({ id, title, isDone }) {
        return TodosListView.todoItemTemplate
            .replaceAll('{{title}}', title)
            .replaceAll('{{doneClass}}', 
            isDone ? TodosListView.CLASSES.TASK_DONE_CLASS : '')
            .replaceAll('{{id}}', id);
    }

    static getTodoId(el) {
        const parent = el.closest('.' + TodosListView.CLASSES.TASK_ITEM_CLASS);
    
        return parent ? parent.dataset.todoId : null;
    }
    
    constructor(config) {
        this.#initView();

        this.#config = config;

        console.log(this.el);
    }
    
    #initView(){



            this.$el = $(TodosListView.todoListTemplate);


            this.$el.on('click', (e) => {
                const todoId = TodosListView.getTodoId(e.target);
                
                if (e.target.classList.contains(TodosListView.CLASSES.DELETE_BTN_CLASS)){
                    this.deleteTodo(todoId);
            }
               if (e.target.classList.contains(TodosListView.CLASSES.TASK_ITEM_CLASS)) {
                this.toggleTodo(todoId);
            }
            })
    }

    renderList(list){
        this.$el.html(list.map(TodosListView.generateTodoItemHtml).join(''));
    }

    deleteTodo(id){
        this.#config.onDelete(id);
        console.log('delete ', id);
    
    }

    toggleTodo(id) {
        this.#config.onToggle(id);
        console.log('toggle ', id);
    }
}

