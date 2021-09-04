import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import ListerCharge from "../lister.js";
import ListerChargeExploitant from '../lister-charge-exploitant.js';

export const listerChargeEvents = e => BaseTemplate.body(Navbar._create() , Aside._create() , ListerCharge._create());
export const listerChargeExploitantEvents = e => BaseTemplate.body(Navbar._create() , Aside._create() , ListerChargeExploitant._create());