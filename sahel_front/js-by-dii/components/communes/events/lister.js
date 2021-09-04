import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import ListerCommune from "../lister.js";


export const listerCommuneEvents = e => BaseTemplate.body(Navbar._create() , Aside._create() , ListerCommune._create())
