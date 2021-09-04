import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import AddRegion from "../add-form.js";
import Aside from "../../aside-nav.js";


export const addRegionEvents = e => {
    BaseTemplate.body(Navbar._create() , Aside._create() , AddRegion._create())

}