import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import ListerDepartement from "../lister.js";


export const listerDepartementEvents = e => {
    e.preventDefault();
    console.log('listerRegionEvents');
    
    BaseTemplate.body(Navbar._create() , Aside._create() , ListerDepartement._create())

}