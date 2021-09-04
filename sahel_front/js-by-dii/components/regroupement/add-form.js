import { AddFormSelectHtml } from "../../configs/html-element.js";
import { Post } from "../../configs/requette.js";
import GestionErr from "../../configs/gestion-err.js";

export default class AddRegroupement extends HTMLElement {

    constructor() { super() }

    static _create = () => {
        const tabs = [
            { titre: 'Nom Groupement', type: 'text' },
            { titre: 'Nom President', type: 'text' },
            { titre: 'Telephone President', type: 'tel' },
            { titre: 'Nom Sécrétaire Général', type: 'text' },
            { titre: 'Téléphone Sécrétaire Général', type: 'tel' },
            { titre: 'Nom Tresorier', type: 'text' },
            { titre: 'Telephone Tresorier', type: 'text' },
        ];


        return AddFormSelectHtml('village', 'Formulaire Ajout Regroupement', tabs, this.addRegroupementEvents);

    }

    static addRegroupementEvents = e => {

        e.preventDefault();

        const villageId = e.target.getElementsByTagName('select')[0].value;

        const nomGroupement = e.target.getElementsByTagName('input')[0].value;

        const nomPresident = e.target.getElementsByTagName('input')[1].value;

        const telephonePresident = e.target.getElementsByTagName('input')[2].value;

        const nomSG = e.target.getElementsByTagName('input')[3].value;

        const telephoneSG = e.target.getElementsByTagName('input')[4].value;

        const nomTresorier = e.target.getElementsByTagName('input')[5].value;

        const telephoneTresorier = e.target.getElementsByTagName('input')[6].value;

        const body = { villageId, nomGroupement, nomPresident, telephonePresident, nomSG, telephoneSG, nomTresorier, telephoneTresorier };

        Post('groupement' , body).then(data => {
           
            if(data.statusCode === 200 ) {
                GestionErr.affiche_err(e.target , data.message , 'success');
            }else {
                GestionErr.affiche_err(e.target , data.message , 'danger');
            }
            
        })

    }

};
