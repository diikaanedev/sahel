import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import AddDepartement from "../add-form.js";


export const addDepartementEvents = e => {
    BaseTemplate.body(Navbar._create() , Aside._create() , AddDepartement._create())

}