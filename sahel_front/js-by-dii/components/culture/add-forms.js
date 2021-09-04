import { AddFormHtml } from "../../configs/html-element.js";
import { Post } from "../../configs/requette.js";
import GestionErr from "../../configs/gestion-err.js";

export default class AddCulture extends HTMLElement {

    constructor() {
        super();
    }

    static _create = () => {

        const tabs = [
            { titre: 'Nom Culture ' }
        ]

        return AddFormHtml('Ajouter Culture', tabs, this.addCultureEvents);

    }

    static addCultureEvents = e => {
        e.preventDefault();

        const nom = e.target.getElementsByTagName('input')[0].value;

        const body = { nom };

        Post('culture', body).then(result => {

            if (result.statusCode === 200) {
                GestionErr.affiche_err(e.target, result.message, 'success')
            } else {
                GestionErr.affiche_err(e.target, result.message, 'danger')
            }
        });

    }

};
