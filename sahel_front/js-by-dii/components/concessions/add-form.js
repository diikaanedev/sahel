import { AddFormSelectHtml } from "../../configs/html-element.js";
import { Post } from "../../configs/requette.js";
import GestionErr from "../../configs/gestion-err.js";

export default class AddConcession extends HTMLElement {

    constructor() { super() }

    static _create = () => {
        const tabs = [
            { titre: 'Code Concession', type: 'text' },
            { titre: 'Nom Propriétaire', type: 'text' },
            { titre: 'Prénom Propriétaire', type: 'text' },
            { titre: 'Nom Concession', type: 'text' },
            { titre: 'Nombre Case', type: 'number' },
            { titre: 'Nombre Chambre', type: 'number' },
            { titre: 'Aprovis en Eau', type: 'text' },
            { titre: 'Source Energie', type: 'text' },
        ];

        return AddFormSelectHtml('village', 'Formulaire Ajout Concession', tabs, this.AddConcessionEvents);
    }

    static AddConcessionEvents = e => {
        e.preventDefault();

        const villageId = e.target.getElementsByTagName('select')[0].value;

        const matriculeConcession = e.target.getElementsByTagName('input')[0].value;
        const nomProprietaire = e.target.getElementsByTagName('input')[1].value;
        const prenomProprietaire = e.target.getElementsByTagName('input')[2].value;
        const nomConcession = e.target.getElementsByTagName('input')[3].value;
        const nbreCase = e.target.getElementsByTagName('input')[4].value;
        const nbreChambre = e.target.getElementsByTagName('input')[5].value;
        const approvisEau = e.target.getElementsByTagName('input')[6].value;
        const sourceEnergie = e.target.getElementsByTagName('input')[7].value;


        const body = {
            villageId, 
            matriculeConcession,
            nomProprietaire,
            prenomProprietaire,
            nomConcession,
            nbreCase,
            nbreChambre,
            approvisEau,
            sourceEnergie

        };

        console.log(body);


        Post('concession', body).then(data => {
            console.log(data);

            if (data.statusCode === 200) {
                GestionErr.affiche_err(e.target, data.message, 'success');
            } else {
                GestionErr.affiche_err(e.target, data.message, 'danger');
            }
        })
    }

};
