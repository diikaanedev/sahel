import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import AddMembreAgriculture from "../add-membres.js";


export const addMembreAgriculteurEvents = e => BaseTemplate.body(Navbar._create() , Aside._create() , AddMembreAgriculture._create());