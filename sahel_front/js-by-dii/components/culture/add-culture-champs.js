import { AddFormHtml, AddFormSelectHtml } from "../../configs/html-element.js";
import { Post } from "../../configs/requette.js";

export default class AddCultureChamps extends HTMLElement {

    constructor() {
        super();
    }

    static _create = () => {
        const tabs = [
            { titre: 'Numero Champs' },
            { titre: 'Surface Cultive' },
        ];

        return AddFormSelectHtml('culture', 'Ajouter Culutre Champs', tabs, this.AddCultureChampsEvents);
    }

    static AddCultureChampsEvents = e => {

        e.preventDefault();

        const cultureId = e.target.getElementsByTagName('select')[0].value;

        const matriculeAgriculre = e.target.getElementsByTagName('input')[0].value;

        const surface = e.target.getElementsByTagName('input')[1].value;

        const body = { cultureId, matriculeAgriculre, surface };

        Post('culture/create-culture-champs' , body).then((result) => {
            console.log(result);
            
        }).catch((err) => {
            console.log(err);
            
        });

    }

};
