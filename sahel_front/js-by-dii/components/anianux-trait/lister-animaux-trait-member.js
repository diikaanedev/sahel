import { AddFormHtml, div, attribute, section, header, table, tbody, tr, th, i, td } from "../../configs/html-element.js"
import { Post } from "../../configs/requette.js";
import BaseTemplate from "../base-template/template.js";
import Navbar from "../navbar.js";
import Aside from "../aside-nav.js";
export default class ListerAnimauxTraitMember extends HTMLElement {

    constructor() { super() }

    static _create = _ => {
        const tabs = [{ titre: 'Matricule Membre' }]

        return AddFormHtml('Lister Animaux Trait de ce Membre', tabs, this.listerAnimauxTraitMemberEvents);

    }

    static listerAnimauxTraitMemberEvents = e => {

        e.preventDefault();

        const matricule = e.target.getElementsByTagName('input')[0].value;

        Post('espece/lister-animaux-trait-member', { matricule }).then((result) => {
            if (result.statusCode === 200) {
                BaseTemplate.body(Navbar._create(), Aside._create(), this._tabsChamps(result.data[0]));

            } else GestionErr.affiche_err(e.target, 'Erreur Membres Non Trouvé ', 'danger');
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

        _header.innerHTML = `Liste des Intrats de Mr ${data.membres[0].prenom} ${data.membres[0].nom}`;

        _section.appendChild(_header);

        let _table = table();

        _table = attribute(_table, 'class', 'table table-striped table-advance table-hover');

        let _tbody = tbody();

        let _tr = tr();

        let numero_parcelle = th();
        let espece = th();
        let nombre = th();
        let params = th();

        numero_parcelle.innerHTML = ' <i class="icon_profile"></i>  Numero Parcelle';
        espece.innerHTML = ' <i class="icon_calendar"></i> Espece Animale ';
        nombre.innerHTML = ' <i class="icon_calendar"></i> Nombre Espece ';
        params.innerHTML = '<i class="icon_cogs"></i> Paramétres';

        _tr.appendChild(numero_parcelle);
        _tr.appendChild(espece);
        _tr.appendChild(nombre);
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

        //let total = 0;

        tabs.especes.forEach(element => {
            let _tr = tr();
            let numero_parcelle = th();
            let espece = td();
            let nombre = td();
            let params = td();
            numero_parcelle.innerHTML = `${tabs.matricule}`;

            nombre.innerHTML = `${element.animauxtrait.nombre}`;
            espece.innerHTML = `${element.nomEspece}`;

            params.innerHTML = `
            <div class="btn-group">
                <a class="btn btn-primary" onClick ="alert('ici on click')" href="#"><i class="icon_plus_alt2"></i></a>
                <a class="btn btn-success"  onClick = "alert('ici on click')" href="#"><i class="icon_check_alt2"></i></a>
                <a class="btn btn-danger"  onClick = "alert('ici on click')" href="#"><i class="icon_close_alt2"></i></a>
            </div>
            `;

            _tr.appendChild(numero_parcelle);
            _tr.appendChild(espece);
            _tr.appendChild(nombre);
            _tr.appendChild(params);

            tabTR.push(_tr);
        });

        // console.log(total);


        return tabTR;
    }

};
