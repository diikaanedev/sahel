import BaseTemplate from "../components/base-template/template.js";
import Login from "../components/login/add-form.js";
import LocalByjS from "../utils/storage.js";
import AddAuth from "../components/login/add-auth.js";
import Aside from "../components/aside-nav.js";
import Navbar from "../components/navbar.js";

export const load = window.addEventListener('load' , e => {
    const tabs = {
        icon: 'fa fa-home',
        titre: ' CONNECTION PAGE',
        ol: [
            { titre: 'Connection', icon: 'fa fa-home' },
            { titre: 'Connection', icon: 'icon_document_alt' },
            { titre: 'Connection', icon: 'fa fa-file-text-o' },
        ]
    }
    const tabsHome = {
        icon: 'fa fa-home',
        titre: ' Home PAGE',
        ol: [
            { titre: 'Home', icon: 'fa fa-home' },
            { titre: 'Dashbord', icon: 'icon_document_alt' },
            { titre: 'file d\'actualite', icon: 'fa fa-file-text-o' },
        ]
    }
    console.log(LocalByjS.getToken());
    
    
    if(LocalByjS.getToken() === null ) {
        BaseTemplate.body(document.createElement('p'), document.createElement('p') , Login._create() , tabs);
    }else {
        BaseTemplate.body(Navbar._create(),Aside._create(), document.createElement('p') , tabsHome);
    }
    
});