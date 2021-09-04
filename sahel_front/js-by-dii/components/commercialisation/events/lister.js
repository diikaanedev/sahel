import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import ListerCommercialisation from "../lister.js";
import ListerByCircuit from "../lister-by-etat-circuit.js";
import ListerByProduit from "../lister-by-produit.js";

export const ListerCommercialisationEvents = e => {
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
    BaseTemplate.body(Navbar._create(), Aside._create(), ListerCommercialisation._create() , tabs);
}
export const ListerByCircuitEvent = e => {
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
    BaseTemplate.body(Navbar._create(), Aside._create(), ListerByCircuit._create() , tabs);
}
export const ListerByProduitEvent = e => {
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
    BaseTemplate.body(Navbar._create(), Aside._create(), ListerByProduit._create() , tabs);
}