import { div, attribute, section, header, table, tbody, tr, th, i, td } from "../../configs/html-element.js";
import { Get } from "../../configs/requette.js";
export default class ListerCommercialisation extends HTMLElement {

    constructor() {
        super();
    }


    static _create = () => {

        let _div = div();

        Get('commercialisation').then(data => {

            console.log(data);


            _div = attribute(_div, 'class', 'row');

            let __div = div();

            __div = attribute(__div, 'class', 'col-lg-12');

            let _section = section();

            _section = attribute(_section, 'class', 'panel');

            let _header = header();

            _header = attribute(_header, 'class', 'panel-heading');

            _header.innerHTML = 'Liste des Opérations Commerciales';

            _section.appendChild(_header);

            let _table = table();

            _table = attribute(_table, 'class', 'table table-striped table-advance table-hover');

            let _tbody = tbody();

            let _tr = tr();

            let quitance = th();
            let produit = th();
            let masse = th();
            let prix = th();
            let circuit = th();
            let operateur = th();
            let date = th();
            let params = th();

            quitance.innerHTML = ' <i class="icon_profile"></i>  Numéro Quitance';
            produit.innerHTML = ' <i class="icon_profile"></i>  Produit';
            masse.innerHTML = ' <i class="icon_profile"></i>  Masse en (kg)';
            prix.innerHTML = ' <i class="icon_profile"></i>  Prix (kg)';
            circuit.innerHTML = ' <i class="icon_calendar"></i> Circuit ';
            operateur.innerHTML = '<i class="icon_cogs"></i> Opérateur Stocker';
            date.innerHTML = '<i class="icon_cogs"></i> date';
            params.innerHTML = '<i class="icon_cogs"></i> Paramétres';

            _tr.appendChild(quitance);
            _tr.appendChild(produit);
            _tr.appendChild(masse);
            _tr.appendChild(prix);
            _tr.appendChild(circuit);
            _tr.appendChild(operateur);
            _tr.appendChild(date);
            _tr.appendChild(params);

            _tbody.appendChild(_tr);

            this._TrTd(data.operationcommerce, data.operateur, data.recolte, data.cultures).forEach(element => {
                _tbody.appendChild(element);
            });

            let __tr = tr();

            let _quitance = th();
            let _produit = th();
            let _masse = th();
            let _prix = th();
            let _circuit = th();
            let _operateur = th();
            let _date = th();
            let _params = th();

            _quitance.innerHTML = '';
            _produit.innerHTML = '';
            _masse.innerHTML = '';
            _prix.innerHTML = ' ';
            _circuit.innerHTML = ' Prix Générale ';
            _operateur.innerHTML = `${this.getPrixGeneral(data.recolte, data.operationcommerce)}`;
            _date.innerHTML = '';
            _params.innerHTML = '';

            __tr.appendChild(_quitance);
            __tr.appendChild(_produit);
            __tr.appendChild(_masse);
            __tr.appendChild(_prix);
            __tr.appendChild(_circuit);
            __tr.appendChild(_operateur);
            __tr.appendChild(_date);
            __tr.appendChild(_params);

            _tbody.appendChild(__tr);

            _table.appendChild(_tbody);

            __div.appendChild(_section);
            __div.appendChild(_table);

            _div.appendChild(__div);
        })
        return _div;


    }

    static _TrTd = (operationCommerciales, operateurs, recoltes, cultures) => {
        let tabTR = [];

        for (let index = 0; index < operationCommerciales.length; index++) {
            const _operationCommerciale = operationCommerciales[index];
            const _operateur = operateurs[index];
            const _recolte = recoltes[index];
            const _culture = cultures[index];

            console.log(index);
            

            let _tr = tr();
            let quitance = th();
            let produit = th();
            let masse = th();
            let prix = th();
            let circuit = th();
            let operateur = th();
            let date = th();
            let params = th();


            quitance.innerHTML = `${_operationCommerciale.numero_quitance}`;
            produit.innerHTML = `${_culture.nomCulture}`;
            masse.innerHTML = `${_recolte.masse_recolte}`;
            prix.innerHTML = `${_operationCommerciale.prix}`;
            operateur.innerHTML = `${_operateur.prenom} ${_operateur.nom}`;
            circuit.innerHTML = `${_operationCommerciale.curcuit}`;
            date.innerHTML = `${_operationCommerciale.date_payement.split('T')[0]}`;
            params.innerHTML = `
            <div class="btn-group">
                <a class="btn btn-primary" onClick ="alert('ici on click')" href="#"><i class="icon_plus_alt2"></i></a>
                <a class="btn btn-success"  onClick = "alert('ici on click')" href="#"><i class="icon_check_alt2"></i></a>
                <a class="btn btn-danger"  onClick = "alert('ici on click')" href="#"><i class="icon_close_alt2"></i></a>
            </div>
            `;

            _tr.appendChild(quitance);
            _tr.appendChild(produit);
            _tr.appendChild(masse);
            _tr.appendChild(prix);
            _tr.appendChild(circuit);
            _tr.appendChild(operateur);
            _tr.appendChild(date);
            _tr.appendChild(params);

            tabTR.push(_tr);

        }
        return tabTR;
    }

    static getPrixGeneral = (recolte, commerce) => {
        let s = 0;
        for (let index = 0; index < recolte.length; index++) {
            const _recolte = recolte[index];
            const _commerce = commerce[index];

            s = parseInt(_commerce.prix) * parseInt(_recolte.masse_recolte);

        }

        return s;
    }

};
