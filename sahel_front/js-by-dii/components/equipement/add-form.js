import { AddFormHtml } from '../../configs/html-element.js';
import { Post } from '../../configs/requette.js';
import GestionErr from '../../configs/gestion-err.js';
export default class AddEquipement extends HTMLElement {

    constructor() { super() }

    static _create = () => {
        const tabs = [
            { titre: 'Code Equipement ' },
            { titre: 'Designation Equipement ' },
        ];

        return AddFormHtml('Formulaire Ajout Equipement', tabs, this.addEquipementEvents);
    }

    static addEquipementEvents = e => {
        e.preventDefault();

        const body = {
            code: e.target.getElementsByTagName('input')[0].value,
            nomMateriel: e.target.getElementsByTagName('input')[1].value,

        }

        Post('equipement', body).then((result) => {

            if (result.statusCode === 200) {
                GestionErr.affiche_err(e.target, result.message, 'success');
            } else {
                GestionErr.affiche_err(e.target, result.message, 'danger');
            }

        }).catch((err) => {
            GestionErr.affiche_err(e.target, 'Erreur ', 'danger');
        });
    }

};
