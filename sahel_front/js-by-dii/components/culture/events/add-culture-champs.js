import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import AddCultureChamps from "../add-culture-champs.js";

export const addCultureChampsEvents = e => BaseTemplate.body(Navbar._create() , Aside._create() , AddCultureChamps._create());