import { AddFormHtml, div, attribute, section, header, table, tbody, tr, th, i, td } from "../../configs/html-element.js"
import { Post } from "../../configs/requette.js";
import BaseTemplate from "../base-template/template.js";
import Navbar from "../navbar.js";
import Aside from "../aside-nav.js";

export default class ListerMembreGroupement extends HTMLElement {

    constructor() { super() }

    static _create = () => {
        const tabs = [
            { titre: 'Matricule Groupement' }
        ]

        return AddFormHtml('Lister Champs des Membres', tabs, this.listeEvents, 'Lister Champs');
    }

    static listeEvents = e => {
        e.preventDefault();

        const body = {
            matricule: e.target.getElementsByTagName('input')[0].value
        }

        Post('groupement/liste-membres', body).then((result) => {
            
            console.log(result);
            
            

            if (result.statusCode === 200) {
                console.log('hre');
                
                BaseTemplate.body(Navbar._create(), Aside._create(), this._tabsChamps(result.data));

            } else {
                GestionErr.affiche_err(e.target, 'Erreur Membres Non Trouvé ', 'danger');
            }

        }).catch((err) => {
            console.log(err);
            
        });

    }

    static _tabsChamps = (data) => {
        let _div = div();
        _div = attribute(_div, 'class', 'row');

        let __div = div();

        __div = attribute(__div, 'class', 'col-lg-12');

        let _section = section();

        _section = attribute(_section, 'class', 'panel');

        let _header = header();

        _header = attribute(_header, 'class', 'panel-heading');

        _header.innerHTML = `Liste des Membres de ${data.nomGroupement}`;

        _section.appendChild(_header);

        let _table = table();

        _table = attribute(_table, 'class', 'table table-striped table-advance table-hover');

        let _tbody = tbody();

        let _tr = tr();

        let code = th();
        let nom = th();
        let numero_parcelles = th();
        let longitude = th();
        let lattitude = th();
        let surface_total = th();
        let surface_cultive = th();
        let surface_mise_en_jachere = th();
        let date = th();
        let params = th();

        code.innerHTML = ' <i class="icon_profile"></i>  Code Membre';
        nom.innerHTML = ' <i class="icon_calendar"></i> Nom Membres';
        numero_parcelles.innerHTML = '<i class="icon_cogs"></i> Sexe';
        longitude.innerHTML = '<i class="fas fa-map-marked-alt"></i> Date Naissance';
        lattitude.innerHTML = '<i class="fas fa-map-marked-alt"></i> Lieux Naissance';
        surface_total.innerHTML = '<i class="fas fa-map-marked-alt"></i> Niveau Etude';
        surface_cultive.innerHTML = '<i class="fas fa-map-marked-alt"></i> Situation Matrimoniale';
        date.innerHTML = '<i class="icon_cogs"></i> Date';
        params.innerHTML = '<i class="icon_cogs"></i> Paramétres';

        _tr.appendChild(code);
        _tr.appendChild(nom);
        _tr.appendChild(numero_parcelles);
        _tr.appendChild(longitude);
        _tr.appendChild(lattitude);
        _tr.appendChild(surface_total);
        _tr.appendChild(surface_cultive);
        _tr.appendChild(date);
        _tr.appendChild(params);

        _tbody.appendChild(_tr);

        this._TrTd(data).forEach(element => {
            _tbody.appendChild(element);
        });

        _table.appendChild(_tbody);

        __div.appendChild(_section);
        __div.appendChild(_table);

        _div.appendChild(__div);
        return _div;
    }

    static _TrTd = (tabs) => {
        let tabTR = [];

        tabs.membres.forEach(element => {
            let _tr = tr();
            let code = td();
            let nom = td();
            let numero_parcelles = td();
            let longitude = td();
            let lattitude = td();
            let surface_total = td();
            let surface_cultive = td();
            let surface_mise_en_jachere = td();
            let date = td();
            let params = td();

            code.innerHTML = `${element.matricule}`;

            nom.innerHTML = `${element.prenom} ${element.nom}`;

            numero_parcelles.innerHTML = `${element.sexe}`
            longitude.innerHTML = `${element.date_naisse}`;
            lattitude.innerHTML = `${element.lieu_naisse}`;
            surface_total.innerHTML = `${element.niveau_etude}`;
            surface_cultive.innerHTML = `${element.situation_matricule}`;

            date.innerHTML = `${element.createdAt}`;


            params.innerHTML = `
            <div class="btn-group">
                <a class="btn btn-primary" onClick ="alert('ici on click')" href="#"><i class="icon_plus_alt2"></i></a>
                <a class="btn btn-success"  onClick = "alert('ici on click')" href="#"><i class="icon_check_alt2"></i></a>
                <a class="btn btn-danger"  onClick = "alert('ici on click')" href="#"><i class="icon_close_alt2"></i></a>
            </div>
            `;

            _tr.appendChild(code);
            _tr.appendChild(nom);
            _tr.appendChild(numero_parcelles);
            _tr.appendChild(longitude);
            _tr.appendChild(lattitude);
            _tr.appendChild(surface_total);
            _tr.appendChild(surface_cultive);
            _tr.appendChild(date);
            _tr.appendChild(params);

            tabTR.push(_tr);
        });

        return tabTR;
    }

};
