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
            this.el = htmlToElement(FormView.formTemplate);

            this.el.addEventListener('submit', (e) => {
                e.preventDefault();

               const data =  this.#getFormData();
               this.#resetFormData();

               this.#config.onSave(data);

                console.log('submited', data);
            });
        }

        #getFormData(){
            return {
                title: this.el.elements.title.value,
            };
        }
        #resetFormData(){
           this.el.elements.title.value = '';
            
        }
}

function htmlToElement(html){
   const container =  document.createElement('div');

    container.innerHTML = html;

    return container.children[0];
}