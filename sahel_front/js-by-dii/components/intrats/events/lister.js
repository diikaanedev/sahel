import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import ListerIntrat from "../lister.js";
import ListerIntratExploitant from "../lister-intrat-exploitant.js";

export const ListerIntratEvents = e => {
    e.preventDefault();
    const tabs = {
        icon: 'fa fa-plus',
        titre: ' Ajouter Intrat',
        ol: [
            { titre: 'Dashbord', icon: 'fa fa-home' },
            { titre: 'Intrat', icon: 'icon_document_alt' },
            { titre: 'Add', icon: 'fa fa-file-text-o' },
        ]
    }
    BaseTemplate.body(Navbar._create(), Aside._create(), ListerIntrat._create() , tabs);
}

export const listerIntratExploitantEvents = e => {
    e.preventDefault();
    const tabs = {
        icon: 'fa fa-plus',
        titre: ' Lister Intrat',
        ol: [
            { titre: 'Dashbord', icon: 'fa fa-home' },
            { titre: 'Intrat', icon: 'icon_document_alt' },
            { titre: 'Add', icon: 'fa fa-file-text-o' },
        ]
    } 
    BaseTemplate.body(Navbar._create() , Aside._create() , ListerIntratExploitant._create())
} ;

