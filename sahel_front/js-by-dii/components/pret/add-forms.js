import { AddFormHtml } from '../../configs/html-element.js';
import { Post, Get } from '../../configs/requette.js';
export default class AddPret extends HTMLElement {

    constructor() { super() }

    static _create = () => {
        const tabs = [
            { titre: 'Matricule Membre' },
            { titre: 'Matricule Structure Financiere' },
            { titre: 'Object Pret' },
            { titre: 'Montant Solicite', type: 'number' },
            { titre: 'Apport Personnel', type: 'number' },
            { titre: 'Montant Percu', type: 'number' },
            { titre: 'Nombre de Mensualite', type: 'number' },
            { titre: 'Montant Remboursement Mensuel', type: 'number' },

        ];

        return AddFormHtml('Ajouter Pret à un Membre', tabs, this.addPretEvents)
    }

    static addPretEvents = e => {

        e.preventDefault();

        const matricule_membre = e.target.getElementsByTagName('input')[0].value;
        const matricule_structure_financiere = e.target.getElementsByTagName('input')[1].value;
        const object_pret = e.target.getElementsByTagName('input')[2].value;
        const montant_solicite = parseInt(e.target.getElementsByTagName('input')[3].value);
        const apport_personnel = parseInt(e.target.getElementsByTagName('input')[4].value);
        const montant_percu = parseInt(e.target.getElementsByTagName('input')[5].value);
        const nbre_mensualite = parseInt(e.target.getElementsByTagName('input')[6].value);
        const montant_par_mois = parseInt(e.target.getElementsByTagName('input')[7].value);

        const body = {
            matricule_membre, matricule_structure_financiere,
            object_pret, montant_solicite, montant_percu , 
            montant_par_mois , 
            nbre_mensualite , 
            apport_personnel
        }
        

        Post('pret', body).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
    }

};