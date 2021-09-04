import { AddFormHtml } from "../../configs/html-element.js";

export default class AddForm extends HTMLElement {

    constructor() { super() }

    static _create = () => {

        const tabs = [
            { titre: 'Name Pays', type: 'text' },
        ];

        return AddFormHtml(' Formulaire Ajout de Pays' , tabs , null);


    }


};
