import { AddFormHtml } from '../../configs/html-element.js';
import { Post } from '../../configs/requette.js';
import GestionErr from '../../configs/gestion-err.js';
export default class AddEspece extends HTMLElement {

    constructor() { super() }

    static _create = () => {

    

        const tabs = [
            {titre : 'Code Espece'},
            {titre : 'Nom Espece '}
        ];

        return AddFormHtml('Ajouter Espece Animale' , tabs , this.addEspceEvents  );

    }

    static addEspceEvents = e => {
        e.preventDefault();

        const body = {
            code :  e.target.getElementsByTagName('input')[0].value, 
            nomEspece :  e.target.getElementsByTagName('input')[1].value
        }

        Post('espece' , body).then((result) => {
            if(result.statusCode === 200) {
                GestionErr.affiche_err(e.target , result.message , 'success')
            }
        }).catch((err) => {
            GestionErr.affiche_err(e.target , 'erreur insertion' , 'danger')
        });

    }



};
