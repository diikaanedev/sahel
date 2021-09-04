import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import ListerMembre from "../lister.js";

export const listerMembreEvents = e => BaseTemplate.body(Navbar._create(), Aside._create(), ListerMembre._create());