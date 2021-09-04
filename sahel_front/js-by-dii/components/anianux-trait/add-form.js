import { AddFormSelectHtml } from '../../configs/html-element.js';
import { Post } from '../../configs/requette.js';
import GestionErr from '../../configs/gestion-err.js';
export default class AddAnimauxCharge extends HTMLElement {

    constructor() { super() }

    static _create = () => {
        const tabs = [
            { titre: ' Matricule Champs' },
            { titre: ' Nombre ', type: 'number' },
        ];

        return AddFormSelectHtml('espece', 'Formulaire Ajout Animaux Trait', tabs, this.addAnimauxChargeEvents);
    }
    static addAnimauxChargeEvents = e => {
        e.preventDefault();


        const idEspece = e.target.getElementsByTagName('select')[0].value;
        const matricule = e.target.getElementsByTagName('input')[0].value;
        const nombre = e.target.getElementsByTagName('input')[1].value;

        const body = { idEspece, matricule, nombre }

        Post('espece/animaux-trait' , body).then(_ => {
            console.log(_);
            
            GestionErr.affiche_err(e.target, _.message, 'success');
        }).catch((err) => {
            GestionErr.affiche_err(e.target, _.message, 'danger');
        });


    }

};
