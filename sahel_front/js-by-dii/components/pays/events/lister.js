import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import ListerPays from "../lister.js";

export const ListerPaysEvents = e => {
    e.preventDefault();
    const tabs = {
        icon: 'fa fa-plus',
        titre: ' Ajouter Pays',
        ol: [
            { titre: 'Dashbord', icon: 'fa fa-home' },
            { titre: 'Pays', icon: 'fa fa-table' },
            { titre: 'Lister', icon: 'fa fa-th-list' },
        ]
    }
    BaseTemplate.body(Navbar._create() , Aside._create() , ListerPays._create() , tabs);
}