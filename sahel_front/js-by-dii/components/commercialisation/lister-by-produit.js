import { div, attribute, section, header, table, tbody, tr, th, i, td, AddFormSelectHtml } from "../../configs/html-element.js"
import { Post } from "../../configs/requette.js";
import BaseTemplate from "../base-template/template.js";
import Navbar from "../navbar.js";
import Aside from "../aside-nav.js";
export default class ListerByProduit extends HTMLElement {
    
    constructor() { super() }

    static _create = () => AddFormSelectHtml('culture','Lister Commercialisation Par Produit' , [] , this._listerByProduitEvent , 'lister')


    static _listerByProduitEvent = e => {
        
        e.preventDefault();

        let produit =  e.target.getElementsByTagName('select')[0].value;


        Post('commercialisation/produit' , {produit}).then((result) => {
            console.log(result);
            BaseTemplate.body(Navbar._create() , Aside._create() , this._tabsChamps(result.commerces , result.opStockers , result.recolte , result.culture , result.agriculteurs))
        }).catch((err) => {
            console.log(err);
            
        });

    }

    static _tabsChamps = (operationCommerciales, operateurs, recoltes, cultures , agriculteurs) => {
        
        let _div = div();
        _div = attribute(_div, 'class', 'row');

        let __div = div();

        __div = attribute(__div, 'class', 'col-lg-12');

        let _section = section();

        _section = attribute(_section, 'class', 'panel');

        let _header = header();

        _header = attribute(_header, 'class', 'panel-heading');

        _header.innerHTML = `Liste des Ventes Par ${cultures.nomCulture}`;

        _section.appendChild(_header);

        let _table = table();

        _table = attribute(_table, 'class', 'table table-striped table-advance table-hover');

        let _tbody = tbody();

        let _tr = tr();

        let matricule = th();
        let nom = th();
        let prenom = th();
        let masse_recolte = th();
        let opStokeur = th();
        let datePayement = th();
        let numero_quitance = th();
        let params = th();

        matricule.innerHTML = ' <i class="icon_profile"></i>  Matricule';
        nom.innerHTML = ' <i class="icon_calendar"></i> Nom  ';
        prenom.innerHTML = '<i class="fas fa-map-marked-alt"></i> Prenom';
        masse_recolte.innerHTML = ' <i class="icon_calendar"></i> Masse en (kg) ';
        opStokeur.innerHTML = ' <i class="icon_calendar"></i> Opérateur Stockeur ';
        datePayement.innerHTML = '<i class="icon_cogs"></i> Date Payement ';
        numero_quitance.innerHTML = '<i class="icon_cogs"></i> Numero Quitance ';
        params.innerHTML = '<i class="icon_cogs"></i> Paramétres';

        _tr.appendChild(matricule);
        _tr.appendChild(nom);
        _tr.appendChild(prenom);
        _tr.appendChild(masse_recolte);
        _tr.appendChild(opStokeur);
        _tr.appendChild(datePayement);
        _tr.appendChild(numero_quitance);
        _tr.appendChild(params);

        _tbody.appendChild(_tr);

        this._TrTd(operationCommerciales, operateurs, recoltes, cultures , agriculteurs).forEach(element => {
            _tbody.appendChild(element);
        });


        _table.appendChild(_tbody);
        __div.appendChild(_section);
        __div.appendChild(_table);

        _div.appendChild(__div);
        return _div;
    }


    static _TrTd = (operationCommerciales, operateurs, recoltes, cultures ,agriculteurs) => {
        let tabTR = [];

        for (let index = 0; index < operationCommerciales.length; index++) {
            const _operationCommerciale = operationCommerciales[index];
            const _operateur = operateurs[index];
            const _recolte = recoltes[index];
            const _agriculteur = agriculteurs[index];
            

            console.log(index);
            

            let _tr = tr();

            let matricule = th();
            let nom = th();
            let prenom = th();
            let masse_recolte = th();
            let opStokeur = th();
            let datePayement = th();
            let numero_quitance = th();
            let params = th();
    
            

            matricule.innerHTML = `${_operationCommerciale.id}`;
            nom.innerHTML = `${_agriculteur.membres[0].nom}`;
            prenom.innerHTML = `${_agriculteur.membres[0].prenom}`;
            masse_recolte.innerHTML = `${_recolte.masse_recolte}`;
            opStokeur.innerHTML = `${_operateur.prenom} ${_operateur.nom}`;
            numero_quitance.innerHTML = `${_operationCommerciale.numero_quitance}`;
            datePayement.innerHTML = `${_operationCommerciale.date_payement.split('T')[0]}`;
            params.innerHTML = `
            <div class="btn-group">
                <a class="btn btn-primary" onClick ="alert('ici on click')" href="#"><i class="icon_plus_alt2"></i></a>
                <a class="btn btn-success"  onClick = "alert('ici on click')" href="#"><i class="icon_check_alt2"></i></a>
                <a class="btn btn-danger"  onClick = "alert('ici on click')" href="#"><i class="icon_close_alt2"></i></a>
            </div>
            `;

            _tr.appendChild(matricule);
            _tr.appendChild(nom);
            _tr.appendChild(prenom);
            _tr.appendChild(masse_recolte);
            _tr.appendChild(opStokeur);
            _tr.appendChild(datePayement);
            _tr.appendChild(numero_quitance);
            _tr.appendChild(params);

            tabTR.push(_tr);

        }
        return tabTR;
    }

};
