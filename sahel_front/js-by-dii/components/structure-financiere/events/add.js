import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import AddStructureFinanciere from "../add-forms.js";

export const AddStructureFinanciereEvents = e => {
    e.preventDefault();
    const tabs = {
        icon: 'fa fa-plus',
        titre: ' Ajouter Opérateur Stocker',
        ol: [
            { titre: 'Dashbord', icon: 'fa fa-home' },
            { titre: 'Pays', icon: 'icon_document_alt' },
            { titre: 'Add', icon: 'fa fa-file-text-o' },
        ]
    }
    BaseTemplate.body(Navbar._create(), Aside._create(), AddStructureFinanciere._create() , tabs);
}