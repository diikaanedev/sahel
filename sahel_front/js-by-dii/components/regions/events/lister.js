import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import ListerRegion from "../lister.js";


export const listerRegionEvents = e => {
    e.preventDefault();
    console.log('listerRegionEvents');
    
    BaseTemplate.body(Navbar._create() , Aside._create() , ListerRegion._create())

}