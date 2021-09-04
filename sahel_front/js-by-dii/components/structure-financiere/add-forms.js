import {  AddFormHtml } from "../../configs/html-element.js";
import { Post } from "../../configs/requette.js";

export default class AddStructureFinanciere extends HTMLElement {

    constructor() { super() }

    static _create = () => {
        const tabs = [
            { titre: 'Matricule' },
            { titre: 'Nom' },
            { titre: 'Email ', type: 'text' },
            { titre: 'Téléphone', type: 'text' },
            { titre: 'Adresse' },
        ] ;

        return AddFormHtml('Ajouter Structure Financiere' , tabs , this.addStructureFinanciereEvents);
    }

    static addStructureFinanciereEvents = e => {
    
        e.preventDefault();


        const matricule = e.target.getElementsByTagName('input')[0].value;

        const nom = e.target.getElementsByTagName('input')[1].value;

        const email = e.target.getElementsByTagName('input')[2].value;

        const telephone = e.target.getElementsByTagName('input')[3].value;

        const adresse = e.target.getElementsByTagName('input')[4].value;


        const body = { matricule, nom, email, telephone , adresse }

    
        Post('structure-financiere' , body).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });

    }

};
