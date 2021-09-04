import { AddFormSelectHtml } from "../../configs/html-element.js";
import { Post } from "../../configs/requette.js";
import GestionErr from "../../configs/gestion-err.js";

export default class AddRegion extends HTMLElement {

    constructor() { super() }

    static _create = () => {
        const tabs = [{titre : 'Code Région' , type:'text'},{titre : 'Nom Région' , type:'text'}];

        return AddFormSelectHtml('contry','Formulaire Ajout Région' , tabs , this.addRegionEvents);
    }

    static addRegionEvents = e => {
        e.preventDefault();

        const contryId = e.target.getElementsByTagName('select')[0].value;

        const code = e.target.getElementsByTagName('input')[0].value;

        const nomRegion = e.target.getElementsByTagName('input')[1].value;

        const body = {contryId , nomRegion , code};

        console.log(body);
        

        Post('region' , body).then(data => {
            console.log(data);
            
            if(data.statusCode === 200 ) {
                GestionErr.affiche_err(e.target , data.message , 'success');
            }else {
                GestionErr.affiche_err(e.target , data.message , 'danger');
            }
        })

    }

};
