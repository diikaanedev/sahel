import { AddFormSelectSexeHtml } from "../../configs/html-element.js";
import { Post } from "../../configs/requette.js";
import GestionErr from "../../configs/gestion-err.js";
export default class AddMembres extends HTMLElement {

    constructor() { super() }

    static _create = () => {
        const tabs = [
            { titre: 'Matricule Membre', type: 'text' },
            { titre: 'Nom Membre', type: 'text' },
            { titre: 'Prenom Membre', type: 'text' },
            { titre: 'CNI', type: 'number' },
            { titre: 'Prenom Pere', type: 'text' },
            { titre: 'Nom Mere', type: 'text' },
            { titre: 'Prenom Mere', type: 'text' },
            { titre: 'Date de Naissance', type: 'date' },
            { titre: 'Lieux de Naissance', type: 'text' },
            { titre: 'Url Photo', type: 'file' },
            { titre: 'Niveau Étude', type: 'text' },
            { titre: 'Situation Matricule', type: 'text' },
            { titre: 'Nombre Épouse', type: 'number' },
            { titre: 'Nombre Personne Active en Charge', type: 'number' },
            { titre: 'Nombre Personne Inactive en Charge', type: 'number' },
            { titre: 'Nombre de Jeunnes', type: 'number' },
            { titre: 'Nombre de Femmes', type: 'number' },
        ];


        return AddFormSelectSexeHtml('Formulaire Ajout Membre', tabs, this.addMembresEvents);

    }

    static addMembresEvents = e => {

        e.preventDefault();

        const matricule = e.target.getElementsByTagName('input')[0].value;

        const nom = e.target.getElementsByTagName('input')[1].value;

        const prenom = e.target.getElementsByTagName('input')[2].value;

        const cin = e.target.getElementsByTagName('input')[3].value;

        const prenomPere = e.target.getElementsByTagName('input')[4].value;

        const nomMere = e.target.getElementsByTagName('input')[5].value;

        const prenomMere = e.target.getElementsByTagName('input')[6].value;

        const date_naisse = e.target.getElementsByTagName('input')[7].value;

        const lieu_naisse = e.target.getElementsByTagName('input')[8].value;

        const url_photo = e.target.getElementsByTagName('input')[9].getAttribute('value');

        const niveau_etude = e.target.getElementsByTagName('input')[10].value;

        const situation_matricule = e.target.getElementsByTagName('input')[11].value;

        const nbre_epouse = e.target.getElementsByTagName('input')[12].value;

        const nbre_personne_active_en_charge = e.target.getElementsByTagName('input')[13].value;

        const nbre_personne_inactive_en_charge = e.target.getElementsByTagName('input')[14].value;

        const nbre_jeunnes = e.target.getElementsByTagName('input')[15].value;

        const nbre_femmes = e.target.getElementsByTagName('input')[16].value;

        const body = {
            matricule,
            nom,
            prenom,
            cin,
            prenomPere,
            nomMere,
            prenomMere,
            date_naisse,
            lieu_naisse,
            url_photo,
            niveau_etude,
            situation_matricule,
            nbre_epouse,
            nbre_personne_active_en_charge,
            nbre_personne_inactive_en_charge,
            nbre_jeunnes,
            nbre_femmes,
        }

        Post('membre' ,body).then(data => {

            if(data.statusCode === 200) {
                GestionErr.affiche_err(e.target , data.message  , 'success');
            }else {
                GestionErr.affiche_err(e.target , data.message  , 'danger');
            }
                        
        });


    }

};
