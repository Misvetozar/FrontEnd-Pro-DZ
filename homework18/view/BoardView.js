class BoardView{
    #config = null;
    $el = null;

   static SELECTORS = {
        DELETE: '.delete-note',
        NOTE: '.note',
        TEXTAREA: '.edit-note-control',
    }

    static template = `
    <div id="field" class="field row u-full-height"></div>
            `;

    static noteTemplate = ` <div class="note" data-note-index="{{id}}">
    <span class="delete-note">x</span>
    <textarea class="edit-note-control" name="description">{{description}}</textarea>
</div>`;

    static getNoteHtml(note) {
        return interpolate(BoardView.noteTemplate, note);
    }

    static getElementId($el){
       return '' + $el.closest(BoardView.SELECTORS.NOTE).data('noteIndex');
    }

    constructor(config){
        this.#config = config;

        this.#initView();
    }

    #initView() {
        this.$el = $(BoardView.template);

        this.$el.on('click', BoardView.SELECTORS.DELETE, (e) => {
            const id = BoardView.getElementId($(e.target));

            this.delete(id);
        });

        this.$el.on('change', BoardView.SELECTORS.TEXTAREA, (e) => {
            const id = BoardView.getElementId($(e.target));
            this.changeDescription(id, e.target.value);
        });
    
    }

    renderList(list){
        this.$el.html(list.map(BoardView.getNoteHtml).join('')
        );
    }

    delete(id){
        this.#config.onDelete(id);
    }

    changeDescription(id, newValue){
        this.#config.onUpdate(id, {description: newValue});
    }
}