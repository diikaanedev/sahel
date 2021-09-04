import { AddFormSelectHtml } from "../../configs/html-element.js"
import { Post } from "../../configs/requette.js";

export default class AddRecolte extends HTMLElement {

    constructor() { super() }

    static _create = () => {
        const tabs = [
            {
                titre: 'Matricule champs',
            }, 
            {
                titre: 'Code Récolte',
            }, 
            {
                titre: 'Surface Recolte', type: 'number',
            }, 
            {
                titre: 'Masse Recolte', type: 'number',
            }, 
            {
                titre: 'Date Récolte', type: 'date'
            }
        ]

        return AddFormSelectHtml('culture', 'Récolter Cahmps', tabs, this.addRecolteEvents);
    }

    static addRecolteEvents = e => {

        e.preventDefault();

        const body = {
            matricule: e.target.getElementsByTagName('input')[0].value,
            code_recolte : e.target.getElementsByTagName('input')[1].value ,
            surface_recolte: e.target.getElementsByTagName('input')[2].value,
            masse_recolte: e.target.getElementsByTagName('input')[3].value , 
            date_recolte: e.target.getElementsByTagName('input')[4].value , 
            cultureId: e.target.getElementsByTagName('select')[0].value,
        }

        Post('recolte-champs', body).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
    }

};
