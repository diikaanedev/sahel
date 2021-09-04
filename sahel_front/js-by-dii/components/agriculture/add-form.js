import { AddFormHtml } from "../../configs/html-element.js";
import { Post, Get } from "../../configs/requette.js";

export default class AddAgriculture extends HTMLElement {

    constructor() { super() }

    static _create = () => {

        const tabs = [
            { titre: 'Matricule Membres', type: 'text' },
            { titre: 'Numero Parcelles', type: 'number' },
            { titre: 'Longitude', type: 'text' },
            { titre: 'Lattitude', type: 'text' },
            { titre: 'Surface Total', type: 'text' },
        ];

         Get('agriculture').then(data => console.log(data))

        return AddFormHtml('Ajouter Agriculteur', tabs, this.addAgricultureEvents);

    }

    static addAgricultureEvents = e => {

        e.preventDefault();

        const matriculeMembre = e.target.getElementsByTagName('input')[0].value;

        const matricule = e.target.getElementsByTagName('input')[1].value;

        const longitude = e.target.getElementsByTagName('input')[2].value;

        const lattitude = e.target.getElementsByTagName('input')[3].value;

        const surface_total = e.target.getElementsByTagName('input')[4].value;

        const body = { matricule, matriculeMembre, longitude, lattitude, surface_total }

        console.log(body);
        

        Post('agriculture' , body).then(data => console.log(data)).catch(err => console.log(err))

    }


};
