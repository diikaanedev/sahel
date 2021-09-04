import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import ListerVillage from "../lister.js";
import ListerCommuneVillage from "../lister-commune-village.js";

export const listerVillageEvents = e => BaseTemplate.body(Navbar._create(), Aside._create(), ListerVillage._create());

export const listerCommuneVillageEvents = e => BaseTemplate.body(Navbar._create(), Aside._create(), ListerCommuneVillage._create());
