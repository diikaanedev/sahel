import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import AddCharge from "../add-form.js";
import AddChargeExploitant from "../add-charge-exploitan.js";


export const addChargeEvents = e => BaseTemplate.body(Navbar._create() , Aside._create() , AddCharge._create());

export const addChargeExploitEvents = e => BaseTemplate.body(Navbar._create() , Aside._create() , AddChargeExploitant._create());