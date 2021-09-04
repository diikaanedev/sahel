import { div, attribute, section, header, table, tbody, tr, th, i ,td} from "../../configs/html-element.js";
import { Get } from "../../configs/requette.js";
export default class ListerPret extends HTMLElement {

    constructor() {
        super()
    }

    static _create = () => {

        let _div = div();

        Get('pret').then(data => {

            console.log(data);


            _div = attribute(_div, 'class', 'row');

            let __div = div();

            __div = attribute(__div, 'class', 'col-lg-12');

            let _section = section();

            _section = attribute(_section, 'class', 'panel');

            let _header = header();

            _header = attribute(_header, 'class', 'panel-heading');

            _header.innerHTML = 'Liste des Prets ';

            _section.appendChild(_header);

            let _table = table();

            _table = attribute(_table, 'class', 'table table-striped table-advance table-hover');

            let _tbody = tbody();

            let _tr = tr();

            let matricule = th();
            let nomStructure = th();
            let nomMembre = th();
            let montant_pret = th();
            let montant_rembourse = th();
            let reliquat = th();
            let date = th();
            let params = th();

            matricule.innerHTML = ' <i class="icon_profile"></i>  Matricule Pret';

            nomStructure.innerHTML = ' <i class="icon_profile"></i>  Nom Structure';
            
            nomMembre.innerHTML = ' <i class="icon_profile"></i> Nom Membre';
            
            montant_pret.innerHTML = ' <i class="icon_profile"></i>  Montant Pret (FCFA)';
           
            montant_rembourse.innerHTML = ' <i class="icon_calendar"></i> Montant Rambourse ';
           
            reliquat.innerHTML = '<i class="icon_cogs"></i>Reliquat Pret';
            
            date.innerHTML = '<i class="icon_cogs"></i> date';

            params.innerHTML = '<i class="icon_cogs"></i> Paramétres';

            _tr.appendChild(matricule);
            _tr.appendChild(nomStructure);
            _tr.appendChild(nomMembre);
            _tr.appendChild(montant_pret);
            _tr.appendChild(montant_rembourse);
            _tr.appendChild(reliquat);
            _tr.appendChild(date);
            _tr.appendChild(params);

            _tbody.appendChild(_tr);

            this._TrTd(data.prets, data.membres, data.structures,).forEach(element => {
                _tbody.appendChild(element);
            });

            _table.appendChild(_tbody);

            __div.appendChild(_section);
            __div.appendChild(_table);

            _div.appendChild(__div);
        })
        return _div;


    }

    static _TrTd = (prets, membres, structures) => {
        let tabTR = [];

        for (let index = 0; index < prets.length; index++) {
            const _pret = prets[index];
            const _membre = membres[index];
            const _structure = structures[index];

            console.log(index);


            
            let _tr = tr();

            let matricule = th();
            let nomStructure = th();
            let nomMembre = th();
            let montant_pret = th();
            let montant_rembourse = th();
            let reliquat = th();
            let date = th();
            let params = th();



            matricule.innerHTML = `${_pret.id}`;
            nomStructure.innerHTML = `${_structure.nom}`;
            nomMembre.innerHTML = `${_membre.nom} ${_membre.prenom}`;
            montant_pret.innerHTML = `${_pret.montant_solicite}`;
            montant_rembourse.innerHTML = `${_pret.montant_par_mois}`;
            reliquat.innerHTML = `${_pret.montant_percu}`;
            date.innerHTML = `${_pret.createdAt.split('T')[0]}`;
            params.innerHTML = `
            <div class="btn-group">
                <a class="btn btn-primary" onClick ="alert('ici on click')" href="#"><i class="icon_plus_alt2"></i></a>
                <a class="btn btn-success"  onClick = "alert('ici on click')" href="#"><i class="icon_check_alt2"></i></a>
                <a class="btn btn-danger"  onClick = "alert('ici on click')" href="#"><i class="icon_close_alt2"></i></a>
            </div>
            `;

            _tr.appendChild(matricule);
            _tr.appendChild(nomStructure);
            _tr.appendChild(nomMembre);
            _tr.appendChild(montant_pret);
            _tr.appendChild(montant_rembourse);
            _tr.appendChild(reliquat);
            _tr.appendChild(date);
            _tr.appendChild(params);

            tabTR.push(_tr);

        }
        return tabTR;
    }



};
