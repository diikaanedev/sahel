import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import AddMembres from "../add-form.js";

export const AddMembresEvents = e => {
    e.preventDefault();
    const tabs = {
        icon: 'fa fa-plus',
        titre: ' Ajouter Membres',
        ol: [
            { titre: 'Dashbord', icon: 'fa fa-home' },
            { titre: 'Membre', icon: 'icon_document_alt' },
            { titre: 'Add', icon: 'fa fa-file-text-o' },
        ]
    }
    BaseTemplate.body(Navbar._create(), Aside._create(), AddMembres._create() , tabs);
}