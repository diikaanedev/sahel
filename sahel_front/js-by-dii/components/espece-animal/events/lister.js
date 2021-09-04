import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import ListerEspece from "../lister.js";

export const ListerEspeceEvents = e => {
    e.preventDefault();
    const tabs = {
        icon: 'fa fa-plus',
        titre: ' Lister Espece',
        ol: [
            { titre: 'Dashbord', icon: 'fa fa-home' },
            { titre: 'Intrat', icon: 'icon_document_alt' },
            { titre: 'Add', icon: 'fa fa-file-text-o' },
        ]
    }
    BaseTemplate.body(Navbar._create(), Aside._create(), ListerEspece._create() , tabs);
}