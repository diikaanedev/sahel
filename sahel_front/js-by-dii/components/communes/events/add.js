import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import AddCommune from "../add-form.js";


export const addCommuneEvents = e => BaseTemplate.body(Navbar._create() , Aside._create() , AddCommune._create());