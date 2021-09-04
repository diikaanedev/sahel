import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import ListerConcession from "../lister.js";
import ListerConcessionVillage from "../lister-concession-village.js";
import ListerConcessionByFontaine from "../lister-concession-bne-fontaine.js";
import ListerConcessionElectrick from "../lister-concession-electrik.js";

export const listerConcessionEvents = e => BaseTemplate.body(Navbar._create(), Aside._create(), ListerConcession._create());

export const listerConcessionVillageEvents = e => BaseTemplate.body(Navbar._create(), Aside._create(), ListerConcessionVillage._create());

export const listerConcessionByFontaineEvents = e => BaseTemplate.body(Navbar._create(), Aside._create(), ListerConcessionByFontaine._create());
export const listerConcessionElectrickEvents = e => BaseTemplate.body(Navbar._create(), Aside._create(), ListerConcessionElectrick._create());