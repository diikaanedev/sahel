import { section, attribute, div, h3, i, ol, li, a } from "../../configs/html-element.js";

export default class BaseTemplate extends HTMLElement {

    constructor() {
        super();
    }

    static liTabs = (tabs) => {
        let _ol = ol();

        _ol = attribute(_ol, 'class', 'breadcrumb');

        tabs.forEach(element => {

            let _li = li();

            let _i = i();

            _i = attribute(_i, 'class', `${element.icon}`);

            let _a = a();

            _a = attribute(_a, 'href', '#');

            _a.innerHTML = ` ${element.titre}`;

            _li.appendChild(_i);

            _li.appendChild(_a);

            _ol.appendChild(_li);

        });

        return _ol;
    }

    static body = (header, aside, content , page= {icon : 'fa fa-file-text-o' , titre:' No title' , ol : [
        { titre: 'home', icon: 'fa fa-home' },
        { titre: 'Dashbord', icon: 'icon_document_alt' },
        { titre: 'Add', icon: 'fa fa-file-text-o' },
    ]}) => {
        

        const root = document.getElementById('container');

        while(root.firstChild) {
            root.removeChild(root.firstChild);
        }

        root.appendChild(header);
        root.appendChild(aside);

        let _section = section();

        _section = attribute(_section, 'id', 'main-content');

        let _h3 = h3();

        _h3 = attribute(_h3, 'class', 'page-header');

        let _i = i();

        _i = attribute(_i, 'class', `${page.icon}`);

        _i.innerHTML = `${page.titre}`;

        _h3.appendChild(_i);

        let __div = div();

        __div.appendChild(_h3);

        __div.appendChild(this.liTabs(page.ol));

        let __section = section();

        __section = attribute(__section, 'class', 'wrapper');

        let _div = div();

        _div = attribute(_div, 'class', 'row');



        __div = attribute(__div, 'class', 'col-lg-12');

        _div.appendChild(__div);

        __section.appendChild(_div);

        __section.appendChild(content);

        _section.appendChild(__section);


        root.appendChild(_section);


        return root;

    }

};
