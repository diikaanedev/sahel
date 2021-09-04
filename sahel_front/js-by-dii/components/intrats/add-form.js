import { AddFormHtml } from '../../configs/html-element.js';
import { Post } from '../../configs/requette.js';
import GestionErr from '../../configs/gestion-err.js';
export default class AddIntrat extends HTMLElement {

    constructor() { super() } 

    static _create = () => {
        const tabs = [
            {titre : 'Code Intrat '},
            {titre : 'Designation Intrat '},
        ];

        return AddFormHtml('Formulaire Ajout Intrat' , tabs , this.addIntratEvents );
    }

    static addIntratEvents = e => {
        e.preventDefault();

        const body = {
            code : e.target.getElementsByTagName('input')[0].value,
            designation : e.target.getElementsByTagName('input')[1].value
        }

        Post('intrat' , body).then((result) => {
            
            if (result.statusCode===200) {
                GestionErr.affiche_err(e.target , result.message , 'success');
            } else {
                GestionErr.affiche_err(e.target , result.message , 'danger');
            }
            
        }).catch((err) => {
            GestionErr.affiche_err(e.target , 'Erreur ' , 'danger');
        });
    }

};
