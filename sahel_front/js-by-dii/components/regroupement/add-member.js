import { AddFormHtml } from "../../configs/html-element.js";
import { Post } from "../../configs/requette.js";

export default class AddMemberRegroupement extends HTMLElement {

    constructor() { super() }

    static _create = () => {
        const tabs = [
            { titre: 'Matricule Regroupement' },
            { titre: 'Matricule Membre' },
        ];

        return AddFormHtml('Ajouter Membre à Regroupement', tabs, this.addMembreRegroupementEvent)
    }

    static addMembreRegroupementEvent = e => {
        e.preventDefault();
        const matriculeMember = e.target.getElementsByTagName('input')[1].value;
        const matriculeRegroupement = e.target.getElementsByTagName('input')[0].value;
        const body = { matriculeMember, matriculeRegroupement }

        Post('groupement/add-membre', body).then(data => console.log(data))
    }

};
