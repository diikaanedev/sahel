import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import AddConcession from "../add-form.js";

export const addConcessionEvents = e => BaseTemplate.body(Navbar._create() , Aside._create() , AddConcession._create());