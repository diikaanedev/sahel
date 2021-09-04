import { AddFormHtml } from "../../configs/html-element.js";
import { Post } from "../../configs/requette.js";
import GestionErr from "../../configs/gestion-err.js";
export default class AddCharge extends HTMLElement {

    constructor() { super() }

    static _create = () => {
        const tabs = [
            { titre: 'Code' },
            { titre: 'Designation' },
        ];

        return AddFormHtml('Ajouter Charge à Un Champs', tabs, this.addChargeEvents);

    }

    static addChargeEvents = e => {

        e.preventDefault();


        const code = e.target.getElementsByTagName('input')[0].value;
        const designation = e.target.getElementsByTagName('input')[1].value;

        let body = {
            code,
            designation,
        }

        Post('charge', body).then((result) => {
            console.log(result);

        }).catch((err) => {
            console.log(err);

        });

    }





};
