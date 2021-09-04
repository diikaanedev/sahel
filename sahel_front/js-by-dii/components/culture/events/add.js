import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import AddCulture from "../add-forms.js";

export const addCultureEvents = e => BaseTemplate.body(Navbar._create() , Aside._create() , AddCulture._create());