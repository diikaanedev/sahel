import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import ListerPret from "../lister.js";
import ListerPretMembre from "../lister-pret-membre.js";
import ListerPretStructure from "../lister-pret-structure.js";

export const ListerPretEvents = e => {
    e.preventDefault();
    const tabs = {
        icon: 'fa fa-plus',
        titre: ' Lister Pret',
        ol: [
            { titre: 'Dashbord', icon: 'fa fa-home' },
            { titre: 'Pret', icon: 'icon_document_alt' },
            { titre: 'Lister', icon: 'fa fa-file-text-o' },
        ]
    }
    BaseTemplate.body(Navbar._create(), Aside._create(), ListerPret._create() , tabs);
}
export const ListerPretMembreEvents = e => {
    e.preventDefault();
    const tabs = {
        icon: 'fa fa-plus',
        titre: ' Lister Pret',
        ol: [
            { titre: 'Dashbord', icon: 'fa fa-home' },
            { titre: 'Pret', icon: 'icon_document_alt' },
            { titre: 'Lister', icon: 'fa fa-file-text-o' },
        ]
    }
    BaseTemplate.body(Navbar._create(), Aside._create(), ListerPretMembre._create() , tabs);
}
export const ListerPretStructureEvents = e => {
    e.preventDefault();
    const tabs = {
        icon: 'fa fa-plus',
        titre: ' Lister Pret',
        ol: [
            { titre: 'Dashbord', icon: 'fa fa-home' },
            { titre: 'Pret', icon: 'icon_document_alt' },
            { titre: 'Lister', icon: 'fa fa-file-text-o' },
        ]
    }
    BaseTemplate.body(Navbar._create(), Aside._create(), ListerPretStructure._create() , tabs);
}