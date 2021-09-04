import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import ListerRegroupement from "../lister.js";
import ListerChampsGroupement from "../liste-champs-groupements.js";
import ListerMembreGroupement from "../lister-membre-groupement.js";


export const listerRegroupementEvents = e => {

    e.preventDefault();
    const tabs = {
        icon: 'fa fa-plus',
        titre: ' Litser Pays',
        ol: [
            { titre: 'Dashbord', icon: 'fa fa-home' },
            { titre: 'Pays', icon: 'icon_document_alt' },
            { titre: 'List', icon: 'fa fa-th-list' },
        ]
    }

    BaseTemplate.body(Navbar._create() , Aside._create() , ListerRegroupement._create() , tabs)

}
export const listerChampsGroupementEvents = e => {

    e.preventDefault();
    const tabs = {
        icon: 'fa fa-plus',
        titre: ' Litser Pays',
        ol: [
            { titre: 'Dashbord', icon: 'fa fa-home' },
            { titre: 'Pays', icon: 'icon_document_alt' },
            { titre: 'List', icon: 'fa fa-th-list' },
        ]
    }

    BaseTemplate.body(Navbar._create() , Aside._create() , ListerChampsGroupement._create() , tabs)

}
export const listerMembresGroupementEvents = e => {

    e.preventDefault();
    const tabs = {
        icon: 'fa fa-plus',
        titre: ' Lister Pays',
        ol: [
            { titre: 'Dashbord', icon: 'fa fa-home' },
            { titre: 'Pays', icon: 'icon_document_alt' },
            { titre: 'List', icon: 'fa fa-th-list' },
        ]
    }

    BaseTemplate.body(Navbar._create() , Aside._create() , ListerMembreGroupement._create() , tabs)

}