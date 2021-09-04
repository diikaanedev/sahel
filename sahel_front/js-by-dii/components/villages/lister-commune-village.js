import { AddFormHtml, div, attribute, section, header, table, tbody, tr, th, i, td } from "../../configs/html-element.js"
import BaseTemplate from "../base-template/template.js";
import Navbar from "../navbar.js";
import Aside from "../aside-nav.js";
import GestionErr from "../../configs/gestion-err.js";
import { Post } from "../../configs/requette.js";

export default class ListerCommuneVillage extends HTMLElement {

    constructor() { super() }

    static _create = () => {
        const tabs = [{titre : 'Matricule Commune'}];

        return AddFormHtml('Lister Village d\'une Commune' , tabs , this.listVillageCommuneEvents)
    }

    static listVillageCommuneEvents = e => {
        
        e.preventDefault();

        const body = {
            matricule: e.target.getElementsByTagName('input')[0].value
        }

        Post('village/commune', body).then(result => {
            console.log(result);
            
            if (result.statusCode === 200) {

                BaseTemplate.body(Navbar._create(), Aside._create(), this._tabsVillages(result.data));

            } else {
                GestionErr.affiche_err(e.target, 'Erreur Membres Non Trouvé ', 'danger');
            }
        })

    }

    static _tabsVillages = (data) => {
        let _div = div();
        _div = attribute(_div, 'class', 'row');

        let __div = div();

        __div = attribute(__div, 'class', 'col-lg-12');

        let _section = section();

        _section = attribute(_section, 'class', 'panel');

        let _header = header();

        _header = attribute(_header, 'class', 'panel-heading');

        _header.innerHTML = `Liste des Villages des ${data.nomCommune}`;

        _section.appendChild(_header);

        let _table = table();

        _table = attribute(_table, 'class', 'table table-striped table-advance table-hover');

        let _tbody = tbody();

        let _tr = tr();

        let code = th();
        let nom = th();
        let date = th();
        let params = th();

        code.innerHTML = ' <i class="icon_profile"></i>  Code Villages';
        nom.innerHTML = ' <i class="icon_calendar"></i> Nom Villages';
        date.innerHTML = '<i class="icon_cogs"></i> Date';
        params.innerHTML = '<i class="icon_cogs"></i> Paramétres';

        _tr.appendChild(code);
        _tr.appendChild(nom);
        _tr.appendChild(date);
        _tr.appendChild(params);

        _tbody.appendChild(_tr);

        this._TrTd(data.villages).forEach(element => {
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

        tabs.forEach(element => {
            let _tr = tr();
            let code = td();
            let nom = td();
            let date = td();
            let params = td();

            code.innerHTML = `${element.code}`;

            nom.innerHTML = `${element.nomVillage}`;

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
            _tr.appendChild(date);
            _tr.appendChild(params);

            tabTR.push(_tr);
        });

        return tabTR;
    }

};
