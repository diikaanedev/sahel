import { AddFormSelectHtml } from "../../configs/html-element.js";
import { Post } from "../../configs/requette.js";
import GestionErr from "../../configs/gestion-err.js";

export default class AddVillage extends HTMLElement {

    constructor() { super() }

    static _create = () => {
        const tabs = [{titre : 'Code Village' , type :'text'} , {titre : 'Nom Village' , type:'text'}];

        return AddFormSelectHtml('commune' , 'Formulaire Ajout Village' , tabs , this.AddVillageEvents);
    }

    static AddVillageEvents = e => {
        e.preventDefault();

        const CommuneId = e.target.getElementsByTagName('select')[0].value;

        const code = e.target.getElementsByTagName('input')[0].value;

        const nomVillage = e.target.getElementsByTagName('input')[1].value;

        const body = { CommuneId, nomVillage, code };

        console.log(body);


        Post('village', body).then(data => {
            console.log(data);

            if (data.statusCode === 200) {
                GestionErr.affiche_err(e.target, data.message, 'success');
            } else {
                GestionErr.affiche_err(e.target, data.message, 'danger');
            }
        })
    }

};
