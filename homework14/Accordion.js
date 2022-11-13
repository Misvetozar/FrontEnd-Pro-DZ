const itemClass = 'accorion-item';

class Accordion{
    static SELECTORS = {
        ITEM: '.accordion-item',
        TITLE: '.accordion-title',
        BODY: '.accordion-body',
    };
    static CLASSES = {
       CONTAINER: 'Super-Accordion-container',
       ITEM: 'Super-Accordion-item',
       TITLE: 'Super-Accordion-title',
       BODY: 'Super-Accordion-body',
       ACTIVE: 'Super-Accordion-active',
    }

    #el = null;

    constructor(el){
        this.#el = el;

        this.#bindClasses();
        this.#bindEventListeners();
    }

    #bindClasses() {
        this.#el.classList.add(Accordion.CLASSES.CONTAINER);

        const items = this.#el.querySelectorAll(Accordion.SELECTORS.ITEM);

        items.forEach((item) => {
            item.classList.add(Accordion.CLASSES.ITEM);
            item.querySelector(Accordion.SELECTORS.TITLE).classList.add(Accordion.CLASSES.TITLE);

            item.querySelector(Accordion.SELECTORS.BODY).classList.add(Accordion.CLASSES.BODY);
        });
    }
    
    #bindEventListeners(){
        this.#el.addEventListener('click', (e) => {
            if (e.target.classList.contains(Accordion.CLASSES.TITLE)){
                const index = this.#findTitleIndex(e.target);
                this.toggle(index);
            }
        });
    }

    #findTitleIndex(titleEl){

        const titles = this.#el.querySelectorAll('.' +Accordion.CLASSES.TITLE);

        for(let i=0; i< titles.length; i++){
            if (titles[i] === titleEl) {
                return i;
            }
        }

        return null;
    }

    toggle(index) {
        const items = this.#el.querySelectorAll('.' +Accordion.CLASSES.ITEM);

        items[index].classList.toggle(Accordion.CLASSES.ACTIVE);
    }
}
