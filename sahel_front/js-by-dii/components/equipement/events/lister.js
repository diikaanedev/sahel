import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import ListerEquipementExploitant from "../lister-equipement-exploitant.js";
import ListerEquipement from "../lister.js";

export const ListerEquipementEvents = e => {
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
    BaseTemplate.body(Navbar._create(), Aside._create(), ListerEquipement._create() , tabs);
}

export const listeEquipementExploitantEvents = e => {
    e.preventDefault();
    const tabs = {
        icon: 'fa fa-plus',
        titre: ' Lister Equipement',
        ol: [
            { titre: 'Dashbord', icon: 'fa fa-home' },
            { titre: 'Equipement', icon: 'icon_document_alt' },
            { titre: 'Add', icon: 'fa fa-file-text-o' },
        ]
    } 
    BaseTemplate.body(Navbar._create() , Aside._create() , ListerEquipementExploitant._create() , tabs)
} ;

