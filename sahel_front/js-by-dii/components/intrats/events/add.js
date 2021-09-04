import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import AddIntrat from "../add-form.js";
import AddIntratExploitant from "../add-intrat-exploitan.js";

export const AddIntratEvents = e => {
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
    BaseTemplate.body(Navbar._create(), Aside._create(), AddIntrat._create() , tabs);
}
export const AddIntratChampsEvents = e => {
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
    BaseTemplate.body(Navbar._create(), Aside._create(), AddIntratExploitant._create() , tabs);
}