import { aside, div, attribute, ul, li, a, i, span } from "../configs/html-element.js";
import { AddPaysEvents } from "./pays/events/add.js";
import { ListerPaysEvents } from "./pays/events/lister.js";
import { addRegionEvents } from "./regions/events/add.js";
import { listerRegionEvents } from "./regions/events/lister.js";
import { addDepartementEvents } from "./departements/events/add.js";
import { listerDepartementEvents } from "./departements/events/lister.js";
import { addCommuneEvents } from "./communes/events/add.js";
import { listerCommuneEvents } from "./communes/events/lister.js";
import { addVillageEvents } from "./villages/events/add.js";
import { listerVillageEvents, listerCommuneVillageEvents } from "./villages/events/lister.js";
import { listerConcessionEvents, listerConcessionVillageEvents, listerConcessionByFontaineEvents, listerConcessionElectrickEvents } from "./concessions/events/lister.js";
import { addConcessionEvents } from "./concessions/events/add.js";
import { addRegroupementEvents, addMembresRegroupementEvents } from "./regroupement/events/add.js";
import { listerRegroupementEvents, listerChampsGroupementEvents, listerMembresGroupementEvents } from "./regroupement/events/lister.js";
import { AddMembresEvents } from "./membres/events/add.js";
import { listerMembreEvents } from "./membres/events/lister.js";
import { addAgriculteurEvents } from './agriculture/events/add.js';
import { addCultureEvents } from './culture/events/add.js';
import { listerCultureEvents } from "./culture/events/lister.js";
import { addMembreAgriculteurEvents } from "./agriculture/events/add.membres.js";
import { addCultureChampsEvents } from "./culture/events/add-culture-champs.js";
import { listerChampsMemberEvents } from "./agriculture/events/lister-champs-member.js";
import { addChargeEvents, addChargeExploitEvents } from "./charges/events/add.js";
import { listerChargeEvents, listerChargeExploitantEvents } from "./charges/events/lister.js";
import { AddIntratEvents, AddIntratChampsEvents } from "./intrats/events/add.js";
import { ListerIntratEvents, listerIntratExploitantEvents } from "./intrats/events/lister.js";
import { AddEquipementEvents, AddEquipementChampsEvents } from "./equipement/events/add.js";
import { ListerEquipementEvents, listeEquipementExploitantEvents } from "./equipement/events/lister.js";
import { AddEspeceEvents } from './espece-animal/events/add.js';
import { ListerEspeceEvents } from "./espece-animal/events/lister.js";
import { AddAnimauxTraitEvents } from "./anianux-trait/events/add.js";
import { listerAnimauxTraitMemberEvents } from "./anianux-trait/events/lister.js";
import { AddOperateurStockerEvents } from "./operateur-stocker/events/add.js";
import { listerOperateurStockerEvents } from "./operateur-stocker/events/lister.js";
import { AddCommercialisationEvents } from "./commercialisation/events/add.js";
import { AddRecolteEvents } from "./recolte-champs/events/add.js";
import { ListerCommercialisationEvents, ListerByCircuitEvent, ListerByProduitEvent } from "./commercialisation/events/lister.js";
import { AddStructureFinanciereEvents } from "./structure-financiere/events/add.js";
import { listerStructureFinanciereEvents } from "./structure-financiere/events/lister.js";
import { AddPretEvents } from "./pret/events/add.js";
import { ListerPretEvents, ListerPretStructureEvents, ListerPretMembreEvents } from "./pret/events/lister.js";
import { AddAuthEvents } from "./login/events/add.js";

export default class Aside extends HTMLElement {

  constructor() { super() }

  static _sideBar = () => {

    let _div = div();

    _div = attribute(_div, 'class', 'nav-collapse');

    _div = attribute(_div, 'id', 'sidebar');

    return _div;

  }

  static _sideBarUl = (tabs) => {


    let _ul = ul();

    _ul = attribute(_ul, 'class', 'sidebar-menu');

    tabs.forEach(element => {


      const _li = this._sideBarLi(element);

      if (element.subMenu.isActive) {
        _li.appendChild(this._ulSubMenu(element.subMenu.values))
      } else {
        _li.addEventListener('click', element.subMenu.event);
      }

      _ul.appendChild(_li);

    });



    return _ul;

  }

  static _ulSubMenu = (tabs) => {

    let _ul = ul();

    _ul = attribute(_ul, 'class', 'sub');

    tabs.forEach(element => {

      _ul.appendChild(this._liSubMenu(element));

    });

    return _ul;
  }

  static _liSubMenu = (element) => {

    let _li = li();

    let _a = a();

    _a.innerHTML = `${element.titreSubMenu}`;



    _li.appendChild(_a);

    _li.addEventListener('click', eval(element.event));

    return _li;

  }

  static _sideBarLi = (element) => {



    let _li = li();

    _li = attribute(_li, 'class', element.classes);

    let _a = a();

    _a = attribute(_a, 'href', '#');


    let _i = i();

    _i = attribute(_i, 'class', element.iconClass);

    _a.appendChild(_i);

    let _spanIcon = span();

    _spanIcon = attribute(_spanIcon, 'class', 'menu-arrow arrow_carrot-right');

    let _spanText = span();

    _spanText.innerHTML = `${element.titre}`;

    _a.appendChild(_i);
    _a.appendChild(_spanText);
    _a.appendChild(_spanIcon);

    _li.appendChild(_a);

    _li.addEventListener('click', e => {
      const tar = e.target.parentElement;
      const el = tar.getElementsByClassName('sub')[0];

      if (el.getAttribute('style') === 'display:block') {

        el.setAttribute('style', 'display:none');

      } else {

        el.setAttribute('style', 'display:block');

      }
    })

    return _li;


  }



  static _create = (tabs = JSON.parse(localStorage.getItem('menu'))) => {

    let _aside = aside();

    

    const _sidebare = this._sideBar();

    _sidebare.appendChild(this._sideBarUl(tabs));

    _aside.appendChild(_sidebare);

    return _aside;
  }


};
