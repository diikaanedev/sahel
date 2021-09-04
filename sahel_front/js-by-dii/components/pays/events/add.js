import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import AddPays from "../add-form.js";

export const AddPaysEvents = e => {
    e.preventDefault();
    const tabs = {
        icon: 'fa fa-plus',
        titre: ' Ajouter Pays',
        ol: [
            { titre: 'Dashbord', icon: 'fa fa-home' },
            { titre: 'Pays', icon: 'icon_document_alt' },
            { titre: 'Add', icon: 'fa fa-file-text-o' },
        ]
    }
    BaseTemplate.body(Navbar._create(), Aside._create(), AddPays._create() , tabs);
}