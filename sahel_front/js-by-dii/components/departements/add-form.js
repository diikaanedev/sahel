import { AddFormSelectHtml } from "../../configs/html-element.js";
import { Post } from "../../configs/requette.js";
import GestionErr from "../../configs/gestion-err.js";

export default class AddDepartement extends HTMLElement {

    constructor() { super() }

    static _create = () => {
        const tabs = [{titre : 'Code Département' , type:'text'},{titre : 'Nom Département' , type:'text'}];

        return AddFormSelectHtml('region','Formulaire Ajout Département' , tabs , this.addDepartementEvents);
    }

    static addDepartementEvents = e => {
        e.preventDefault();

        const regionId = e.target.getElementsByTagName('select')[0].value;

        const code = e.target.getElementsByTagName('input')[0].value;

        const nomDepartement = e.target.getElementsByTagName('input')[1].value;

        const body = {regionId , nomDepartement , code};

        console.log(body);

        Post('departement' , body).then(data => {
            console.log(data);
            
            if(data.statusCode ===200) {
                GestionErr.affiche_err(e.target , data.message , 'success');
            }else {
                GestionErr.affiche_err(e.target , data.message , 'danger');
            }
        })

    }

};
