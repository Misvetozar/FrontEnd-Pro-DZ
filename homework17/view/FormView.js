class FormView {
    static formTemplate = `
        <form>
            <div class="flex">
                <div class="ten columns">
                    <input 
                    type="text"
                    name="title"
                    class="u-full-width"
                    />
                </div>
                <div class="submitter">
                    <input type="submit"  value="Add" />
                </div>
            </div>
        </form>
        `;


        #config = null;
        constructor(config){
            this.#config = config;
            this.#initView();
        }

        #initView(){
            this.$el = $(FormView.formTemplate);

            this.$el.on('submit', (e) => {
                e.preventDefault();

               const data =  this.#getFormData();
               this.#resetFormData();

               this.#config.onSave(data);

                console.log('submited', data);
            });
        }

        #getFormData(){
            return {
                title: this.$el[0].elements.title.value,
            };
        }
        #resetFormData(){
           this.el.elements.title.value = '';
            
        }
}