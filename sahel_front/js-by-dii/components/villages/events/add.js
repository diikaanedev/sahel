import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import AddVillage from "../add-form.js";
import { toBase64 } from "../../../configs/base64.js";

export const addVillageEvents = e => BaseTemplate.body(Navbar._create() , Aside._create() , AddVillage._create());

export const uploadFileEvent = async e => {
    e.preventDefault();
    const c = await toBase64(e.target.files[0]);

    const _input = e.target;

    _input.setAttribute('value', c);
}