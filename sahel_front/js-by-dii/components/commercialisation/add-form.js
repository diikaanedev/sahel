import { AddFormSelectMarcheHtml } from "../../configs/html-element.js";
import { Post } from "../../configs/requette.js";
import GestionErr from "../../configs/gestion-err.js";
export default class AddCommercialisation extends HTMLElement {

    constructor() { super() }

    static _create = () => {
        const tabs = [
            { titre: 'Code Récolte' },
            { titre: 'Matricule Operateur Stocker', type: 'text' },
            { titre: 'Masse en (kg)', type: 'number' },
            { titre: 'Prix en (kg)', type: 'number' },
            { titre: 'Date Payement ', type: 'date' },
            { titre: 'Numero Quitance ', type: 'number' },
        ]

        return AddFormSelectMarcheHtml('Ajouter Commercialisation', tabs, this.addCommercialistaionEvents)
    }

    static addCommercialistaionEvents = e => {
        e.preventDefault();

        const body = {
            curcuit: e.target.getElementsByTagName('select')[0].value,
            code_recolte: e.target.getElementsByTagName('input')[0].value,
            matricule_operateur: e.target.getElementsByTagName('input')[1].value,
            masse_produit: e.target.getElementsByTagName('input')[2].value,
            prix: e.target.getElementsByTagName('input')[3].value,
            date_payement: e.target.getElementsByTagName('input')[4].value,
            numero_quitance: e.target.getElementsByTagName('input')[5].value
        }

        Post('commercialisation', body).then((result) => {
            console.log(result);

        }).catch((err) => {
            console.log(err);

        });

    }


};
