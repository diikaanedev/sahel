import { AddFormSelectHtml } from "../../configs/html-element.js";
import { Post } from "../../configs/requette.js";
import GestionErr from "../../configs/gestion-err.js";

export default class AddCommune extends HTMLElement {

    constructor() { super() }

    static _create = () => {
        const tabs = [{ titre: 'Code Commune', type: 'text' }, { titre: 'Nom Commune', type: 'text' }];

        return AddFormSelectHtml('departement', 'Formulaire Ajout Commune', tabs, this.addCommuneEvents);
    }

    static addCommuneEvents = e => {
        e.preventDefault();

        const departementId = e.target.getElementsByTagName('select')[0].value;

        const code = e.target.getElementsByTagName('input')[0].value;

        const nomCommune = e.target.getElementsByTagName('input')[1].value;

        const body = { departementId, nomCommune, code };

        console.log(body);


        Post('commune', body).then(data => {
            console.log(data);

            if (data.statusCode === 200) {
                GestionErr.affiche_err(e.target, data.message, 'success');
            } else {
                GestionErr.affiche_err(e.target, data.message, 'danger');
            }
        })



    }

};
