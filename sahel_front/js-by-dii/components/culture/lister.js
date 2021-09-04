import { div, attribute, section, header, table, tbody, tr, th, i ,td} from "../../configs/html-element.js";
import { Get } from "../../configs/requette.js";
export default class ListerCulture extends HTMLElement {
    
    constructor() {
        super();
    }

    static _create = () => {
        
        let _div = div();

        Get('culture').then(data => {

            console.log(data);

            _div = attribute(_div, 'class', 'row');
    
            let __div = div();
    
            __div = attribute(__div, 'class', 'col-lg-12');
    
            let _section = section();
    
            _section = attribute(_section, 'class', 'panel');
    
            let _header = header();
    
            _header = attribute(_header, 'class', 'panel-heading');
    
            _header.innerHTML = 'Liste des Cultures';
    
            _section.appendChild(_header);

            let _table = table();

            _table = attribute(_table, 'class', 'table table-striped table-advance table-hover');

            let _tbody = tbody();
    
            let _tr = tr();
    
            let _th = th();
            let __th = th();
            let ___th = th();
            let ____th = th();
    
            _th.innerHTML = ' <i class="icon_profile"></i>  Code Culture';
            __th.innerHTML = ' <i class="icon_calendar"></i> Nom Cultures';
            ___th.innerHTML = '<i class="icon_cogs"></i> Date';
            ____th.innerHTML = '<i class="icon_cogs"></i> Paramétres';
    
            _tr.appendChild(_th);
            _tr.appendChild(__th);
            _tr.appendChild(___th);
            _tr.appendChild(____th);
    
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
            let date = td();
            let params = td();

            code.innerHTML = `${element.id}`;

            nom.innerHTML = `${element.nomCulture}`;

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
