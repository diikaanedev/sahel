export default class MessageForm extends HTMLElement {
    constructor() {
        super();
    }

    static _create_eer_form = (coposant, message , style) => {
        const div = document.createElement('div');
        div.setAttribute('class', `alert alert-${style} mt-5`);
        div.innerHTML = `${message}`;
        return coposant.insertBefore(div, coposant.firstChild);
    }

    static _remove_err_form = (composant) => {
        composant.removeChild(composant.firstChild);
        return composant ;
    }

}