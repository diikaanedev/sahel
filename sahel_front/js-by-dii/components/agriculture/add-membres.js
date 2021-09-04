import { AddFormHtml } from "../../configs/html-element.js";
import { Post } from "../../configs/requette.js";
import GestionErr from "../../configs/gestion-err.js";

export default class AddMembreAgriculture extends HTMLElement {
    
    constructor() {
        super();
    }

    static _create = () => {
        const tabs = [
            {titre : 'Matricule Membre'},
            {titre : 'Matricule Agriculture'},
        ];

        return AddFormHtml('Ajouter Membre Agriculteur' , tabs , this.addMembreAgricultureEvents);
    }

    static addMembreAgricultureEvents = e => {
        
        e.preventDefault();

        const body = {
            matriculeMembre : e.target.getElementsByTagName('input')[0].value ,
            matriculeAgriculture : e.target.getElementsByTagName('input')[1].value ,
        }

        Post('agriculture/member-create' , body).then((result) => {

            if(result.statusCode===200) {
                GestionErr.affiche_err(e.target , result.message , 'success');
            }else {
                GestionErr.affiche_err(e.target , result.message , 'danger');
            }

        }).catch((err) => {
            alert('error');
        });

    }

};
