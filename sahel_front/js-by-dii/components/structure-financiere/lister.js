import { div, attribute, section, header, table, tbody, tr, th, i ,td} from "../../configs/html-element.js";
import { Get } from "../../configs/requette.js";
export default class ListerStructureFinanciere extends HTMLElement {

    constructor() { super() }

    static _create = () => {

        let _div = div();

        Get('structure-financiere').then(data => {


            _div = attribute(_div, 'class', 'row');

            let __div = div();

            __div = attribute(__div, 'class', 'col-lg-12');

            let _section = section();

            _section = attribute(_section, 'class', 'panel');

            let _header = header();

            _header = attribute(_header, 'class', 'panel-heading');

            _header.innerHTML = 'Liste des Structure Financiere';

            _section.appendChild(_header);

            let _table = table();

            _table = attribute(_table, 'class', 'table table-striped table-advance table-hover');

            let _tbody = tbody();

            let _tr = tr();

            let code = th();
            let nom = th();
            let email = th();
            let telephone = th();
            let adresse = th();
            let date = th();
            let params = th();

            code.innerHTML = ' <i class="icon_profile"></i>  Code Structure';
            nom.innerHTML = ' <i class="icon_calendar"></i> Nom Structure Financiere';
            email.innerHTML = ' <i class="icon_calendar"></i> Email Structure Financiere';
            telephone.innerHTML = ' <i class="icon_calendar"></i> Téléphone Structure Financiere';
            adresse.innerHTML = ' <i class="icon_calendar"></i> Adresse Structure Financiere';
            date.innerHTML = '<i class="icon_cogs"></i> Date';
            params.innerHTML = '<i class="icon_cogs"></i> Paramétres';

            _tr.appendChild(code);
            _tr.appendChild(nom);
            _tr.appendChild(email);
            _tr.appendChild(telephone);
            _tr.appendChild(adresse);
            _tr.appendChild(date);
            _tr.appendChild(params);

            _tbody.appendChild(_tr);

            this._TrTd(data.data).forEach(element => {
                _tbody.appendChild(element);
            });

            _table.appendChild(_tbody);

            __div.appendChild(_section);
            __div.appendChild(_table);

            _div.appendChild(__div);
        })
        return _div;


    }

    static _TrTd = (tabs) => {
        let tabTR = [];
        tabs.forEach(element => {
            let _tr = tr();
            let code = td();
            let nom = td();
            let email = td();
            let telephone = td();
            let adresse = td();
            let date = td();
            let params = td();

            code.innerHTML = `${element.matricule}`;
            

            nom.innerHTML = `${element.nom}`;

            email.innerHTML = `${element.email}`;

            telephone.innerHTML = `${element.telephone}`;

            adresse.innerHTML = `${element.adresse}`;

            date.innerHTML = `${element.createdAt}`;

            params.innerHTML = `
            <div class="btn-group">
                <a class="btn btn-primary" href="#"><i class="icon_plus_alt2"></i></a>
                <a class="btn btn-success" href="#"><i class="icon_check_alt2"></i></a>
                <a class="btn btn-danger" href="#"><i class="icon_close_alt2"></i></a>
            </div>
            `;

            _tr.appendChild(code);
            _tr.appendChild(nom);
            _tr.appendChild(email);
            _tr.appendChild(telephone);
            _tr.appendChild(adresse);
            _tr.appendChild(date);
            _tr.appendChild(params);

            tabTR.push(_tr);
        });

        return tabTR;
    }

};
