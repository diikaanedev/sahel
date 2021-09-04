import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import AddPret from "../add-forms.js";

export const AddPretEvents = e => {
    e.preventDefault();
    const tabs = {
        icon: 'fa fa-plus',
        titre: ' Ajouter Pret',
        ol: [
            { titre: 'Dashbord', icon: 'fa fa-home' },
            { titre: 'Pret', icon: 'icon_document_alt' },
            { titre: 'Add', icon: 'fa fa-file-text-o' },
        ]
    }
    BaseTemplate.body(Navbar._create(), Aside._create(), AddPret._create() , tabs);
}