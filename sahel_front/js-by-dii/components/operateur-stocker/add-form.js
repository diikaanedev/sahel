import { AddFormSelectSexeHtml } from '../../configs/html-element.js';
import { Post } from '../../configs/requette.js';
import GestionErr from '../../configs/gestion-err.js';
export default class AddOperateurStocker extends HTMLElement {
    constructor() {
        super()
    }

    static _create = () => {
        const tabs = [
            { titre: 'Matricule' },
            { titre: 'Nom' },
            { titre: 'Prenom' },
            { titre: 'Carte Identite Nationnalite', type: 'number' },
            { titre: 'Email ', type: 'text' },
            { titre: 'Téléphone', type: 'text' },
        ]

        return AddFormSelectSexeHtml('Ajouter Opérateur Stocker', tabs, this.addOperateurStockerEvents);
    }

    static addOperateurStockerEvents = e => {

        e.preventDefault();

        const sexe  = e.target.getElementsByTagName('select')[0].value;

        const matricule = e.target.getElementsByTagName('input')[0].value;

        const nom = e.target.getElementsByTagName('input')[1].value;

        const prenom = e.target.getElementsByTagName('input')[2].value;

        const cin = e.target.getElementsByTagName('input')[3].value;

        const email = e.target.getElementsByTagName('input')[4].value;

        const telephone = e.target.getElementsByTagName('input')[5].value;


        const body = { matricule, nom, prenom, cin, email, telephone , sexe }

        Post('operateur-stocker' , body).then((result) => {

            GestionErr.affiche_err(e.target , result.message , 'success');
            
        }).catch((err) => {
            GestionErr.affiche_err(e.target , result.message , 'success');
            
        });

    }
};
