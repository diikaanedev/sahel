import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import AddAgriculture from "../add-form.js";


export const addAgriculteurEvents = e => BaseTemplate.body(Navbar._create() , Aside._create() , AddAgriculture._create());