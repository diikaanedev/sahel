import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import ListerCulture from "../lister.js";


export const listerCultureEvents = e => {
    e.preventDefault();
    console.log('listerRegionEvents');
    
    BaseTemplate.body(Navbar._create() , Aside._create() , ListerCulture._create())

}