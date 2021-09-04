import { AddFormHtml, br } from "../../configs/html-element.js";
import GestionErr from "../../configs/gestion-err.js";
import BaseTemplate from "../base-template/template.js";
import Navbar from "../navbar.js";
import Aside from "../aside-nav.js";
import { Post } from "../../configs/requette.js";

export default class Login extends HTMLElement {

    constructor() {
        super();
    }

    static _create = () => {
        const tabs = [
            { titre: 'Email ou Pseudo', type: 'text' },

            { titre: 'Mot de Passe', type: 'password' },

        ];

        return AddFormHtml('Formulaire de Connection', tabs, this.addLoginEvents, 'SE CONNECTER', 2);
    }

    static addLoginEvents = e => {
        e.preventDefault();

        const email = e.target.getElementsByTagName('input')[0].value;

        const password = e.target.getElementsByTagName('input')[1].value;

        if (email === '' || password === '') {

            GestionErr.affiche_err(e.target, 'Remplir Tous Les Champs', 'danger');
        } else {
            console.log(email,password);
            Post('auth/login-admin', { email, password }).then((result) => {
                
                if (result.statusCode === 200) {
                    localStorage.setItem('menu' , JSON.stringify(result.menu))
                    localStorage.setItem('token', result.data)
                    localStorage.setItem('route', 'home')
                    localStorage.setItem('name', result.fullname)
                    BaseTemplate.body(Navbar._create(), Aside._create(), document.createElement('p'));
                } else {
                    console.log('err : ' , result);
                    GestionErr.affiche_err(e.target, 'Email ou Mot de Passe Incorect', 'danger');
                }
            }).catch((err) => {
                console.log('err : ' , err);
                
                GestionErr.affiche_err(e.target, 'Email ou Mot de Passe Incorect', 'danger');
            });
        }
    }

};
