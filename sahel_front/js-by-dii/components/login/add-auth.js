import { AddFormHtml } from '../../configs/html-element.js';
import { Post } from '../../configs/requette.js';
import GestionErr from '../../configs/gestion-err.js';
import BaseTemplate from '../base-template/template.js';
import Navbar from '../navbar.js';
import Aside from '../aside-nav.js';
import LocalByjS from '../../utils/storage.js';
export default class AddAuth extends HTMLElement {

    constructor() {
        super()
    }

    static _create = () => {

        const tabs = [
            { titre: 'Nom Complet' },
            { titre: 'Email' },
            { titre: 'Mot de Passe', type: 'password' },
            { titre: 'Confirmation Mot de Passe ', type: 'password' },
        ]

        return AddFormHtml('Ajouter Auth', tabs, this.addAuthEvents);

    }

    static addAuthEvents = e => {

        e.preventDefault();

        const fullname = e.target.getElementsByTagName('input')[0].value;

        const email = e.target.getElementsByTagName('input')[1].value;

        const password = e.target.getElementsByTagName('input')[2].value;

        const c_password = e.target.getElementsByTagName('input')[3].value;

        const body = { fullname, email, password, c_password }

        Post('auth/add-admin', body).then((result) => {
            if (result.statusCode === 200) {
                BaseTemplate.body(Navbar._create(),Aside._create(), document.createElement('p'));
                LocalByjS.setRoute('home');
                LocalByjS.setToken(result.data);
            } else {
                let message = (result.message === undefined) ? 'Remplir tous les Champs' : result.message;
                GestionErr.affiche_err(e.target, message, 'danger');
            }
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });


    }

};
